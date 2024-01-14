// Functions
import { uploadFile } from "./helper"
import { updateTwurProfilePicture } from "../backend/api"
import { createProfilePicFileFromBlob, blobToUrl } from "./helper"

// Clients
import { hf } from "./clients"

// ----------------------------------------------- //

export const generateImage = async(prompt: string) => {
    console.log("Generating image with stable diffusion...")
    try {
        const res = await hf.textToImage({
            inputs: prompt,
            model: "stabilityai/stable-diffusion-xl-base-1.0",
        })

        return res;
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export const generateProfilePicture = async(id: string, appearance: string) => {
    console.log("Generating profile pic...")
    const blob = await generateImage(appearance)
    const file = createProfilePicFileFromBlob(blob, id)
    const path = `https://twuring.s3.amazonaws.com/${file.name}`
    try {
        await uploadFile(file)
        updateTwurProfilePicture(id, path)
    } catch (e: any) {
        throw new Error(e.message)
    }

    console.log("DONE", blobToUrl(blob))
}
