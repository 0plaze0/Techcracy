import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvent,
  getEvent,
  updateEvent,
} from "./../controllers/eventController";

const router = express.Router();

router.post("/create-event", createEvent);
router.put("/update-event/:id", updateEvent);
router.get("/get-event", getAllEvent);
router.get("/get-event/:id", getEvent);
router.delete("/delete-event/:id", deleteEvent);

export default router;
