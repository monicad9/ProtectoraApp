import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

	url: string;
	redirectUrl: string;
	isLoggedIn: boolean = false;
	
	constructor(private http: Http) {
		this.url = "http://localhost:3000/login"; 
	}

	check(email,pass) : Observable<boolean> {
		let datos = {
			"email": email,
			"pass" : pass
		};

		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions ({ headers : headers});

		this.http.post(this.url + "?datoslogin="+ JSON.stringify(datos), options)
			.map((res) => res.json())
			.subscribe(res => this.isLoggedIn = res.logged)
		
		return Observable.of(true).delay(1000);
	}
}
