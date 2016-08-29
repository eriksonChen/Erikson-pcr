import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['../../sass/index.scss']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  	window.scrollTo(0,0);
  	TweenMax.set('.bgimg', {x:'-52%', y:'-49%'});
  	TweenMax.set('.text-box', {x:'-50%', y:'-50%'});

  	$('.wrap').fadeIn(()=>{

  		this.anim();
  	});
  	
  }

  anim(){
  	$('.bgimg, .text-box').css('display','block');
  	TweenMax.from('.bgimg', 0.8, {delay:0.2, alpha:0, scaleX:0.4, scaleY:0.4, rotation:60, ease:Expo.easeOut });
  	TweenMax.from('.text-box', 0.6, {delay:0.6, alpha:0, y:-30, scaleY:1.5, scaleX:1.5, ease:Expo.easeOut});
  }

}
