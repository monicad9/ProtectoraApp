import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


declare var escape: any; //Transformar los espacios en url


@Injectable()
export class LoginService {

	redirectUrl: string;
	isLoggedIn: boolean = false;
	
	constructor() { 


	}

	check(email,pass) : Observable<boolean> {
		
		if (email == 'admin@gmail.com' && pass=='1234'){
			return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
		}
	}
}
