import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-galeria',
	templateUrl: './galeria.component.html',
	styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

	constructor() { }

	ngOnInit() {

		$('.zoom-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
				}
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}

		});
 	
	}

}
