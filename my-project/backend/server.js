const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json');
const path = require('path');
const redata = require('./resdata.json');
const city = require('./city.json');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('🚀 SwiggyClone Backend API is Running!');
});

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Serve image metadata JSON
app.get('/images', (req, res) => {
  res.json(data);
});

app.get("/api/images", (req, res) => {
  res.json(redata);
});

app.get("/city", (req, res) => {
  res.json(city);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
