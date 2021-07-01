//Модули которые необходимо подключить:

var express = require('express');  // сам фреймворк
var https = require( "https" );  // для организации https
var fs = require( "fs" );   // для чтения ключевых файлов

//Задать опции ключевой информации:

httpsOptions = {
    key: fs.readFileSync("server.key"), // путь к ключу
    cert: fs.readFileSync("server.crt") // путь к сертификату
}
//Открыть порт

https.createServer(httpsOptions, app).listen(443);

//*app – это объект полученый от express().

//Вариант 2

const https = require('https');
const fs = require('fs');

// readFileSync function must use __dirname get current directory
// require use ./ refer to current directory.

const options = {
   key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
  cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};


 // Create HTTPs server.

 var server = https.createServer(options, app);

//Вариант 3

//1. Generate a self-signed certificate
// openssl req -nodes -new -x509 -keyout server.key -out server.cert

//2. Enable HTTPS in Express

var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})


