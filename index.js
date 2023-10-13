const express = require('express');
const axios = require('axios');
const multer = require('multer');

const app = express();
const port = 3000; // Change this to the desired port number

app.use(express.json());

// Set up a file upload middleware using multer
const upload = multer({ dest: 'uploads/' });

// Define a route to handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const mp3File = req.file;

    if (!mp3File) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Remove the temporary file after it's sent
    fs.unlinkSync(mp3File.path);

    res.json({ message: 'File uploaded and sent successfully', file: mp3File });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});