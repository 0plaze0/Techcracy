import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
});
