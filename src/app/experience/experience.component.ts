import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['../../sass/experience.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0,0);
  }

}
