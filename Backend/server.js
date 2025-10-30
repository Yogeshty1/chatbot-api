import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";
import chatRouter from "./routes/chat.js";

// Load environment variables from .env file
dotenv.config();

//middleware
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

// Import and use chat routes
app.use("/api", chatRouter);

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  } catch(err) {
    console.log("Failed to connect with DB", err);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});