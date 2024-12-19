import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import aylien from 'aylien_textapi'; // Import the Aylien SDK

dotenv.config();

const app = express();

app.use(express.static('dist'));
app.use(express.json());

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

app.post('/analyze', (req, res) => {
  const { url } = req.body;
  textapi.sentiment({
    url: url,
  }, (error, response) => {
    if (error) {
      return res.status(500).send({ error });
    }
    res.send(response);
  });
});

app.get('/', (req, res) => { res.send('Server is running'); });

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});

export default app;
