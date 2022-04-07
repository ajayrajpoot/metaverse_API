var express = require('express');
var app = express();
var mongoose = require('mongoose');

const cors = require('cors');
const mime = require('mime');
var bodyParser = require('body-parser');
const fs = require('fs');
const upload = require('express-fileupload')

var routes = require('./routes/routes');

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



const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/api/start', function (req, res) {
    res.send('start');
})
app.post('/api/fileupload', (req, res) => {
    if (req.file) {
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name
        console.log(filename)
        files.mv('./uploads/', filename, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.send("File Upload")
            }
        })
    }else{
        res.send({msg:'no file'})
    }
})
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
 
