import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

    constructor() { }

    ngOnInit() {

      	(function(d, s, id) {
      		var js, fjs = d.getElementsByTagName(s)[0];
      		if (d.getElementById(id)) return;
      		js = d.createElement(s); js.id = id;
      		js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9";
      		fjs.parentNode.insertBefore(js, fjs);
      	}(document, 'script', 'facebook-jssdk'));

    }

}
