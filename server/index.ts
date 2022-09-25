import express from "express";
import path from "path";
import { Storage } from "@google-cloud/storage";

const app = express();
const port = process.env.PORT || 9090;
const __dirname = path.resolve();
const DIST_DIR = path.join(__dirname, "./dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const GCS_BUCKET_NAME = "sylviacung-images";

// app.use(express.static(DIST_DIR));

export interface Image {
  id: string;
  fileName: string;
  fileUrl: string;
  loaded: boolean
}
export type ImageType = "food" | "landscape" | "portraits";

app.get("/api/photos", async (req: any, res: any) => {
  const imageType: ImageType = req.query.imageType;
  const fileURLs: Image[] = [];

  // Create client from a Google service account key
  const gcstorage = new Storage({
    keyFilename: "./secrets/gcs-admin-service-account.json",
  });
  const [files] = await gcstorage
    .bucket(GCS_BUCKET_NAME)
    .getFiles({ prefix: imageType }); //folder name

  files.forEach((file: any) => {
    const imageData: Image = {
      id: file.metadata.id,
      fileName: file.name,
      fileUrl: `https://storage.googleapis.com/sylviacung-images/${file.name}`,
      loaded: false
    };
    fileURLs.push(imageData);
  });
  return res.json(fileURLs.slice(1));
});

//@ts-ignore
app.get("/*", (_req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
