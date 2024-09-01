import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { connectDB } from "./config/connectDB";
import { eventRoutes, organizerRoutes } from "./routes";
import { corsOptions } from "./config/corsOptions";
import cookieParser from "cookie-parser";

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//routes

app.use("/api/v1/event", eventRoutes);
app.use("/api/v1/organizer", organizerRoutes);
app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`connected to server: ${PORT}`);
  });
});
