import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

declare var $:any;


@Component({
	selector: 'app-añadirmascota',
	templateUrl: './añadirmascota.component.html',
	styleUrls: ['./añadirmascota.component.css']
})
export class AñadirmascotaComponent implements OnInit {

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
	private esterilizado: string="";
	private vacunas: string= "";
	private enfermedades: string="";
	private regimen: string="";
	private descripcion: string="";


	constructor(private crudService: CRUDService) { }

	ngOnInit() {
		$('[data-toggle="tooltip"]').tooltip();
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

	validarDatosMascota( chip, nombre, peso, altura, largo) {

		let expresion_chip = /^[0-9]{8}$/;
		let expresion_nombre = /^([a-zñáéíóúA-ZÑÁÉÍÓÚ]+[\s]*)+$/;
		let expresion_numeros = /^[0-9]{1,2}(\,[0-9]{2})$/;

		if (expresion_chip.test(chip) && expresion_nombre.test(nombre) && expresion_numeros.test(peso) && expresion_numeros.test(altura) && expresion_numeros.test(largo)){
			return true;           
		} 
	}

	registrar(){
		if (this.chip && this.nombre && this.especie && this.raza && this.genero && this.peso && this.largo && this.altura && this.estado && this.nacimiento && this.esterilizado && this.vacunas && this.enfermedades && this.regimen && this.descripcion){
			
			if (this.validarDatosMascota(this.chip, this.nombre, this.peso, this.altura, this.largo)){
				
				this.crudService.añadirMascota(this.chip, this.nombre, this.especie, this.raza, this.genero, this.peso, this.largo, this.altura, this.estado, this.nacimiento, this.esterilizado, this.vacunas, this.enfermedades, this.regimen, this.descripcion).subscribe(() => {
					
					if(this.crudService.añadido){
						$(".added").modal("toggle");
						$("input").val("");
						$("textarea").val("");
						$("select").val("");
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
			$(".campos").modal('toggle');
		}
	}

}
