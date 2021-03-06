import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

declare var $:any;

@Component({
	selector: 'app-editarvoluntarios',
	templateUrl: './editarvoluntarios.component.html',
	styleUrls: ['./editarvoluntarios.component.css']
})
export class EditarvoluntariosComponent implements OnInit {

	private resultado;
	private array_voluntarios = [];
	private dni_voluntario;
	private bool: boolean;
	
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
		$('[data-toggle="tooltip"]').tooltip();

		this.crudService.mostrarVoluntarios().subscribe(() => {
			this.array_voluntarios.push(this.crudService.array_vol)
		});


	}

	validarDatosVoluntario( dni, nombre, apellidos, email, tlf, movil) {

		let expresion_dni = /^\d{8}[a-zA-Z]$/;
		let expresion_nombre = /^([a-zñáéíóúA-ZÑÁÉÍÓÚ]+[\s]*)+$/;
		let expresion_apellidos = /^([a-zñáéíóúA-ZÑÁÉÍÓÚ]+\s+[a-zñáéíóúA-ZÑÁÉÍÓÚ]+[\s]*)+$/;
		let expresion_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		let expresion_tlf = /^[0-9]{9}$/;


		if (expresion_dni.test(dni) && expresion_nombre.test(nombre) && expresion_apellidos.test(apellidos) && expresion_email.test(email) && expresion_tlf.test(tlf) && expresion_tlf.test(movil)){
			return true;           
		} 
	}


	borrarVoluntario(dni){
		var self = this;
		self.dni_voluntario = dni;
		self.bool = true;

		$('.yes').click(function(){
			if (self.bool){
				
				self.crudService.borrarVoluntario(self.dni_voluntario).subscribe(() => {
					if (self.crudService.borrado){
						self.array_voluntarios = [];
						self.crudService.mostrarVoluntarios().subscribe(() => {
							self.array_voluntarios.push(self.crudService.array_vol)
							$('.deleted').modal("toggle");
						});
					}

					else{
						console.log('Voluntario no eliminado')
					}
				});
				self.bool = false;
			}
		})
	}

	editarVoluntario(dni){
		var self = this;
		$('#editar' + dni).modal("toggle");
		self.dni_voluntario = dni;
		self.bool = true;

		$('.update').click(function(){
			self.nombre = $('#editar' + self.dni_voluntario + ' .nombre').val();
			self.apellidos = $('#editar' + self.dni_voluntario + ' .apellidos').val();
			self.email = $('#editar' + self.dni_voluntario + ' .email').val();
			self.direccion = $('#editar' + self.dni_voluntario + ' .direccion').val();
			self.tlf = $('#editar' + self.dni_voluntario + ' .telefono').val();
			self.movil = $('#editar' + self.dni_voluntario + ' .movil').val();
			self.fecha_nac = $('#editar' + self.dni_voluntario + ' .nacimiento').val();
			self.genero = $('#editar' + self.dni_voluntario + ' .genero').val();

			if (self.bool){
				if (self.nombre && self.apellidos && self.email && self.direccion && self.tlf && self.movil && self.fecha_nac && self.genero){

					if ( self.validarDatosVoluntario(self.dni_voluntario, self.nombre, self.apellidos, self.email, self.tlf, self.movil) ){

						self.crudService.editarVoluntario(self.dni_voluntario, self.nombre, self.apellidos, self.email, self.direccion, self.tlf, self.movil, self.fecha_nac, self.genero).subscribe(() => {
							if (self.crudService.modificado){
								$('#editar' + self.dni_voluntario).modal('hide');

								self.array_voluntarios = [];
								self.crudService.mostrarVoluntarios().subscribe(() => {
									self.array_voluntarios.push(self.crudService.array_vol)
									$('.modified').modal("toggle");
									self.bool = false;
								});
							}

							else{
								$(".error").modal("toggle");
							}
						})
					}
					else{
						$(".nodata").modal('toggle');
					}
				}else{
					$(".campos").modal("toggle");
				}
			}
		})
	}

}
