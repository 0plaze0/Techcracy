import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  image: {
    id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

export const organizerModel = mongoose.model("Organizer", organizerSchema);
