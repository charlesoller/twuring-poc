// Functions
import { generateImage } from "./imageGeneration"
import { createPost } from "../backend/api"
import { commands } from "./commands"
import { getRandomIndex, parseToObject, refreshPage, uploadFile, createPostImageFileFromBlob } from "./helper"
import { processCommand } from "./textGeneration"
import { getTwurs } from "../backend/api"
import { createInstructions } from "./prompting/createInstructions"
import { nanoid } from "nanoid"
import { timeout } from "./helper"

// Types
import { AIResponse, TwurInterface } from "./types"

// ----------------------------------------------- //

const generateTextPost = async(text: string, user_id: string): Promise<object> => {
    console.log(`Generating a text post with the following text: ${text}`)

    // Formatting for upload to DB
    const data = {
      "type": "text",
      user_id,
      text
    }

    try {
      const res = await createPost(data)
      return res
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

const generateImagePost = async(prompt: string, user_id: string): Promise<object> => {
    console.log(`Generating an image post with the following prompt: ${prompt}`)

    try {
      const blob = await generateImage(prompt)
      const file = createPostImageFileFromBlob(blob, nanoid())
      const image_url = `https://twuring.s3.amazonaws.com/${user_id}/${file.name}`
      try {
        await uploadFile(file)

        // Formatting for upload to DB
        const data = {
          "type": "image",
          user_id,
          prompt,
          image_url
        }

        const res = await createPost(data)
        return res

      } catch (e: any) {
        throw new Error(e.message)
      }
    } catch (e: any) {
      throw new Error(e.message)
    }
}

const generateCaptionedImagePost = async(prompt: string, text: string, user_id: string): Promise<object> => {
  console.log(`Generating a captioned image post with the following caption: ${text} using the following prompt: ${prompt}`)

  try {
    const blob = await generateImage(prompt)
    // Currently nanoid is being used so that there isn't url overlap to solve the repeating images issue, but somehow I should really be prefetching the object id
    const file = createPostImageFileFromBlob(blob, nanoid())
    const image_url = `https://twuring.s3.amazonaws.com/${user_id}/${file.name}`

    try {
      await uploadFile(file)

      // Formatting for upload to DB
      const data = {
        "type": "captioned_image",
        user_id,
        text,
        prompt,
        image_url
      }

      const res = await createPost(data)
      return res

    } catch (e: any) {
      throw new Error(e.message)
    }
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const determineAction = async(obj: AIResponse, id: string): Promise<object> => {
    // Determines what action should be taken given the input
    console.log("Executing...")
    const { action, prompt, text } = obj //action is to determine which to call, prompt is for creating images, text is directly put on post for text/captions
    if (action === "generatePost"){
      return await generateTextPost(text, id)
    } else if (action === "generateImagePost"){
      return await generateImagePost(prompt, id)
    } else if (action === "generateCaptionedImagePost"){
      return await generateCaptionedImagePost(prompt, text, id)
    } else {
      throw new Error("Invalid Action.")
    }
}

const executePost = async(instructions: string, command: string, id: string): Promise<undefined> => {

  const output = await processCommand(instructions, command);

  try {
    const obj = parseToObject(output) // returns obj in format: { action: ...., text?: ...., prompt?: .... }
    await determineAction(obj, id)
    refreshPage() //This is purely for dev purposes, in production the page should NOT refresh after each post
  } catch (e: any) {
    throw new Error(e.message)
  }
}


export const runSim = async(delay: number): Promise<undefined> => {
  // This is the function in charge of running the simulation
  // Takes in a delay in seconds and recursively calls itself with delay interval
  // Each run, it will randomly pick one Twur to make a post

  const delayInMs = delay * 1000

  try {
    const twur = await getRandomTwur()
    console.log("THE CHOSEN TWUR: ", twur.name)
    const instructions = createInstructions(twur.description)   // Formats twurs description for prompting chat model
    await executePost(instructions, commands[0], twur._id)
  } catch (e: any) {
    console.error(e.message)
  }

  await timeout(delayInMs)
  runSim(delay)
}

const getRandomTwur = async(): Promise<TwurInterface> => {
  // Fetches all Twurs from DB and returns one at random
  const twurs = await getTwurs()
  const ind = getRandomIndex(twurs)
  return twurs[ind]
}
