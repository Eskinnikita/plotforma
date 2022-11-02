const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const authRouter = require('./routers/authRouter')

require("dotenv").config();
const port = process.env.PORT;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/auth", authRouter)

const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.k2ge5s8.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
