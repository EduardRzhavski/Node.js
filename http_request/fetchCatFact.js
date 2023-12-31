const https = require('https');

const initialUrl = 'https://catfact.ninja/fact'; 

const options = {
  followRedirect: true,
};

https.get(initialUrl, options, (response) => {
  console.log('Status Code:', response.statusCode);

  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    try {
      console.log('Raw Response:', data);

      const catFact = JSON.parse(data);

      console.log('Cat Fact:', catFact.fact);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
    }
  });
}).on('error', (error) => {
  console.error('Error making HTTPS request:', error.message);
});


