# ai Chat Application

A full-stack application that provides an interface to interact with DeepSeek AI through OpenRouter API.

## Project Structure



## Features

- **Backend API**: RESTful API endpoint for AI chat interactions
- **AI Integration**: Uses OpenRouter to access DeepSeek AI models
- **CORS Support**: Configured for frontend integration
- **Error Handling**: Comprehensive error handling and validation
- **Environment Configuration**: Secure API key management

## Quick Start

### Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```


### API Usage

Send a POST request to `/test` endpoint:

```bash
curl -X POST http://localhost:8080/test \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

## Technologies

- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI SDK, OpenRouter API
- **Security**: CORS, Environment variables
- **Development**: dotenv for configuration


## Author

[Yogesh Tiwari](https://github.com/Yogeshty1)

## License

ISC
