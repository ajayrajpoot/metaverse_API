var express = require('express');
var app = express();
var mongoose = require('mongoose');

const cors = require('cors');
const mime = require('mime');
var bodyParser = require('body-parser');
const fs = require('fs');
const upload = require('express-fileupload')


const multer = require('multer');
const path = require('path');


var routes = require('./routes/routes');
const { urlencoded } = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send('cors problem fixed:)');
});
 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};  

app.post('/api/fileupload', (req, res) => {
// console.log("EVN",process.env.dev)

    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: imageFilter }).single('file');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.json({error:req.fileValidationError});
        }
        else if (!req.file) {
            return res.json({error:'Please select an image to upload'});
        }
        else if (err instanceof multer.MulterError) {
            return res.json({error:err});
        }
        else if (err) {
            return res.json({error:err});
        }

        // Display uploaded image for user validation
        let url = "http://localhost:8081/uploads/";
        // let url = "http://62.171.178.135:8081/uploads/";
        console.log(__line,req.file)
        res.json({
            file :`${url}${req.file.filename}`
        } );
    });
});

app.post('/api/upload-multiple-images', (req, res) => {
    // 10 is the limit I've defined for number of uploaded files at once
    // 'multiple_images' is the name of our file input field
    let upload = multer({ storage: storage, fileFilter: imageFilter }).array('multiple_images', 10);

    upload(req, res, function(err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (true) // The same as when uploading single images
        {

        }

        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="./">Upload more images</a>';
        res.send(result);
    });
});
 
app.get('/api/start', function (req, res) {
    res.send('start');
})

// if (req.file) {
//     console.log(req.files);
//     var file = req.files.file;
//     var filename = file.name
//     console.log(filename)
//     files.mv('./uploads/', filename, function (err) {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send("File Upload")
//         }
//     })
// } else {
//     res.send({ msg: 'no file' })
// } 
app.post('/api/uploadfile', (req, res, next) => {
    var imgB64Data = req.body.oData;
    console.log(">>>", imgB64Data)
    var decodedImg = decodeBase64Image(imgB64Data);
    var imageBuffer = decodedImg.data;
    var type = decodedImg.type;
    console.log("type", type)
    var extension = "jpg";
    console.log("type", extension);
    console.log(">>>", new Date());
    var date = new Date();
    var fileName = date.getTime() + "_image." + extension;
    try {
        fs.writeFileSync("public/uploads/" + fileName, imageBuffer, 'utf8');
        res.send({ Message: "Fileupload", Result: true, fileName: fileName, location: "uploads/" + fileName })
    }
    catch (err) {
        console.error(err)
        res.send({ Message: " Fail to Upload File", Result: true, err: err })
    }
});
app.use('/api', routes);

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

var server = app.listen(8081, function () {
    console.log("Server Create");
    const host = server.address().address
    const port = server.address().port;
    console.log("API Listening at http://%s:%s", host, port);

    require('./scripts/bootstrap');

});


// var server = app.listen(8081,'62.171.178.135', function () {
//     console.log("Server Create");
//     const host = server.address().address
//     const port = server.address().port;
//     console.log("API Listening at http://%s:%s", host, port);

//     require('./scripts/bootstrap');

// });
