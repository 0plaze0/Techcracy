import { Request, Response } from "express";
import { EventOrganizer } from "../types/event";
import { organizerModel } from "../model/eventOrganizermodel";
import fs from "fs";
import path from "path";

const createOrganizer = async (
  req: Request<{}, {}, EventOrganizer>,
  res: Response
) => {
  const { name, email, phone } = req.body;
  if (!req.file)
    return res.status(400).send({ message: "Please Provide Image" });

  const { filename } = req.file;

  try {
    const duplicate = await organizerModel.find({ name });

    if (duplicate.length)
      return res
        .status(409)
        .json({ success: true, message: "Organizer Already exist" });

    const origanizer = await organizerModel.create({
      name,
      phone,
      email,
      image: {
        id: filename,
        url: filename,
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Organizer Created Successfulyy" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getAllOrganizer = async (req: Request, res: Response) => {
  try {
    const organizers = await organizerModel.find({});
    return res.status(200).send({ success: true, organizers });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getOrganizer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const organizer = await organizerModel.findById(id);
    return res.status(200).json({ success: true, organizer });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteOrganizer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const organizer = await organizerModel.findByIdAndDelete(id);

    await fs.unlink(
      path.join(__dirname, `./../uploads/${organizer?.image?.id}`),
      (error) => {
        if (error) {
          res.status(500).send("Error deleting file");
        }
      }
    );

    return res
      .status(200)
      .json({ success: true, message: "Organizer Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createOrganizer, getAllOrganizer, getOrganizer, deleteOrganizer };
