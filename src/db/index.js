import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const mongoURL = process.env.MONGODB_URL;

console.log("Mongo ENV URL:", `"${mongoURL}"`);


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${mongoURL}/${DB_NAME}`);
    console.log(`\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}\n`);
  } catch (error) {
    console.log("MONGODB Connection error:", error.message);
    process.exit(1);
  }
}

export default connectDB;
