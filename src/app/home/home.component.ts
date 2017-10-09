import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['index.scss']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    TweenMax.set('.bgimg', { x: '-52%', y: '-49%' });
    TweenMax.set('.text-box', { x: '-50%', y: '-50%' });
    $('.bgimg, .text-box').css('display', 'none');

    setTimeout(() => {
      $('.wrap').fadeIn(() => {
        this.anim();
      });
    }, 10);
    gapage('home');
  }

  anim() {
    $('.bgimg, .text-box').css('display', 'block');
    TweenMax.from('.bgimg', 0.7, { delay: 0.5, scaleX: 0, scaleY: 0, rotation: 60, ease: Cubic.easeInOut });
    TweenMax.from('.text-box', 0.7, { delay: 1, scaleY: 0, scaleX: 0, ease: Expo.easeInOut, onComplete: this.boxDown });
  }

  boxDown() {
    $('.start').css('display', 'block');
    // TweenMax.set('.start', {scaleX:0.3, scaleY:0.3});
    TweenMax.to('.text-box', 0.6, { delay: 0.2, css: { marginTop: '0px', height: '180px' }, ease: Back.easeInOut });
    TweenMax.from('.start', 0.6, { delay: 0.2, y: -20, scaleX: 0, scaleY: 0, ease: Expo.easeInOut });

  }

  goAbout() {
    gaclick('go about');
  }

}
