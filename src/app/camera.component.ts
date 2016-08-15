import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HobbiesMenuComponent } from './hobbies-menu.component';
import {Http, Request} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: '../template/about/camera.html',
  styleUrls: ['../sass/hobbies.scss'],
  directives:[HobbiesMenuComponent],
  encapsulation: ViewEncapsulation.None
})
export class CameraComponent implements OnInit{
	banner={};
	items:any[];
	pitem={};
  	constructor(private http:Http) { }

  	ngOnInit() {
  		console.log('camera');
  		/*this.http.get('/api/camera.json')
  			.map(res => res.json())
  			.subscribe((value)=>{
  				this.items=value;
  				console.log(this.items);
  			})*/

  		this.http.get('./api/camera.json')
      		.subscribe(response => {
      			this.items = response.json().data;
      			this.banner= response.json().banner;
      			// console.log(this.banner.name);
      		});
  	}

  	pop(p){
  		this.pitem=p;
  		$('.popup').fadeIn('fast');
  	}

  	closePop(){
  		$('.popup').fadeOut('fast');
  	}

  	urlto(ur){
  		window.open(ur);
  	}
}
