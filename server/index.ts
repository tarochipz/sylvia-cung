const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8081;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const mockResponse = {
  foo: "bar",
  bar: "foo",
};
app.use(express.static(DIST_DIR));
//@ts-ignore 
app.get("/api", (_req, res) => {
  res.send(mockResponse);
});
//@ts-ignore 
app.get("/", (_req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});
