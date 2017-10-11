import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Request } from '@angular/http';
import { AboutService } from '../about.service';
import { Work } from './../work';

@Component({
  templateUrl: 'work.component.html',
  styleUrls: ['work.scss']
})
export class WorkComponent implements OnInit, OnDestroy {

  works: Work[];
  work = {
    pic: '',
    brands: '',
    title: '',
    date: '',
    skill: '',
    des: '',
    href: ''
  }
  wsrc = '../assets/svg/loading.svg';
  pop = $('.pop-cont');
  subs: Subscription;

  constructor(private aboutService: AboutService) {
    this.subs = aboutService.getWork().subscribe(res => {
      this.works = res.data;
      this.work = res.data[0];
      setTimeout(() => {
        $('.item').css('display', 'block');
        $('.item').each((i, ele) => {
          TweenMax.from(ele, 0.7, { delay: (i + 1) * 0.2, alpha: 0, y: 50, ease: Back.easeOut });
        });
        $('img.lazy').lazyload({
          effect: 'fadeIn'
        });
      }, 10)
    });
  }

  ngOnInit() {
    $('.cont-title').css('display', 'none').delay(200).fadeIn('slow');
    window.scrollTo(0, 0);
    gapage('work');
  }

  onUrl(url) {
    window.open(url);
  }

  // onResize() {
  //   const pw = Math.floor($('.pic').eq(0).width());
  //   const ph = Math.floor(pw / 6 * 4) + 1;
  //   $('.item .pic').css('height', ph + 'px');
  // }

  onPopup(work) {
    this.work = work;
    this.wsrc = '../assets/svg/loading.svg';
    setTimeout(() => {
      $('img.lazyload').lazyload();
    }, 100);


    TweenMax.set('.pop-cont', { transformPerspective: 3000 });
    if ($('.wrap').outerWidth() <= 768) { // 手機動態
      TweenMax.set('.pop-cont', { y: '-50%', x: '50%' });
      $('.popup').fadeIn('fast', () => {
        TweenMax.to('.pop-cont', 0.7, { x: '-50%', ease: Expo.easeInOut });
      });
      $('.pop-cont').scrollTop(0);
    } else {
      TweenMax.set('.pop-cont', { alpha: 0, rotationX: 90, x: '-50%', y: '-100%' });
      $('.popup').fadeIn('fast', () => {
        TweenMax.to('.pop-cont', 1, { alpha: 1, rotationX: 0, x: '-50%', y: '-50%', ease: Expo.easeOut });
      });
    }

    gaclick('case ' + work.title);

  }

  onPopClose() {
    $('.popup').fadeOut(() => {
      this.wsrc = '../assets/svg/loading2.svg';
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
