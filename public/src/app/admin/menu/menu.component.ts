import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor() { }

  	ngOnInit() {

		function escapeHtml(text) {

	        var map = {
	            '&': '&amp;',
	            '<': '&lt;',
	            '>': '&gt;',
	            '"': '&quot;',
	            "'": '&#039;'
	         };
	        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
	    }

		$("#menu-toggle").click(function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});

  	}
}
