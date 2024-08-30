import { Request, Response } from "express-serve-static-core";
import { eventModel } from "../model/eventModel";
import { Event } from "../types/event";
import fs from "fs";
import path from "path";

// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// export const __dirname = path.join(
//   dirname(fileURLToPath(import.meta.url)),
//   ".."
// );

const createEvent = async (req: Request<{}, {}, Event>, res: Response) => {
  try {
    const { title, description, date, location, organizers, event_type } =
      req.body;
    if (!req.file) return res.send("please upload poster");

    const { filename } = req.file;

    const event = await eventModel.create({
      title,
      description,
      date,
      location,
      event_type,
      image: {
        id: filename,
        url: filename,
      },
    });
    return res.status(200).send({ success: true, event });
  } catch (error) {
    console.log(error);
  }
};
const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  if (!id)
    return res
      .status(404)
      .json({ success: false, message: "Please send a valid Id" });
  try {
    const events = await eventModel.findById(id);
    if (!events) return res.status(404).send("please send valid Id");

    let filename;
    if (req.file) {
      await fs.unlink(
        path.join(__dirname, `./../uploads/${events?.image?.id}`),
        (error) => {
          if (error) {
            res.status(500).send("Error updating file");
          }
        }
      );
      filename = req.file.filename;
    }

    const updatevent = await eventModel.findByIdAndUpdate(id, {
      ...req.body,
      image: {
        id: filename,
        url: filename,
      },
    });

    return res.status(200).send({ success: true, updatevent });
  } catch (error) {
    console.log(error);
  }
};
const getAllEvent = async (req: Request, res: Response) => {
  try {
    const events = await eventModel.find({});
    return res.status(200).send({ succes: "true", events });
  } catch (error) {
    console.log(error);
  }
};
const getEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    if (!id)
      return res
        .status(404)
        .json({ success: false, message: "Please send a valid Id" });

    const events = await eventModel.findById(id);

    return res.status(200).json({ success: true, events });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error while getting event" });
  }
};
const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = await eventModel.findByIdAndDelete(id);

    await fs.unlink(
      path.join(__dirname, `./../uploads/${event?.image?.id}`),
      (error) => {
        if (error) {
          res.status(500).send("Error deleting file");
        } else {
          res.send("File deleted successfully");
        }
      }
    );

    return res
      .status(200)
      .json({ success: true, message: "Product Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error while getting event" });
  }
};

export { createEvent, updateEvent, getAllEvent, getEvent, deleteEvent };
