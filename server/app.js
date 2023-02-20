var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }))

const port = process.env.PORT || 80;

let serveFrontend = function (_, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'), function (err) {
        if (err) res.status(500).send(err);
    })
}

app.listen(port);

app.set('port', port);

app.use(router);

app.get('/', serveFrontend);
app.use("/static", express.static(__dirname + '/build/static'));
