const express = require("express");
const path = require("path");
//@ts-ignore
const { Storage } = require("@google-cloud/storage");

const app = express();
const port = process.env.PORT || 9090;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const BUCKET_NAME = "sylviacung-images";

app.use(express.static(DIST_DIR));

app.get("/api/photos", async (_req: any, res: any) => {
  const fileURLs: any[] = [];
  const gcstorage = new Storage();
  const [files] = await gcstorage
    .bucket(BUCKET_NAME)
    .getFiles({ prefix: "/portraits" }); //folder name
  console.log("Files:");

  files.forEach((file: any) => {
    console.log(file.name);
    const fileRef = gcstorage.bucket(BUCKET_NAME).file(file.name);
    const config = { action: "read" };
    fileRef.getSignedUrl(config, function (err: any, url: any) {
      if (err) {
        console.error(err);
        return;
      }
      fileURLs.push(url);
      console.log("Url is : " + url);
    });
  });
  return res.send(fileURLs);
});

//@ts-ignore
app.get("/", (_req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});
