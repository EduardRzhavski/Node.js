// axios

const axios = require('axios');

axios.get('https://catfact.ninja/fact')
  .then(response => {
    console.log('Axios Response:', response.data.fact);
  })
  .catch(error => {
    console.error('Axios Error:', error.message);
  });

// request module

const request = require('request');

request('https://catfact.ninja/fact', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.log('Request Module Response:', data.fact);
  } else {
    console.error('Request Module Error:', error);
  }
});

// another 3rd party module

const fetch = require('node-fetch');

fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    console.log('Node-fetch Response:', data.fact);
  })
  .catch(error => {
    console.error('Node-fetch Error:', error.message);
  });
