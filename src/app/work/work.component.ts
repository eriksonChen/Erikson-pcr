import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-work',
  templateUrl: 'work.component.html',
  styleUrls: ['../../sass/work.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0,0);
  }

}
