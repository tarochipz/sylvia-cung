import express from "express";
import path from "path";
import { Storage } from "@google-cloud/storage";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config()
const app = express();
const port = process.env.PORT || 9090;
const __dirname = path.resolve();
const DIST_DIR = path.join(__dirname, "./dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const GCS_BUCKET_NAME = "sylviacung-images";

const projectId = process.env.GCS_PROJECT_ID
const client_email = process.env.GCS_CLIENT_EMAIL;
const private_key = process.env.GCS_PRIVATE_KEY //https://github.com/googleapis/google-cloud-node/issues/1173#issuecomment-199183259

console.log('projectId',projectId)
console.log('client_email',client_email)
console.log('private_key',private_key)


export interface Image {
  id: string;
  fileName: string;
  fileUrl: string;
  loaded: boolean;
}
export type ImageType = "food" | "landscape" | "portraits";

app.use(express.static(DIST_DIR));

app.get("/api/photos", async (req: express.Request, res: express.Response) => {
  const imageType: ImageType = req.query.imageType as ImageType;
  const fileURLs: Image[] = [];
  const gcstorage = new Storage({
    projectId,
    credentials: {
      private_key,
      client_email,
    },
    retryOptions: { maxRetries: 3 },
  });
  const [files] = await gcstorage
    .bucket(GCS_BUCKET_NAME)
    .getFiles({ prefix: imageType }); //folder name

  files.forEach((file: any) => {
    const imageData: Image = {
      id: file.metadata.id,
      fileName: file.name,
      fileUrl: `https://storage.googleapis.com/sylviacung-images/${file.name}`,
      loaded: false,
    };
    fileURLs.push(imageData);
  });
  return res.json(fileURLs.slice(1));
});

//@ts-ignore
app.get("*", (_req, res: express.Response) => {
  return res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
