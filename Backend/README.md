# DeepSeek AI Chat API

A Node.js Express server that provides an API endpoint to interact with DeepSeek AI through OpenRouter.

## Features

- RESTful API endpoint for AI chat
- Integration with DeepSeek AI via OpenRouter
- CORS enabled for frontend integration
- Error handling and validation
- Environment variable configuration

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the Backend directory:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

3. Start the server:
   ```bash
   npm start
   ```

## API Usage

### POST /test

Send a message to DeepSeek AI and get a response.

**Request:**
```json
{
  "message": "Your question or message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "AI response here"
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:8080/test \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

## Technologies Used

- Node.js
- Express.js
- OpenAI SDK
- CORS
- dotenv

## Author

[Yogesh Tiwari](https://github.com/Yogeshty1)