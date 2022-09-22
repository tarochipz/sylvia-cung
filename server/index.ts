const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 9090;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const BUCKET_NAME = "sylviacung-images";

app.use(express.static(DIST_DIR));

app.get("/api/photos", async (req: any, res: any) => {
  const imageType = req.query.imageType;
  const fileURLs: string[] = [];
  const { Storage } = require("@google-cloud/storage");

  // Create client from a Google service account key
  const gcstorage = new Storage({
    keyFilename: "/Users/sylvia/Desktop/gcs-admin-service-account.json",
  });
  const [files] = await gcstorage
    .bucket(BUCKET_NAME)
    .getFiles({ prefix: imageType }); //folder name

  files.forEach((file: any) => {
    const fileUrl = `https://storage.googleapis.com/sylviacung-images/${file.name}`;
    fileURLs.push(fileUrl);
  });
  return res.json({ fileURLs: fileURLs.slice(1) });
});

//@ts-ignore
app.get("/", (_req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
