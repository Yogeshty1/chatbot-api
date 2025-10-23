<<<<<<< HEAD
# DeepSeek AI Chat Application

A full-stack application that provides an interface to interact with DeepSeek AI through OpenRouter API.

## Project Structure

```
GPTS/
├── Backend/          # Node.js Express API server
│   ├── server.js     # Main server file
│   ├── package.json  # Dependencies and scripts
│   └── README.md     # Backend documentation
├── Frontend/         # Frontend application (to be implemented)
└── README.md         # This file
```

## Features

- **Backend API**: RESTful API endpoint for AI chat interactions
- **DeepSeek AI Integration**: Uses OpenRouter to access DeepSeek AI models
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

The API will be available at `http://localhost:8080`

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Author

[Yogesh Tiwari](https://github.com/Yogeshty1)

## License

ISC
=======
# chatbot-api
>>>>>>> d960c2286dcd0210e18ac677e1ff3fa98ccc7cdc
