const AWS = require('aws-sdk');

const bucketName = process.env.BUCKET_NAME;
const IdentityPoolId = process.env.POOL_ID;
const region = 'ap-northeast-2';

AWS.config.update({
  region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId,
  }),
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: bucketName,
  },
});

const uploadImageFileToS3 = async (file, dir) => {
  const { filename, createReadStream } = await file;
  const stream = createReadStream();

  const extensionRegex = /(.jpg|.gif|.jpeg|.png)$/i;
  if (!extensionRegex.test(filename)) {
    return false;
  }

  const imageFile = await s3
    .upload({
      ACL: 'public-read',
      Key: `${dir}/${Date.now().toString()}_${filename}`,
      Body: stream,
    })
    .promise();

  return imageFile;
};

module.exports = { s3, uploadImageFileToS3 };
