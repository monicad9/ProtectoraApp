var express = require("express");
var app = express();
var mongoose = require('mongoose');

var http = require('http').Server(app);
var path = require('path');

//mongoose.connect('mongodb://localhost:27017/MeanExample');

var port = process.env.PORT || '3000';

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/', function(peticion,respuesta){
	respuesta.sendFile(path.normalize(__dirname + "/../public/"));
});

app.get("/login", function(req,res){
	res.send();
})



http.listen(port,function(){
	console.log("OK. Aplicacion escuchando en puerto " + port);
})