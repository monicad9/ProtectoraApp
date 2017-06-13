import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';


@Injectable()
export class CRUDService {

	url_registro: string;
	url_lista: string;
	añadido : boolean = false;
	array_vol;


	constructor(private http: Http) {
		this.url_registro = "http://localhost:3000/admin/registrarvoluntarios";
		this.url_lista = "http://localhost:3000/admin/editarvoluntarios";
	}


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

		this.http.post(this.url_registro + "?datosvoluntario="+ JSON.stringify(voluntario), options)
			.map((res) => res.json())
			.subscribe(res => this.añadido = res.añadido)
		
		return Observable.of(true).delay(1000);
	
	}

	mostrarVoluntarios() : Observable<boolean> {

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url_lista, options)
			.map((res) => res.json())
			.subscribe(res => this.array_vol = res);

		return Observable.of(true).delay(1000);

	}

}
