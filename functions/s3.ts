import { GetObjectCommand, S3Client } from 'npm:@aws-sdk/client-s3';
import { env } from '@env';

const client = new S3Client({
  region: env.S3_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    sessionToken: env.AWS_SESSION_TOKEN,
  },
});

type ImageType = 'face' | 'plate' | 'thumb';

const getImage = async (key: string, type: ImageType) => {
  console.log('Getting image from S3', key, type);
  const params = {
    Bucket: env.S3_BUCKET,
    Key: key,
  };
  const command = new GetObjectCommand(params);
  const response = await client.send(command);
  const buffer = await response.Body?.transformToByteArray();
  console.log('Image metadata', response.ContentType);
  if (!buffer) throw new Error('Error reading image from S3');
  Deno.writeFileSync(`./images/${key}`, buffer);
  return buffer;
};

if (import.meta.main) {
  const key = 'img.png';
  const buffer = await getImage(key, 'face');
  console.log(buffer);
}
