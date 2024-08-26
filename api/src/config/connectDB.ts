import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`connected to host: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error while connecting to Database");
    console.log(error);
  }
};
