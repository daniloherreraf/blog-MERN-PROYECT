import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js";


export async function connectDB() {
    await mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connect to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
}