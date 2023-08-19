const fs = require('fs');

const inputFile = '././domain-list.txt';
const outputFile = '././domains.json';

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
      
