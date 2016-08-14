import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-about',
  templateUrl: '../template/about.html',
  styleUrls: []
})
export class AboutComponent implements OnInit{
  constructor() { }

  ngOnInit() {

  	console.log('about.');
  }
}
