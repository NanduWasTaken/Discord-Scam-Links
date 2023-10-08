const fs = require('fs');

const inputFile = './domain-list.txt';



const fetch = require('@replit/node-fetch');
const url = 'https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/txt/domain-list.txt';
const filePath = inputFile;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    
    fs.writeFileSync(filePath, data);

    console.log(`File ${filePath} has been updated with the fetched content.`);
  })
  .catch(error => {
    console.error('Error:', error);
  });


const outputFile = './domains.json';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  const domains = data.split('\n').filter(domain => domain.trim() !== '');

  const jsonData = JSON.stringify({ domains }, null, 2);

  fs.writeFile(outputFile, jsonData, 'utf8', err => {
    if (err) {
      console.error('Error writing the output file:', err);
      return;
    }
    console.log('Domains have been written to domains.json');
  });
});



fs.readFile('fetch-info.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const currentNumber = parseInt(data, 10);
  const newNumber = currentNumber + 1;

  fs.writeFile('fetch-info.txt', newNumber.toString(), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Number incremented and saved successfully.');
    }
  });
});

