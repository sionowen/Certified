const express = require('express');
// const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const app = express();
const multer = require('multer');
const fs = require('fs');

// app.use(fileUpload());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let name;
let yours;
let position;
let path;

const Storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,'./public/uploads')
  },
  filename: function(req,file,callback){
    callback(null,file.fieldname + "_" + Date.now() + "_" + file.originalname )
  }
});

let upload = multer({
  storage: Storage
}).single('image');



// sendEmail Endpoint
app.post('/sendemail', (req, res) => {
  upload(req,res, function(err){
    if(err){
    console.log('err in POST', err)
    return res.end("something went wrong")
    }
    else{
      name = req.body.name;
      yours = req.body.yours;
      position = req.body.position;

      path = req.file.path;

      console.log(name, yours, position, path);

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
          user: 'crnaa9809@gmail.com',
          pass: 'rivswciovbsmutqs'
        }
      })

      const mailOptions = {
        from: 'crnaa9809@gmail.com',
        to: 'alexcarufel094@gmail.com',
        subject: name,
        text: position,
        attachments: [
          {
            path: path
          }
        ]
      }

      transporter.sendMail(mailOptions,function(err,info) {
        if(err){
          console.log(err)
        } else{
          console.log("email sent" + info.response)
          
          fs.unlink(path, function(err){
            if(err){
              return res.end(err)
            }
            else{
              console.log("deleted");
              return res.redirect('/career')
            }
          })
        }
      })

    }
  })
})

// Upload Endpoint used for old resume
// app.post('/upload', (req, res) => {
//     console.log('req.body', req.body)
//   const file = req.files.file;

//   file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

const PORT = process.envPORT || 5007

app.listen(PORT, () => console.log('Server Started on', PORT));