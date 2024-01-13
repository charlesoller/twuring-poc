import { hf } from "./clients"
import { uploadFile } from "./helper"
import { updateTwurProfilePicture } from "../backend/api"

export const blobToUrl = (blob: Blob) => {
    return URL.createObjectURL(blob)
}

const createProfilePicFileFromBlob = (blob: Blob, id: string) => {
    const file = new File([blob], `${id}_profile_pic.jpg`)
    return file
}

export const createPostImageFileFromBlob = (blob: Blob, id: string) => {
    const file = new File([blob], `${id}_image_post.jpg`)
    return file
}


export const generateImage = async(prompt: string) => {
    console.log("Generating image with stable diffusion...")
    try {
        const res = await hf.textToImage({
            inputs: prompt,
            model: "stabilityai/stable-diffusion-xl-base-1.0",
        })
        // const url = URL.createObjectURL(res)
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
