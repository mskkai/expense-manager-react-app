const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "/public");
const port = process.env.PORT || 3000;
const staticServe = express.static(publicPath);

app.use("/", staticServe);
app.use("*", staticServe);

app.listen(port, () => {
  console.log("server is up and running");
});
