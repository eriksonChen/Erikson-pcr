import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
@Component({
  templateUrl: 'resume.component.html',
  styleUrls: ['../../sass/resume.scss']
})
export class ResumeComponent implements OnInit {

	constructor(private aboutService:AboutService) { 
  		
  	}

  	ngOnInit() {
  		this.aboutService.changeBar(false);
  	}

}
