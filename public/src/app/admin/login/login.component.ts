import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

declare var $:any;


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


	private email:string="";
	private pass:string="";

	constructor( private loginService: LoginService, public router: Router ) { }

	ngOnInit() {

	}

	comprobar(){

		this.loginService.check(this.email,this.pass).subscribe(() => {	
			if (this.loginService.isLoggedIn) {
				//let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/admin';
				this.router.navigate(['/admin']);
			}	
			else{
				$(".error").modal("toggle");
			}		
		})
	}
}
