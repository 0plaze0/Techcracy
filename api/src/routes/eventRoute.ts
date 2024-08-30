import express from "express";
import multer from "multer";
import {
  createEvent,
  deleteEvent,
  getAllEvent,
  getEvent,
  updateEvent,
} from "./../controllers/eventController";
import { storage } from "../config/multerConfig";

const router = express.Router();
const upload = multer({ storage });

router.post("/create-event", upload.single("file"), createEvent);
router.put("/update-event/:id", updateEvent);
router.get("/get-event", getAllEvent);
router.get("/get-event/:id", getEvent);
router.delete("/delete-event/:id", deleteEvent);

export default router;
