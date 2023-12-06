const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Set the URL to be encoded into the QR code
const urlToEncode = 'https://hannaochpablo.github.io/';

// Folder to save the generated QR code image
const qrCodeFolder = 'qr_codes';

// Create the folder if it doesn't exist
if (!fs.existsSync(qrCodeFolder)) {
  fs.mkdirSync(qrCodeFolder);
}

// Endpoint to generate and save the QR code
app.get('/generateQrCode', async (req, res) => {
  try {
    const qrCodeImagePath = path.join(qrCodeFolder, 'qrcode.png');

    // Generate QR code
    await QRCode.toFile(qrCodeImagePath, urlToEncode);

    res.send('QR code generated and saved successfully!');
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
