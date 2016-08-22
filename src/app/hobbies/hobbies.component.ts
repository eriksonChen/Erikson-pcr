import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hobbies',
  templateUrl: 'hobbies.component.html',
  styleUrls: ['../../sass/hobbies.scss']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0,0);
  }

}
