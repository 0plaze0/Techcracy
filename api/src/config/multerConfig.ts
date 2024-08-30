import multer from "multer";
import path from "path";
import fs from "fs";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, "./../uploads");
    fs.mkdir(uploadsDir, { recursive: true }, (err) => {
      if (err) {
        console.error("Error creating uploads directory:", err);
        cb(err, uploadsDir);
      } else {
        cb(null, uploadsDir);
      }
    });
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
