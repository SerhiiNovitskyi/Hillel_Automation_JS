const fetch = require('node-fetch');
const fs = require('fs');

const apiUrl = 'https://reqres.in/api/users?page=1&per_page=5';
const jsonFilePath = 'response.json';

async function fetchDataAndSaveToFile() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

    console.log(`Data saved to ${jsonFilePath}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

fetchDataAndSaveToFile();
