import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

declare var $:any;

@Component({
	selector: 'app-listamascotas',
	templateUrl: './listamascotas.component.html',
	styleUrls: ['./listamascotas.component.css']
})
export class ListamascotasComponent implements OnInit {

	private array_mascotas = [];
	private chip_mascota;
	private bool: boolean;

	private chip: string="";
	private nombre: string="";
	private especie: string="";
	private raza: string="";
	private genero: string="";
	private peso: string="";
	private largo: string="";
	private altura: string="";
	private estado: string="";
	private nacimiento: string="";
	private descripcion: string="";

	constructor(private crudService: CRUDService) { }

	ngOnInit() {

		$('[data-toggle="tooltip"]').tooltip();

		this.crudService.mostrarMascotas().subscribe(() => {
			this.array_mascotas.push(this.crudService.array_masc)
		});
	}


	validarDatosMascota(nombre, raza, peso, largo, altura) {


		let expresion_nombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
		let expresion_numeros = /^[0-9]{1,2}(\,[0-9]{2})$/;

		if (expresion_nombre.test(nombre) && expresion_nombre.test(raza) && expresion_numeros.test(peso) && expresion_numeros.test(altura) && expresion_numeros.test(largo)){
			return true;           
		} 
	}

	borrarMascota(chip){
		var self = this;
		self.chip_mascota = chip;
		self.bool = true;

		$('.yes').click(function(){
			if (self.bool){
				
				self.crudService.borrarMascota(self.chip_mascota).subscribe(() => {

					if (self.crudService.borrado){
						
						self.array_mascotas = [];

						self.crudService.mostrarMascotas().subscribe(() => {
							self.array_mascotas.push(self.crudService.array_masc)
							$('.deleted').modal("toggle");
						});
					}

					else{
						console.log('Mascota no eliminado')
					}
				});
				self.bool = false;
			}
		})
	}

	editarMascota(chip){
		var self = this;
		$('#editar' + chip).modal("toggle");
		self.chip_mascota = chip;
		self.bool = true;

		$('.update').click(function(){
			self.nombre = $('#editar' + self.chip_mascota + ' .nombre').val();
			self.especie = $('#editar' + self.chip_mascota + ' .especie').val();
			self.raza = $('#editar' + self.chip_mascota + ' .raza').val();
			self.genero = $('#editar' + self.chip_mascota + ' .genero').val();
			self.peso = $('#editar' + self.chip_mascota + ' .peso').val();
			self.largo = $('#editar' + self.chip_mascota + ' .largo').val();
			self.altura = $('#editar' + self.chip_mascota + ' .altura').val();
			self.estado = $('#editar' + self.chip_mascota + ' .estado').val();
			self.nacimiento = $('#editar' + self.chip_mascota + ' .nacimiento').val();
			self.descripcion = $('#editar' + self.chip_mascota + ' .descripcion').val();


			if (self.bool){
				if (self.nombre &&  self.especie &&  self.raza &&  self.genero &&  self.peso &&  self.largo &&  self.altura &&  self.estado &&  self.nacimiento &&  self.descripcion){

					if (self.validarDatosMascota(self.nombre, self.raza, self.peso, self.largo, self.altura)){
						self.crudService.editarMascota(self.chip_mascota, self.nombre, self.especie, self.raza, self.genero, self.peso, self.largo, self.altura, self.estado, self.nacimiento, self.descripcion).subscribe(() => {
							if (self.crudService.modificado){
								$('#editar' + self.chip_mascota).modal('hide');

								self.array_mascotas = [];
								self.crudService.mostrarMascotas().subscribe(() => {
									self.array_mascotas.push(self.crudService.array_masc)
									$('.modified').modal("toggle");
									self.bool = false;
								});
							}

							else{
								$(".error").modal("toggle");
							}
						})
					}else{
						$(".nodata").modal('toggle');
						console.log(self.nombre, self.raza, self.peso, self.largo, self.altura)
					}
				}else{
					$(".campos").modal("toggle");
				}
				
			}
		})
	}


}
