// Clients
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// ----------------------------------------------- //

export const parseToObject = (str: string) => {
  // ----- Parses intended response of AI (formatted between {{...}} ) into an object ----- //
  const regex = /\{[^{}}]*\}/i;
  const json = regex.exec(str)
  if(json){
    // console.log("JSON: ", json)
    try {
      const obj = JSON.parse(json[0])
      return obj
    } catch (e) {
      throw new Error("Unable to parse into object due to formatting. (inner)")
    }
  } else {
    throw new Error("Unable to parse into object due to formatting. (outer)")
  }
}

export const refreshPage = () => {
  // @ts-ignore
  window.location.reload(false)
}

export const uploadFile = async(file: File) => {
  console.log("Uploading to AWS S3...")
  const REGION = import.meta.env.VITE_AWS_REGION;
  const client = new S3Client({
    region: REGION,
    maxAttempts: 15,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY
    }
    })

  const S3_BUCKET = import.meta.env.VITE_AWS_BUCKET_NAME;
  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

export const getRandomIndex = <T>(arr: Array<T>): number => {
  return Math.floor(Math.random() * arr.length)
}

export const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const blobToUrl = (blob: Blob) => {
  return URL.createObjectURL(blob)
}

export const createProfilePicFileFromBlob = (blob: Blob, id: string) => {
  const file = new File([blob], `${id}_profile_pic.jpg`)
  return file
}

export const createPostImageFileFromBlob = (blob: Blob, name: string) => {
  const file = new File([blob], `${name}_image_post.jpg`)
  return file
}

export const emptyTwur = {
  _id: "",
  name: "",
  user_name: "",
  description: "",
  appearance: ""
}
