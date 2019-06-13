'use strict';

const http = require('http');
const cors = require("cors");
const api = require('./api');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    const url = req.url;
    const apiResult = api.routes(url);
    console.log(apiResult);
    res.end(apiResult);
}).listen(5000, function () {
    console.log("server start at port 5000");
});
