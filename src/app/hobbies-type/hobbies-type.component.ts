import { Component, OnInit } from '@angular/core';
import { HobbiesMenuComponent } from '../hobbies-menu/'
import { Http, Request } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { PopupComponent } from '../popup/';
import { AboutService } from '../about.service';
import { Item } from '../item';

@Component({
  templateUrl: 'hobbies-type.component.html',
  styleUrls: ['../../sass/hobbies.scss'],
  directives:[HobbiesMenuComponent, PopupComponent]
})
export class HobbiesTypeComponent implements OnInit {
	  banner={};
  	items:Item[];
  	pitem={};
    mytype="";

    constructor(private http:Http, private route:ActivatedRoute) {}

  	/*constructor(private http:Http, private route:ActivatedRoute, private aboutService:AboutService) {
      //component之間的資料傳遞方法*********************
      this.aboutService.changeBar(false);
      this.aboutService.missionErikson$.subscribe(res => {
        this.myname = res;

      })
      
    }*/

  	ngOnInit() {
      /*this.pitem={
        pic:'../../img/icon.png',
        title:'title',
        date:'date',
        href:'',
        des:'des'
      };*/
      
  		$('.wrap').css('display','none').delay(100).fadeIn('slow');

      this.mytype = this.route.snapshot.data['item'];

  		this.http.get('./api/'+this.mytype+'.json')
  			.subscribe(res => {
  				this.items = res.json().data;
  				this.banner= res.json().banner;
          setTimeout(()=>{
            $('img.lazy').lazyload({ effect : "fadeIn" });
            $('.item').each((index, ele)=>{
              TweenMax.from(ele, 0.7, {delay:(index+1.8)*0.18, alpha:0, y:70, ease:Back.easeOut});
            });
            TweenMax.set('.pop-cont', {transformPerspective:3000, x:'-50%', y:'-50%'});
          },100);

          gapage(this.banner['name']);
  			});



      window.scrollTo(0,0);
  	}

  	pop(p){
  		this.pitem=p;

      if($('.banner').css('display')==='none'){ //手機動態
        TweenMax.set('.pop-cont', {y:'-50%', x:'50%'});
        $('.popup').fadeIn('fast', ()=>{
          TweenMax.to('.pop-cont', 0.6, { x:'-50%', ease:Expo.easeInOut});
        });

        $( ".pop-cont" ).scrollTop( 0 );
      }else{
        TweenMax.set('.pop-cont', {alpha:0, rotationX:90, top:50});
        $('.popup').fadeIn( ()=>{
          TweenMax.to('.pop-cont', 1, {alpha:1, rotationX:0, top:'50%', ease:Expo.easeOut});
        });
      }
  	}
}
