import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-about.wrap',
  templateUrl: '../template/about/experience.html',
  styleUrls: ['../sass/experience.scss']
})
export class ExperienceComponent implements OnInit{
  constructor() { }

  ngOnInit() {

  	console.log('experience');
  }
}