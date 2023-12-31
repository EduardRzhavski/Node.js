const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// GET
app.get('/numbers', (req, res) => {
  res.send('Success using GET');
});

// POST
app.post('/numbers', (req, res) => {
  const requestData = req.body;
  console.log('Received data in POST request:', requestData);
  res.send('Success using POST');
});

// DELETE
app.delete('/numbers', (req, res) => {
  res.send('Success using DELETE');
});

// PUT
app.put('/numbers', (req, res) => {
  const requestData = req.body;
  console.log('Received data in PUT request:', requestData);
  res.send('Success using PUT');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
