import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HobbiesMenuComponent } from './hobbies-menu.component';

@Component({
  templateUrl: '../template/about/bike.html',
  styleUrls: ['../sass/hobbies.scss'],
  directives:[HobbiesMenuComponent],
  encapsulation: ViewEncapsulation.None
})
export class BikeComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  	console.log('bike');
  }
}
