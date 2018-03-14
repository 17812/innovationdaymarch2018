/*eslint-env node*/

var fs = require('fs');
var cookieParser = require('cookie-parser');
var express = require('express');
// var session = require('express-session');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var cfenv = require('cfenv');

// Create the Express app
var app = express();
var appEnv = cfenv.getAppEnv();

app.use(cookieParser());
// app.use(cookieSession({ secret: 'yoyo!!', cookie: { maxAge: 60 * 60 * 1000 }}));

app.use(bodyParser.urlencoded({ extended: true }));
// Use CORS and make the request body easy to parse
app.use(cors());



app.use(bodyParser.json());


//Running on Bluemix ensure we authenticate with w3id

app.use(express.static('public'));

var port = process.env.PORT || 7007;

app.listen(port, '0.0.0.0', function() {
  console.log('The server is starting on port ' + port + '!');
});