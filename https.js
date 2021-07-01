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
