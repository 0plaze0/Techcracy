import { Request, Response } from "express-serve-static-core";
import { eventModel } from "../model/eventModel";
import { Event } from "../types/event";

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
  res.send("update-Event");
};
const getAllEvent = async (req: Request, res: Response) => {
  res.send(["event 1", "event 2"]);
}; //also send the total event count for pagination
const getEvent = async (req: Request, res: Response) => {
  res.send("event 1");
};
const deleteEvent = async (req: Request, res: Response) => {
  res.send("event one deleted");
};

export { createEvent, updateEvent, getAllEvent, getEvent, deleteEvent };
