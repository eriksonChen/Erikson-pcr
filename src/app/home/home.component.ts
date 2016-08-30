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
    $('.bgimg, .text-box').css('display','none');

    setTimeout(()=>{
      $('.wrap').fadeIn(()=>{
        this.anim();
      });
    },10);
  	
  	
  }

  anim(){
    $('.bgimg, .text-box').css('display','block');
  	TweenMax.from('.bgimg', 1, {delay:0.3, alpha:0, scaleX:0.4, scaleY:0.4, rotation:50, ease:Expo.easeOut });
  	TweenMax.from('.text-box', 0.6, {delay:0.6, alpha:0, y:-30, scaleY:1.5, scaleX:1.5, ease:Cubic.easeOut});
  }

}
