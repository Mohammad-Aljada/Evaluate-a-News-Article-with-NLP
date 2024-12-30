const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.post('/sentiment', async (req, res) => {
  const apiKey = process.env.API_key;
  const inputUrl = req.body.url; // Ensure you pass "url" in the request body
  //console.log("The URL Test:", inputUrl);  Log the URL
  //console.log("The API Key Test:", apiKey); Log the API Key

  if (!inputUrl) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1`;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        key: apiKey,
        url: inputUrl,
        lang: 'en'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); //This Debug Line for API response
    res.send(data);
  } catch (e) {
    res.status(500).json({ message: 'Failed to fetch data', error: e.message });
  }
});


// Root Endpoint
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Designates what port the app will listen to for incoming requests
port = 3000;
app.listen(port, function () {
  console.log(`Server listening on port : ${port}`);
});

module.exports = {app};
