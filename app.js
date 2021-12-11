var express = require('express');
var app = express();
var mongoose = require('mongoose');

const cors = require('cors');
const mime = require('mime');
var bodyParser = require('body-parser');
const fs = require('fs');

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

app.get('/start', function (req, res) {
    res.send('start');
})

app.use('/api', routes);

app.use('/uploadfile', (req, res, next) => { 
    var imgB64Data = req.body.oData;
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

var server = app.listen(8080, function () {
    console.log("Server Create");
    const host=server.address().address
    const port=server.address().port;
    console.log("API Listening at http://%s:%s",host,port);
});

mongoose
    .connect(
        'mongodb+srv://ajtest:b2VUp9qe7DiiMqlp@cluster0.b2p29.mongodb.net/Metaverse?retryWrites=true'
    )
    .then(result => {
        console.log('mongoose connected');

        var server = app.listen(8082);
        const host=server.address().address
        const port=server.address().port;
        console.log("API Listening at http://%s:%s",host,port);

        const io = require('./socket').init(server);
        io.on('connection', socket => {
            console.log('Client connected');
            // require('./socket').getIO().emit('liveUser', { liveUser: require('./socket').getUserConnected() });
            console.log(">>>>getNoOfUserConnected", require('./socket').getNoOfUserConnected());
        })
    })
    .catch(err => console.log(err));
