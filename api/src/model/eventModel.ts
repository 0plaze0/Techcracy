import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  coordinaters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
  contact: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
});

export const eventModel = mongoose.model("events", eventSchema);
