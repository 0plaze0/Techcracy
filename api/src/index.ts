import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import { connectDB } from "./config/connectDB";

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`connected to server: ${PORT}`);
  });
});
