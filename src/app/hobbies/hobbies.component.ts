import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: 'hobbies.component.html',
  styleUrls: ['../../assets/sass/hobbies.scss']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    $('.wrap').css('display', 'none').delay(100).fadeIn('slow');
    this.anim();
    gapage('hobbies');
  }

  anim() {
    $('.banner').each((i, ele) => {
      TweenMax.from(ele, 0.7, { delay: (i + 3) * 0.2, alpha: 0, y: 50, ease: Back.easeOut });
    });
  }

}
