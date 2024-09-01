import { Request, Response } from "express";
import path from "path";

export const getImage = (req: Request, res: Response) => {
  try {
    const { imageId } = req.params;
    // const image = imageId + ".png";
    const image = imageId;
    return res.sendFile(path.join(__dirname, `./../uploads/${image}`));
  } catch (error) {
    console.log(error);
  }
};
