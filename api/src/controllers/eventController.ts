import { Request, Response } from "express";
import { eventModel } from "../model/eventModel";

//to-do
const createEvent = async (req: Request, res: Response) => {
  res.send("Create-Event");
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
