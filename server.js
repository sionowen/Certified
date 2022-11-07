const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();


app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    console.log('req.body', req.body)
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

const PORT = process.envPORT || 5007

app.listen(PORT, () => console.log('Server Started on', PORT));