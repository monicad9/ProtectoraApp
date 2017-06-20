import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

declare var $:any;

@Component({
	selector: 'app-veterinario',
	templateUrl: './veterinario.component.html',
	styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {

	private datos_veterinarios_masc = [];
	private array_veterinarios = [];
	private chip_mascota;
	private dni_veterinario;
	private bool: boolean;

	private dni:string="";
	private nombre:string="";
	private correo:string="";
	private telefono:string="";
	private movil:string="";

	private esterilizado: string="";
	private vacunas: string="";
	private enfermedades: string="";
	private regimen: string="";

	constructor(private crudService: CRUDService) { }

	ngOnInit() {
		this.crudService.mostrarMascotas().subscribe(() => {
			this.datos_veterinarios_masc.push(this.crudService.array_masc)
		});

		this.crudService.mostrarVeterinarios().subscribe(() => {
			this.array_veterinarios.push(this.crudService.array_vet)
		});
	}

	editarMascota(chip){
		var self = this;
		$('#editar' + chip).modal("toggle");
		self.chip_mascota = chip;
		self.bool = true;

		$('.update').click(function(){
			self.esterilizado = $('#editar' + self.chip_mascota + ' .esterilizado').val();
			self.vacunas = $('#editar' + self.chip_mascota + ' .vacunas').val();
			self.enfermedades = $('#editar' + self.chip_mascota + ' .enfermedades').val();
			self.regimen = $('#editar' + self.chip_mascota + ' .regimen').val();

			if (self.bool){
				self.crudService.editarMascotaVet(self.chip_mascota, self.esterilizado, self.vacunas, self.enfermedades, self.regimen).subscribe(() => {
					if (self.crudService.modificado){
						$('#editar' + self.chip_mascota).modal('hide');

						self.datos_veterinarios_masc = [];
						self.crudService.mostrarMascotas().subscribe(() => {
							self.datos_veterinarios_masc.push(self.crudService.array_masc)
							$('.modified').modal("toggle");
						});
					}

					else{
						console.log('Modificacion no realizada')
					}
				})
			

				self.bool = false;
			}
		})	
	}

	vacunas_mascota(chip){
		$('#vacunas' + chip).modal("toggle");
	}

	enfermedades_mascota(chip){
		$('#enfermedades' + chip).modal("toggle");
	}

	regimen_mascota(chip){
		$('#regimen' + chip).modal("toggle");
	}	


	addVeterinario(){

		this.crudService.añadirVeterinario(this.dni, this.nombre,this.correo,this.telefono,this.movil).subscribe(() =>{
			if(this.crudService.añadido){
				this.array_veterinarios = [];
				this.crudService.mostrarVeterinarios().subscribe(() => {
					this.array_veterinarios.push(this.crudService.array_vet)
				});

				$(".added").modal("toggle");
				$("input").val("");
			}
		})

		$(".added").modal("toggle");
		$("input").val("");
	}

	borrarVeterinario(dni){
		var self = this;
		self.dni_veterinario = dni;
		self.bool = true;

		$('.yes').click(function(){
			if (self.bool){
				
				self.crudService.borrarVeterinario(self.dni_veterinario).subscribe(() => {
					if (self.crudService.borrado){
						self.array_veterinarios = [];
						self.crudService.mostrarVeterinarios().subscribe(() => {
							self.array_veterinarios.push(self.crudService.array_vet)
							$('.deleted').modal("toggle");
						});
					}

					else{
						console.log('Veterinario no eliminado')
					}
				});
				self.bool = false;
			}
		})
	}

	editarVeterinario(dni){
		var self = this;
		$('#editar' + dni).modal("toggle");
		self.dni_veterinario = dni;
		self.bool = true;

		$('.update').click(function(){
			self.nombre = $('#editar' + self.dni_veterinario + ' .nombre').val();
			self.correo = $('#editar' + self.dni_veterinario + ' .correo').val();
			self.telefono = $('#editar' + self.dni_veterinario + ' .telefono').val();
			self.movil = $('#editar' + self.dni_veterinario + ' .movil').val();	

			if (self.bool){
				self.crudService.editarVeterinario(self.dni_veterinario, self.nombre, self.correo, self.telefono, self.movil).subscribe(() => {
					if (self.crudService.modificado){
						$('#editar' + self.dni_veterinario).modal('hide');

						self.array_veterinarios = [];
						self.crudService.mostrarVeterinarios().subscribe(() => {
							self.array_veterinarios.push(self.crudService.array_vet)
							$('.modified').modal("toggle");
							$("input").val("");
						});
					}

					else{
						console.log('Modificacion no realizada')
					}
				})
			

				self.bool = false;
			}
		})
	}
}
