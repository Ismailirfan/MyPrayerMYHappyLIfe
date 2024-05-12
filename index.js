const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Define a route to fetch data from the website
app.get('/api/data', async (req, res) => {
  try {
    // Make a GET request to the website
    const response = await axios.get();
    // Extract the data from the response
    const data = response.data;
    // Send the data as the API response
    res.json(data);
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
