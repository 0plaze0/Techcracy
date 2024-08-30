import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
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
  organizers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
  location: {
    type: String,
  },
  event_type: {
    type: String,
    require: true,
  },
});

export const eventModel = mongoose.model("events", eventSchema);
