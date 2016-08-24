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
      console.log('test');
  		$('.hob-cont').css('display','none').delay(100).fadeIn();

      this.mytype=this.route.snapshot.data['item'];

  		this.http.get('./api/'+this.mytype+'.json')
  			.subscribe(res => {
  				this.items = res.json().data;
  				this.banner= res.json().banner;
  			});
      window.scrollTo(0,0);
      setTimeout(()=>{
        $('.item').each((index, ele)=>{
          TweenMax.from(ele, 0.7, {delay:(index+1.5)*0.18, alpha:0, y:70, ease:Back.easeOut});
        });
      },100);
      TweenMax.set('.pop-cont', {transformPerspective:3000, x:'-50%', y:'-50%'});
  	}

  	pop(p){
  		this.pitem=p;
      TweenMax.set('.pop-cont', {alpha:0, rotationX:110, top:50});
      $('.popup').fadeIn( ()=>{
        TweenMax.to('.pop-cont', 1, {alpha:1, rotationX:0, top:'50%', ease:Expo.easeOut});
      });
  	}

}
