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
  window.location.reload(false)
}

export const uploadFile = async(file: File) => {
  console.log("Uploading file...")

  const S3_BUCKET = "twuring";
  const REGION = "us-east-1";

  AWS.config.update({
    accessKeyId: "AKIA4MTWLHQKPKMNZXW4",
    secretAccessKey: "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",
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
        "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
      );
    })
    .promise();
  await upload.then((err, data) => {
    console.log(err);
    console.log("File uploaded successfully.");
  });
}

export const getRandomIndex = (arr: []) => {
  return Math.floor(Math.random() * arr.length)
}
