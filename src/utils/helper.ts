import AWS from 'aws-sdk';

export const parseToObject = (str: string) => {
  // ----- Parses intended response of AI (formatted between {{...}} ) into an object ----- //
  console.log("STRING: ", str)
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
  console.log("Uploading file...")

  const S3_BUCKET = "twuring";
  const REGION = "us-east-1";

  AWS.config.update({
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const params = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };
  var upload = s3
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      console.log(
        // @ts-ignore
        "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
      );
    })
    .promise();
  await upload.then((err: any) => {
    console.log(err);
    console.log("File uploaded successfully.");
  });
}

export const getRandomIndex = (arr: []) => {
  return Math.floor(Math.random() * arr.length)
}
