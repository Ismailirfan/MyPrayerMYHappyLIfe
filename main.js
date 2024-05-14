// api.js
const axios = require('axios');

async function fetchData() {
  try {
    // Make a GET request to the website
    const response = await axios.get('https://chatgpt.com/c/b39a62b0-f584-4ba7-8a87-65e02afbfd9d');
    // Extract the data from the response
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { fetchData };
