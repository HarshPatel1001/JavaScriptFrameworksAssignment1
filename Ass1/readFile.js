const fs = require('fs');
const path = require('path');

// Define the path to the text file
const filePath = path.join(__dirname, 'textfile.txt');

// Read the file contents asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Output the content to the terminal
    console.log(data);
});