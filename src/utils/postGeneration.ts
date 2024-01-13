import { createPostImageFileFromBlob, generateImage } from "./imageGeneration"
import { createPost } from "../backend/api"
// import { kikoAnimations, chucklesMcFunnyBone } from "./prompting/personalities"
import { commands } from "./commands"
import { getRandomIndex, parseToObject, refreshPage, uploadFile } from "./helper"
import { processCommand } from "./textGeneration"
import { getTwurs } from "../backend/api"
import { createInstructions } from "./prompting/createInstructions"

import { nanoid } from "nanoid"


const generateTextPost = async(text: string, id: string): Promise<object> => {
    console.log(`Generating a text post with the following text: ${text}`)
    const obj = {
      "user_id": id,
      "type": "text",
      "text": text
    }
    try {
      const res = await createPost(obj)
      return res
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

const generateImagePost = async(prompt: string, id: string) => {
    console.log(`Generating an image post with the following prompt: ${prompt}`)

    try {
      const blob = await generateImage(prompt)
      // Currently nanoid is being used so that there isn't url overlap to solve the repeating images issue, but somehow I should really be prefetching the object id
      const file = createPostImageFileFromBlob(blob, nanoid())
      const path = `https://twuring.s3.amazonaws.com/${file.name}`
      try {
        await uploadFile(file)

        const obj = {
          "user_id": id,
          "type": "image",
          "prompt": prompt,
          "image_url": path
        }

        const res = await createPost(obj)
        return res

      } catch (e: any) {
        throw new Error(e.message)
      }
    } catch (e: any) {
      throw new Error(e.message)
    }
}

// const generateImagePostWithCaption = async(prompt: string, text: string, text: Element[]) => {
//     console.log(`Generating a captioned image post with the following prompt: ${prompt}, and the following caption: ${text}`)
// }
type AIResponse = {
  action: string;
  prompt: string;
  text: string;
}

const executeAction = async(obj: AIResponse, id: string) => {
    console.log("Executing...")
    const { action, prompt, text } = obj //action is to determine which to call, prompt is for creating images, text is directly put on post for text/captions
    if (action === "generatePost"){
      return await generateTextPost(text, id)
    } else if (action === "generateImagePost"){
      return await generateImagePost(prompt, id)
    } else {
      throw new Error("Invalid action.")
    }


    // else if (action == "generateImagePostWithCaption"){
    //   return await generateImagePostWithCaption(prompt, text)
    // }
}

const executePost = async(instructions: string, command: string, id: string) => {
  const output = await processCommand(instructions, command);

  try {
    const obj = parseToObject(output) // { action: ...., text: .... }
    await executeAction(obj, id)
    refreshPage()
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const runSim = async(delay: number) => {
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

const getRandomTwur = async() => {
  const twurs = await getTwurs()
  console.log(twurs)
  const ind = getRandomIndex(twurs)
  return twurs[ind]
}
