import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutService } from '../about.service';
import { Item } from '../item';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'hobbies-type.component.html',
  styleUrls: ['../../sass/hobbies.scss']
})
export class HobbiesTypeComponent implements OnInit,OnDestroy {
  banner: any[];
  items: Item[];
  pitem: any[];
  mytype = "";
  subs:Subscription;

  constructor(private route: ActivatedRoute, private aboutService: AboutService) {
    //component之間的資料傳遞方法*********************

    // this.aboutService.changeBar(false);
    // this.aboutService.missionErikson$.subscribe(res => {
    //   this.myname = res;
    // })

    this.mytype = this.route.snapshot.data['item'];
    this.subs = aboutService.getData(this.mytype).subscribe(res => {
      this.items = res.data;
      this.banner = res.banner;
      setTimeout(() => {
        $('img.lazy').lazyload({ effect: "fadeIn" });
        $('.item').each((index, ele) => {
          TweenMax.from(ele, 0.7, { delay: (index + 1.8) * 0.18, alpha: 0, y: 70, ease: Back.easeOut });
        });
        this.pitem = res.data[0];
      }, 100);

      gapage(this.banner['name']);
    },
      error => console.log('Error fetching data')
    );

  }

  ngOnInit() {
    $('.wrap').css('display', 'none').delay(100).fadeIn('slow');
    window.scrollTo(0, 0);
    // this.aboutService.changeName(this.mytype);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  pop(p) {
    this.pitem = p;
    TweenMax.set('.pop-cont', { transformPerspective: 3000, x: '-50%', y: '-50%' });
    if ($('.banner').css('display') === 'none') { //手機動態
      TweenMax.set('.pop-cont', { y: '-50%', x: '50%' });
      $('.popup').fadeIn('fast', () => {
        TweenMax.to('.pop-cont', 0.6, { x: '-50%', ease: Expo.easeInOut });
      });

      $(".pop-cont").scrollTop(0);
    } else {
      TweenMax.set('.pop-cont', { alpha: 0, rotationX: 90, top: 50 });
      $('.popup').fadeIn(() => {
        TweenMax.to('.pop-cont', 1, { alpha: 1, rotationX: 0, top: '50%', ease: Expo.easeOut });
      });
    }

    gaclick('btn ' + p.title);
  }
}
