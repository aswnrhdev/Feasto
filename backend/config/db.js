import mongoose, { mongo } from "mongoose";
// import dotenv from 'dotenv'
// dotenv.config()

export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGODB_CON
    )
    .then(() => console.log("Connected to MongoDB Atlas"));
};
