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
app.use(cors({
  origin: [
    'https://chatbot-g0l744ssl-yogeshs-projects-5026fb04.vercel.app',
    'https://chatbot-h513znl91-yogeshs-projects-5026fb04.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true
}));

// Root route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Import and use chat routes
app.use("/api", chatRouter);

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    };

    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("✅ Connected to MongoDB successfully!");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});