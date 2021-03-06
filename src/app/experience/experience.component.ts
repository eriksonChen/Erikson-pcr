import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Request } from '@angular/http';
import { AboutService } from '../about.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  experience: any[];
  subs: Subscription;


  constructor(private aboutService: AboutService) {

  }

  ngOnInit() {
    $('.wrap').css('display', 'none').delay(200).fadeIn('slow');
    this.subs = this.aboutService.getExperience().subscribe(res => {
      this.experience = res.experience;
      this.experience.forEach((val, key) => {
        val.dist = key % 2 === 0 ? 'left' : 'right';
      })

      setTimeout(() => {
        this.anim();
      }, 10);
    },
      err => console.log('Error fetching about data'));
    window.scrollTo(0, 0);
    gapage('experience');
  }

  anim() {
    $('.item').each((i, ele) => {
      TweenMax.from($(ele).find('.doc'), 0.7, { delay: (i + 2) * 0.2, scaleX: 0, scaleY: 0, ease: Expo.easeOut });

      TweenMax.from($(ele), 0.7, { delay: (i + 1) * 0.2, alpha: 0, y: 20, ease: Back.easeOut });
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
