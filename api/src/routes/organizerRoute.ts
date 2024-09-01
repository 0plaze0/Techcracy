import express from "express";
import multer from "multer";
import {
  createOrganizer,
  getOrganizer,
  getAllOrganizer,
  deleteOrganizer,
} from "./../controllers/organizerController";
import { storage } from "../config/multerConfig";

const router = express.Router();
const upload = multer({ storage });

router.post("/create-organizer", upload.single("file"), createOrganizer);
router.get("/get-organizer", getAllOrganizer);
router.get("/get-organizer/:id", getOrganizer);
router.delete("/delete-organizer/:id", deleteOrganizer);

export default router;
