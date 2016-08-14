import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-about.wrap',
  templateUrl: '../template/about/home.html',
  styleUrls: ['../sass/about.scss']
})
export class AboutHomeComponent implements OnInit{
  constructor() { }

  ngOnInit() {

  	console.log('home');
  }
}