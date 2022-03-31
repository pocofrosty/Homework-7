const mongoose = require("mongoose");
const express = require("express");

const app = express();
//const MONGO_URI = process.env.MONGO_URI || ''
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("hello world!");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
