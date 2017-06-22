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

var datos_veterinario = mongoose.Schema({
	dni: String,
	nombre: String,
	correo: String,
	telefono: String,
	movil: String,
});

var datos_mascota = mongoose.Schema({
	chip: String,
	nombre: String,
	especie: String,
	raza: String,
	genero: String,
	peso: String,
	largo: String,
	altura: String,
	estado: String,
	nacimiento: String,
	esterilizado: String,
	vacunas: String,
	enfermedades: String,
	regimen: String,
	descripcion: String,
});



var Admin = mongoose.model('admins', admin_credential);
var Voluntario = mongoose.model('lista_voluntarios', datos_voluntario);
var Veterinario = mongoose.model('lista_veterinarios', datos_veterinario);
var Mascota = mongoose.model('lista_mascotas', datos_mascota);

// Registro de mascotas para poder hacer pruebas
/*var masc01 = new Mascota({
	chip: "72345678",
	nombre: "Chucho",
	especie: "Perro",
	raza: "Mestizo",
	genero: "Hembra",
	peso: "2,40",
	largo: "40,20",
	altura: "20,10",
	estado: "Disponible",
	nacimiento: '2010-09-14',
	esterilizado: 'Si',
	vacunas: 'Rabia, Desparasitacion',
	enfermedades: 'Ninguna',
	regimen: 'No',
	descripcion: 'Perra muy cariñosa',	
})

masc01.save(function(error){
	if (error){
		throw error;
	}
})

var masc02 = new Mascota({
	chip: "62345678",
	nombre: "Chucho",
	especie: "Perro",
	raza: "Mestizo",
	genero: "Hembra",
	peso: "2,40",
	largo: "40,20",
	altura: "20,10",
	estado: "Disponible",
	nacimiento: '2010-09-14',
	esterilizado: 'Si',
	vacunas: 'Rabia, Desparasitacion',
	enfermedades: 'Ninguna',
	regimen: 'No',
	descripcion: 'Perra muy cariñosa',	
})

masc02.save(function(error){
	if (error){
		throw error;
	}
})

var masc03 = new Mascota({
	chip: "52345678",
	nombre: "Chucho",
	especie: "Perro",
	raza: "Mestizo",
	genero: "Hembra",
	peso: "2,40",
	largo: "40,20",
	altura: "20,10",
	estado: "Disponible",
	nacimiento: '2010-09-14',
	esterilizado: 'Si',
	vacunas: 'Rabia, Desparasitacion',
	enfermedades: 'Ninguna',
	regimen: 'No',
	descripcion: 'Perra muy cariñosa',	
})

masc03.save(function(error){
	if (error){
		throw error;
	}
})



*/
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

/* Voluntarios añadidos para poder hacer pruebas */

/*var vol01 = new Voluntario({
	dni: '77393801C',
	nombre: 'Monica',
	apellidos: 'Daza Aguilera',
	email:'monica@gmail.com',
	direccion: 'C/Mirlo Nº8',
	telefono: '958582401',
	movil: '652263601',
	fecha_nacimiento: '1996-09-14',
	genero: 'Mujer'
})
vol01.save(function(err){
	if(err){
		throw err;
	}
})	
var vol02 = new Voluntario({
	dni: '77889944M',
	nombre: 'voluntario',
	apellidos: 'apellidos',
	email: 'email@gmail.com',
	direccion: 'c/cualquiera',
	telefono: '958632401',
	movil: '699850124',
	fecha_nacimiento: '1996-09-14',
	genero: 'mujer'
})
vol02.save(function(err){
	if(err){
		throw err;
	}
})	
var vol03 = new Voluntario({
	dni: '11223366L',
	nombre: 'voluntario',
	apellidos: 'apellidos',
	email: 'email@gmail.com',
	direccion: 'c/cualquiera',
	telefono: '958632401',
	movil: '699850124',
	fecha_nacimiento: '1996-09-14',
	genero: 'mujer'
})
vol03.save(function(err){
	if(err){
		throw err;
	}
})	

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


/* -----------------------------------------------------------------------------------------------*/
// PARTE DE VOLUNTARIOS

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

				newVoluntario.save(function(err){
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


app.post("/admin/borrarvoluntario", function(req,res){
	var vol = JSON.parse(req.query.dniVoluntario);
	Voluntario.remove({dni: vol.dni}, function(err,docs){
		if (err){
			throw err;
		}

		else{
			res.send({'delete': true})
		}
	})
})


app.post("/admin/editarvoluntario", function(req,res){
	var datos_vol = JSON.parse(req.query.datosVoluntario);
	Voluntario.update({dni:datos_vol.dni}, 
		{$set: 
			{
				nombre: datos_vol.nombre,
				apellidos: datos_vol.apellidos,
				email: datos_vol.email,
				direccion: datos_vol.direccion,
				telefono: datos_vol.telefono,
				movil: datos_vol.movil,
				fecha_nacimiento: datos_vol.fecha_nacimiento,
				genero: datos_vol.genero
			}	
		}, function (err,docs){
				if (err){
					throw err;
				}

				else{
					let modificado = {'modificado' : true};
					res.send(modificado)
				}
			}
	)
})


app.post("/admin/mostrarvoluntarios", function(req,res){
	Voluntario.find({}, function(err,docs){
		if (err){
			throw err;
		}
		else{
			res.send({docs})
		}
	})
})

/* ------------------------------------------------------------------------------------------------*/
// PARTE DE VETERINARIOS

app.post("/admin/registrarveterinario", function(req,res){

	var datos_vet = JSON.parse(req.query.datosveterinario);
	Veterinario.findOne({dni: datos_vet.dni}, function(err,docs){

		if (err){
			throw err;
		}

		else{

			if (docs == null){
				var newVeterinario = new Veterinario({
					dni: datos_vet.dni,
					nombre: datos_vet.nombre,
					correo: datos_vet.correo,
					telefono: datos_vet.telefono,
					movil: datos_vet.movil,
	
				})

				newVeterinario.save(function(err){
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

app.post("/admin/borrarveterinario", function(req,res){
	var vet = JSON.parse(req.query.dniVeterinario);
	Veterinario.remove({dni: vet.dni}, function(err,docs){
		if (err){
			throw err;
		}

		else{
			res.send({'delete': true})
		}
	})
})

app.post("/admin/editarveterinario", function(req,res){
	var datos_vet = JSON.parse(req.query.datosVeterinario);
	Veterinario.update({dni:datos_vet.dni}, 
		{$set: 
			{
				nombre: datos_vet.nombre,
				correo: datos_vet.correo,
				telefono: datos_vet.telefono,
				movil: datos_vet.movil,
			}	
		}, function (err,docs){
				if (err){
					throw err;
				}

				else{
					let modificado = {'modificado' : true};
					res.send(modificado)
				}
			}
	)
})

app.post("/admin/mostrarveterinarios", function(req,res){
	Veterinario.find({}, function(err,docs){
		if (err){
			throw err;
		}
		else{
			res.send({docs})
		}
	})
})

/* ------------------------------------------------------------------------------------------------*/
// PARTE DE MASCOTAS

app.post("/admin/registrarmascota", function(req,res){

	var datos_masc = JSON.parse(req.query.datosmascota);

	Mascota.findOne({chip: datos_masc.chip}, function(err,docs){

		if (err){
			throw err;
		}

		else{

			if (docs == null){

				var newMascota = new Mascota({
					chip: datos_masc.chip,
					nombre: datos_masc.nombre,
					especie:datos_masc.especie,
					raza: datos_masc.raza,
					genero: datos_masc.genero,
					peso: datos_masc.peso,
					largo: datos_masc.largo,
					altura: datos_masc.altura,
					estado: datos_masc.estado,
					nacimiento: datos_masc.nacimiento,
					esterilizado: datos_masc.esterilizado,
					vacunas: datos_masc.vacunas,
					enfermedades: datos_masc.enfermedades,
					regimen: datos_masc.regimen,
					descripcion: datos_masc.descripcion				
				})

				newMascota.save(function(err){
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


app.post("/admin/borrarmascota", function(req,res){
	var masc = JSON.parse(req.query.chipMascota);
	Mascota.remove({chip: masc.chip}, function(err,docs){
		if (err){
			throw err;
		}

		else{
			res.send({'delete': true})
		}
	})
})


app.post("/admin/editarmascota", function(req,res){
	var datos_masc = JSON.parse(req.query.datosMascota);
	Mascota.update({chip:datos_masc.chip}, 
		{$set: 
			{
				nombre: datos_masc.nombre,
				especie:datos_masc.especie,
				raza: datos_masc.raza,
				genero: datos_masc.genero,
				peso: datos_masc.peso,
				largo: datos_masc.largo,
				altura: datos_masc.altura,
				estado: datos_masc.estado,
				nacimiento: datos_masc.nacimiento,
				descripcion: datos_masc.descripcion	
			}	

		}, function (err,docs){
				if (err){
					throw err;
				}

				else{
					let modificado = {'modificado' : true};
					res.send(modificado)
				}
			}
	)
})


app.post("/admin/editarmascotaveterinario", function(req,res){
	var datos_masc = JSON.parse(req.query.datosMascota);
	Mascota.update({chip:datos_masc.chip}, 
		{$set: 
			{
				esterilizado: datos_masc.esterilizado,
				vacunas: datos_masc.vacunas,
				enfermedades: datos_masc.enfermedades,
				regimen: datos_masc.regimen
			}	

		}, function (err,docs){
				if (err){
					throw err;
				}

				else{
					let modificado = {'modificado' : true};
					res.send(modificado)
				}
			}
	)
})


app.post("/admin/mostrarmascotas", function(req,res){
	Mascota.find({}, function(err,docs){
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