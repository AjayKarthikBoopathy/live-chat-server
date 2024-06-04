const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();

app.use(express.json());

// const userRoutes = require("./Routes/userRoutes");
// const chatRoutes = require("./Routes/chatRoutes");
// const messageRoutes = require("./Routes/messageRoutes");

module.exports = app;