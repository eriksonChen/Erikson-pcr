import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HobbiesMenuComponent } from '../hobbies-menu/'
import { Http, Request } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { PopupComponent } from '../popup/';
import { AboutService } from '../about.service';

@Component({
  templateUrl: 'hobbies-type.component.html',
  styleUrls: ['../../sass/hobbies.scss'],
  directives:[HobbiesMenuComponent, PopupComponent]
  // encapsulation: ViewEncapsulation.None
})
export class HobbiesTypeComponent implements OnInit {
	  banner={};
  	items:any[];
  	pitem={};
    mytype="";

  	constructor(private http:Http, private route:ActivatedRoute, private aboutService:AboutService) {
      //component之間的資料傳遞方法*********************
      /*this.aboutService.changeBar(false);
      this.aboutService.missionErikson$.subscribe(res => {
        this.myname = res;

      })*/
    }

  	ngOnInit() {
  		$('.hob-cont').css('display','none').delay(100).fadeIn();

      	this.mytype=this.route.snapshot.data['item'];

  		this.http.get('./api/'+this.mytype+'.json')
  			.subscribe(res => {
  				this.items = res.json().data;
  				this.banner= res.json().banner;
  			});
      window.scrollTo(0,0);
  	}

  	pop(p){
  		this.pitem=p;
  		$('.popup').fadeIn('fast');
  	}

}
