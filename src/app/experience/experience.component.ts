import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['../../sass/experience.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {

	experience:any[];

	constructor(private http:Http) { }

	ngOnInit() {
		this.http.get('./api/about.json')
  			.subscribe(res => {
  				this.experience = res.json().experience;
  				this.experience.forEach((val, key) => {
  					val.dist = key%2==0 ? 'left' : 'right';
  				})
  			});
		window.scrollTo(0,0);
	}

	ngOnDestroy(){

	}

}
