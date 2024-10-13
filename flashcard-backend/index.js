const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;  // Backend server will run on port 3001

// Create a route to handle the Oxford API requests
app.get('/api/oxford/:word', (req, res) => {
  const word = req.params.word;  // Get the word from the request URL

  // Make a request to the Oxford Dictionary API
  axios.get(`https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/${word}`, {
    headers: {
      app_id: '1680b4d8',  // Replace with your Oxford API Application ID
      app_key: 'f24487715380adacd1a029b2a0a9921a'  // Replace with your Oxford API Application Key
    }
  })
  .then(response => res.json(response.data))  // Send the API response to the client
  .catch(error => {
    console.error('Error fetching data:', error);  // Log the error
    res.status(500).json({ error: 'Error fetching data' });  // Return an error response
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
