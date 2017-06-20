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
		this.crudService.mostrarMascotas().subscribe(() => {
			this.array_mascotas.push(this.crudService.array_masc)
		});
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
				self.crudService.editarMascota(self.chip_mascota, self.nombre, self.especie, self.raza, self.genero, self.peso, self.largo, self.altura, self.estado, self.nacimiento, self.descripcion).subscribe(() => {
					if (self.crudService.modificado){
						$('#editar' + self.chip_mascota).modal('hide');

						self.array_mascotas = [];
						self.crudService.mostrarMascotas().subscribe(() => {
							self.array_mascotas.push(self.crudService.array_masc)
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

}
