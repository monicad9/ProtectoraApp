import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

declare var $:any;

@Component({
	selector: 'app-panelindex',
	templateUrl: './panelindex.component.html',
	styleUrls: ['./panelindex.component.css']
})
export class PanelindexComponent implements OnInit {

	private perros = 0;
	private gatos = 0;
	private roedores = 0;
	private reptiles = 0;
	private aves = 0;
	private array_tipos = [];
	pieChartData = {};


	constructor(private crudService: CRUDService) { }

	ngOnInit() {

		this.crudService.mostrarMascotas().subscribe(() => {
			this.array_tipos.push(this.crudService.array_masc)
			this.tipos();
		});
	}

	tipos(){
		for (var a in this.array_tipos[0].docs){
			switch (this.array_tipos[0].docs[a].especie){
				case 'Perro':
				this.perros++;
				break;
				case 'Gato':
				this.gatos++;
				break;
				case 'Roedor':
				this.roedores++;
				break;
				case 'Reptil':
				this.reptiles++;
				break;
				case 'Ave':
				this.aves++;
				break;
			}
		}
		
		this.pieChartData =  {
			chartType: 'PieChart',
			dataTable: [
			['Task', 'Especies y cantidades'],
			['Perros', this.perros],
			['Gatos',   this.gatos],
			['Roedores', this.roedores],
			['Reptiles', this.reptiles],
			['Aves',   this.aves]
			],
			options: {'title': 'Animales en el refugio'},
		};
	}
}
