import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.component.html',
  styleUrls: ['./adopta.component.css']
})
export class AdoptaComponent implements OnInit {

  constructor() { }

 	ngOnInit() {


		$('.search').on( 'click' , function(){
			var edad = $('#edad').val();
			var sexo = $('select#sexo').val();
			var tamaño = $('select#tamaño').val();

			console.log( "Sexo:" + sexo + " Edad:" + edad + " Tamaño:" + tamaño)
		})
  	}

}
