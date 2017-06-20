import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

declare var $:any;

@Component({
	selector: 'app-registrarvoluntarios',
	templateUrl: './registrarvoluntarios.component.html',
	styleUrls: ['./registrarvoluntarios.component.css']
})
export class RegistrarvoluntariosComponent implements OnInit {

	private dni: string="";
	private nombre: string="";
	private apellidos: string="";
	private email: string="";
	private direccion: string="";
	private tlf: string="";
	private movil: string="";
	private fecha_nac: string="";
	private genero: string="";


	constructor(private crudService: CRUDService) {}

	ngOnInit() {
	}

    escapeHtml(text) {
          var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
          };

        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

	validarDatosVoluntario( dni, nombre, apellidos, email, direccion, tlf, movil) {

		/* Falta comprobar los apellidos y la dirección */

		let expresion_dni = /^\d{8}[a-zA-Z]$/;
		let expresion_nombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
		//let expresion_apellidos =
		let expresion_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		//let expresion_direcc = 
		let expresion_tlf = /^[0-9]{9}$/;


		if (expresion_dni.test(dni) && expresion_nombre.test(nombre) && expresion_email.test(email) && expresion_tlf.test(tlf) && expresion_tlf.test(movil)){
			return true;           
		} 
	}

	registrar(){
		
		if (this.dni, this.nombre, this.apellidos, this.email, this.direccion, this.tlf, this.movil, this.fecha_nac, this.genero){

			if ( this.validarDatosVoluntario(this.dni, this.nombre, this.apellidos, this.email, this.direccion, this.tlf, this.movil) ){
				this.crudService.añadirVoluntario(this.dni, this.nombre, this.apellidos, this.email, this.direccion, this.tlf, this.movil, this.fecha_nac, this.genero).subscribe(() => {
					if (this.crudService.añadido){

						$(".added").modal("toggle");
						$("input").val("");

					}

					else{
						$(".error").modal("toggle");

					}
				})
			}
			
			else{
				$(".nodata").modal('toggle');
			}
		}
		else{
			console.log('FALTAN DATOS')
		}
	}
}
