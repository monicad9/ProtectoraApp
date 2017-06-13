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
	private array_voluntarios = []

	constructor(private crudService: CRUDService) {}

	ngOnInit() {

		this.crudService.mostrarVoluntarios().subscribe(() => {
			this.array_voluntarios.push(this.crudService.array_vol)

		});
	}


}
