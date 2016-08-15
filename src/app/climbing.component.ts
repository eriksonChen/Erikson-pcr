import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HobbiesMenuComponent } from './hobbies-menu.component';

@Component({
  templateUrl: '../template/about/climbing.html',
  styleUrls: ['../sass/hobbies.scss'],
  directives:[HobbiesMenuComponent],
  encapsulation: ViewEncapsulation.None
})
export class ClimbingComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  	console.log('climbing');
  }
}
