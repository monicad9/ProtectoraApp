import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizanos',
  templateUrl: './localizanos.component.html',
  styleUrls: ['./localizanos.component.css']
})
export class LocalizanosComponent implements OnInit {

  	lat: number = 37.22548661206494;
  	lng: number = -3.765472700000032;
  	zoom: number = 15;
  	
  constructor() { }

  ngOnInit() {
  }

}
