import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const getOpenAIAPIResponse = async(message) => {
    try {
        if (!message) {
        throw new Error("Message is required");
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
        
        return aiResponse.choices[0].message.content;
    } catch (err) {
    console.error("❌ Error:", err.message);
    throw err;
    }
};

export default getOpenAIAPIResponse;