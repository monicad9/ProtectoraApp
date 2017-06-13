var express = require("express");
var app = express();
var http = require('http').Server(app);
var path = require('path');
/*var bodyParser = require("body-parser");*/
var port = process.env.PORT || '3000';

/* CONEXIÓN CON BASE DE DATOS MONGODB HACIENDO USO DE MONGOOSE */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ejemplo_mongo', function(err){
	if (err){
		console.log(err)
	}
	else{
		console.log("Conectado a MongoDB")
	}
});

// Creación de Schema administrador

var admin_credential = mongoose.Schema({
    email: String,
    pass: String,
});

var datos_voluntario = mongoose.Schema({
	dni: String,
	nombre: String,
	apellidos: String,
	email: String,
	direccion: String,
	telefono: String,
	movil: String,
	fecha_nacimiento: String,
	genero: String,
})

var Admin = mongoose.model('admins', admin_credential);
var Voluntario = mongoose.model('lista_voluntarios', datos_voluntario);

// Registro de un administrador 

/*var admin01 = new Admin({
	email : 'admin@gmail.com',
	pass: '1234'
})

admin01.save(function(error){
	if(error){
		throw error;
	}
})*/



app.use(express.static(__dirname + '../public'));

/*app.use(bodyParser.urlencoded({
	extended:true
}));*/

/*app.use(bodyParser.json());*/

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});



app.post("/login", function(req,res){

	var datos = JSON.parse(req.query.datoslogin)

	Admin.findOne({email: datos.email, pass: datos.pass}, function (err, docs) {
	    if (err){
	    	throw err;	
	    } 
	    else{
	    	if (docs != null){
	    		let admin = {'logged' : true};
				res.send(admin);
	    	}

	    	else{
	    		admin = {'logged' : false};
	    		res.send(admin)
	    	}
	    }
	});
})




app.post("/admin/registrarvoluntarios", function(req,res){

	var datos_vol = JSON.parse(req.query.datosvoluntario);

	Voluntario.findOne({dni: datos_vol.dni}, function(err,docs){

		if (err){
			throw err;
		}

		else{

			if (docs == null){
				var newVoluntario = new Voluntario({
					dni: datos_vol.dni,
					nombre: datos_vol.nombre,
					apellidos: datos_vol.apellidos,
					email: datos_vol.email,
					direccion: datos_vol.direccion,
					telefono: datos_vol.telefono,
					movil: datos_vol.movil,
					fecha_nacimiento: datos_vol.fecha_nacimiento,
					genero: datos_vol.genero
				})

				newVoluntario.save(function(error){
					if(err){
						throw err;
					}
					else{
						let added = {'añadido' : true};
						res.send(added);
					}
				})				
			}

			else{
				let added = {'añadido' : false};
				res.send(added);
			}
		}
	})
});



app.post("/admin/editarvoluntarios", function(req,res){
	Voluntario.find({}, function(err,docs){
		if (err){
			throw err;
		}
		else{
			res.send({docs})
		}
	})
})



http.listen(port,function(){
	console.log("OK. Aplicacion escuchando en puerto " + port);
})