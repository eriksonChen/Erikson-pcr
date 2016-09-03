import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  // selector: 'app-about-home',
  templateUrl: 'about-home.component.html',
  styleUrls: ['../../sass/about.scss']
})
export class AboutHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.box').each((index, ele)=>{
  		TweenMax.from(ele, 0.5, {delay:(index+2)*0.2, alpha:0, y:70, ease:Back.easeOut});
  	});
    window.scrollTo(0,0);
    gapage('about');
  }

}
