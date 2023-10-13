const express = require('express');
const axios = require('axios');
require('dotenv').config();
const multer = require('multer');
const FormData = require('form-data');
const fs = require('fs');

const app = express();
const port = 3000; // Change this to the desired port number

app.use(express.json());

// Set up a file upload middleware using multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    // Generate a new file name with the .mp3 extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.mp3');
  },
});
const upload = multer({ storage: storage });
module.exports = upload;

// Define a route to handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const mp3File = req.file;

    if (!mp3File) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
		console.log(mp3File)
		const transcription = await transcribeGenerate(mp3File)

    // Remove the temporary file after it's sent
    fs.unlinkSync(mp3File.path);

    res.json({ message: 'File uploaded and sent successfully', file: mp3File, transcription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

async function transcribeGenerate(file){
	filePath = file.destination + file.filename;
	const formData = new FormData();
	const newfile = fs.createReadStream(filePath)
	formData.append('file', newfile);
	formData.append('model', 'whisper-1');
	
	try {
		const retorno = await axios({
			method: 'post',
			url: 'https://api.openai.com/v1/audio/transcriptions',
			headers: {
				'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
				...formData.getHeaders(),
			},
			data: formData,
		})

		return retorno.data.text
	} catch (error) {
		throw new Error(error);
	}

}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});