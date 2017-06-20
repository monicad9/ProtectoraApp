import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';


@Injectable()
export class CRUDService {

	url_registro_voluntario: string;
	url_borrar_voluntario:string;
	url_editar_voluntario: string;
	url_lista_voluntario: string;
	
	url_registro_veterinario:string;
	url_borrar_veterinario:string;
	url_editar_veterinario:string;
	url_lista_veterinario:string;

	url_registro_mascota:string;
	url_borrar_mascota: string;
	url_editar_mascota: string;
	url_editar_mascota_vet: string;
	url_lista_mascotas:string;
	
	añadido : boolean = false;
	array_vol;
	array_masc;
	array_vet;
	borrado;
	modificado;


	constructor(private http: Http) {

		this.url_registro_voluntario = "http://localhost:3000/admin/registrarvoluntarios";
		this.url_borrar_voluntario = "http://localhost:3000/admin/borrarvoluntario";
		this.url_editar_voluntario = "http://localhost:3000/admin/editarvoluntario";
		this.url_lista_voluntario = "http://localhost:3000/admin/mostrarvoluntarios";
		
		this.url_registro_veterinario = "http://localhost:3000/admin/registrarveterinario";
		this.url_borrar_veterinario = "http://localhost:3000/admin/borrarveterinario";
		this.url_lista_veterinario = "http://localhost:3000/admin/mostrarveterinarios";
		this.url_editar_veterinario = "http://localhost:3000/admin/editarveterinario";

		this.url_registro_mascota = "http://localhost:3000/admin/registrarmascota";
		this.url_borrar_mascota = "http://localhost:3000/admin/borrarmascota";
		this.url_editar_mascota = "http://localhost:3000/admin/editarmascota";
		this.url_editar_mascota_vet = "http://localhost:3000/admin/editarmascotaveterinario";
		this.url_lista_mascotas = "http://localhost:3000/admin/mostrarmascotas";
	};


/* ----------------------------------------------------------------------------------- */

//PARTE DE VOLUNTARIOS

	añadirVoluntario(dni, nombre, apellidos, email, direccion, tlf, movil, fecha_nac, genero) : Observable<boolean> {

		let voluntario = {
			"dni" : dni,
			"nombre" : nombre,
			"apellidos" : apellidos,
			"email" : email,
			"direccion" : direccion,
			"telefono" : tlf,
			"movil" : movil,
			"fecha_nacimiento" : fecha_nac,
			"genero" : genero
		};

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_registro_voluntario + "?datosvoluntario="+ JSON.stringify(voluntario), options)
			.map((res) => res.json())
			.subscribe(res => this.añadido = res.añadido)
		
		return Observable.of(true).delay(1000);
	}


	borrarVoluntario(dni) : Observable<boolean>{

		let dniVoluntario = {
			"dni": dni
		}

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_borrar_voluntario + "?dniVoluntario=" + JSON.stringify(dniVoluntario), options)
			.map((res) => res.json())
			.subscribe(res => this.borrado = res.delete);
		
		return Observable.of(true).delay(1000);
	}


	editarVoluntario(dni, nombre, apellidos, email, direccion, tlf, movil, fecha_nac, genero): Observable<boolean>{

		let datosVoluntario = {
			"dni" : dni,
			"nombre" : nombre,
			"apellidos" : apellidos,
			"email" : email,
			"direccion" : direccion,
			"telefono" : tlf,
			"movil" : movil,
			"fecha_nacimiento" : fecha_nac,
			"genero" : genero
		};

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_editar_voluntario  + "?datosVoluntario=" + JSON.stringify(datosVoluntario), options)
			.map((res) => res.json())
			.subscribe(res => this.modificado = res.modificado);

		return Observable.of(true).delay(1000);
	}

	mostrarVoluntarios() : Observable<boolean> {

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_lista_voluntario, options)
			.map((res) => res.json())
			.subscribe(res => this.array_vol = res);

		return Observable.of(true).delay(1000);
	}
/* ----------------------------------------------------------------------------------- */

// PARTE DE VETERINARIO

	añadirVeterinario(dni, nombre,correo,telefono,movil){
		let veterinario = {
			"dni": dni,
			"nombre": nombre,
			"correo": correo,
			"telefono": telefono, 
			"movil": movil
		}

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_registro_veterinario + "?datosveterinario="+ JSON.stringify(veterinario), options)
			.map((res) => res.json())
			.subscribe(res => this.añadido = res.añadido)
		
		return Observable.of(true).delay(1000);
	}

	borrarVeterinario(dni) : Observable<boolean>{

		let dniVeterinario = {
			"dni": dni
		}

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_borrar_veterinario + "?dniVeterinario=" + JSON.stringify(dniVeterinario), options)
			.map((res) => res.json())
			.subscribe(res => this.borrado = res.delete);
		
		return Observable.of(true).delay(1000);
	}

	editarVeterinario(dni,nombre,correo,telefono,movil): Observable<boolean>{

		let datosVeterinario = {
			"dni": dni,
			"nombre": nombre,
			"correo": correo,
			"telefono": telefono, 
			"movil": movil
		};

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_editar_veterinario  + "?datosVeterinario=" + JSON.stringify(datosVeterinario), options)
			.map((res) => res.json())
			.subscribe(res => this.modificado = res.modificado);

		return Observable.of(true).delay(1000);
	}

	mostrarVeterinarios():Observable<boolean>{
		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_lista_veterinario, options)
			.map((res) => res.json())
			.subscribe(res => this.array_vet = res);

		return Observable.of(true).delay(1000);
	}
/* ----------------------------------------------------------------------------------- */

// PARTE DE MASCOTAS

	añadirMascota(chip, nombre, especie, raza, genero, peso, largo, altura, estado, nacimiento, esterilizado, vacunas, enfermedades, regimen, descripcion){
		let mascota = {
			"chip": chip,
			"nombre": nombre,
			"especie": especie,
			"raza": raza,
			"genero": genero,
			"peso": peso,
			"largo": largo,
			"altura": altura,
			"estado": estado,
			"nacimiento": nacimiento,
			"esterilizado": esterilizado,
			"vacunas": vacunas,
			"enfermedades": enfermedades,
			"regimen": regimen,
			"descripcion": descripcion		
		}
		
		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_registro_mascota + "?datosmascota="+ JSON.stringify(mascota), options)
			.map((res) => res.json())
			.subscribe(res => this.añadido = res.añadido)
		
		return Observable.of(true).delay(1000);
	};


	borrarMascota(chip) : Observable<boolean>{

		let chipMascota = {
			"chip": chip
		}

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_borrar_mascota + "?chipMascota=" + JSON.stringify(chipMascota), options)
			.map((res) => res.json())
			.subscribe(res => this.borrado = res.delete);
		

		return Observable.of(true).delay(1000);
	}

	editarMascota(chip, nombre, especie, raza, genero, peso, largo, altura, estado, nacimiento, descripcion): Observable<boolean>{

		let datosMascota = {
			"chip": chip,
			"nombre": nombre,
			"especie": especie,
			"raza": raza,
			"genero": genero,
			"peso": peso,
			"largo": largo,
			"altura": altura,
			"estado": estado,
			"nacimiento": nacimiento,
			"descripcion": descripcion		
		}

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_editar_mascota  + "?datosMascota=" + JSON.stringify(datosMascota), options)
			.map((res) => res.json())
			.subscribe(res => this.modificado = res.modificado);

		return Observable.of(true).delay(1000);
	}

	editarMascotaVet(chip, esterilizado, vacunas, enfermedades, regimen) : Observable<boolean>{
		console.log(chip, esterilizado, vacunas, enfermedades, regimen)
		let datosMascota = {
			"chip": chip,
			"esterilizado": esterilizado,
			"vacunas": vacunas,
			"enfermedades": enfermedades,
			"regimen": regimen
		}

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_editar_mascota_vet  + "?datosMascota=" + JSON.stringify(datosMascota), options)
			.map((res) => res.json())
			.subscribe(res => this.modificado = res.modificado);

		return Observable.of(true).delay(1000);
	}

	mostrarMascotas(): Observable<boolean>{

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_lista_mascotas, options)
			.map((res) => res.json())
			.subscribe(res => this.array_masc = res);

		return Observable.of(true).delay(1000);
	}




}
