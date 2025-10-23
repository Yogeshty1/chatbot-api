import express from "express";
import OpenAI from "openai";
import dotenv from 'dotenv';
import cors from "cors";
// Load environment variables from .env file
dotenv.config();

//middleware
const app =express();
const PORT = 8080;

app.use(express.json());
app.use(cors());


const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

app.post("/test", async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required"
      });
    }

    const aiResponse = await client.chat.completions.create({
      model: "deepseek/deepseek-chat",
      messages: [
        { role: "system", content: "You are DeepSeek AI, created by DeepSeek. You should always identify yourself as DeepSeek AI, not as OpenAI or any other company." },
        { role: "user", content: message },
      ],
    });

    console.log("User message:", message);
    console.log("AI response:", aiResponse.choices[0].message.content);
    
    res.json({ 
      success: true, 
      message: aiResponse.choices[0].message.content 
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

