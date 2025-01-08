// server/index.js

const path = require('path');

const express = require('express');

const HOST = process.env.NODE_HOST_IP;

const PORT = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

// For JSON parsing
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${PORT}`);
});
