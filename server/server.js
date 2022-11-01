const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
