import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: '../template/about/hobbies.html',
  styleUrls: ['../sass/hobbies.scss']
})
export class HobbiesComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  	console.log('hobbies');
  }
}
