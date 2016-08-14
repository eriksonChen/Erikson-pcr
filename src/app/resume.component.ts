import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.wrap',
  templateUrl: '../template/about/resume.html',
  styleUrls: ['../sass/resume.scss']
})
export class ResumeComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  	console.log('resume');
  }
}
