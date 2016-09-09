import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';

@Component({
  selector: 'app-hobbies',
  templateUrl: 'hobbies.component.html',
  styleUrls: ['../../sass/hobbies.scss'],
  directives: [MdButton]
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0,0);
  	$('.wrap').css('display','none').delay(100).fadeIn('slow');
  	this.anim();
    gapage('hobbies');
  }

  anim(){
  	$('.banner').each((i, ele)=>{
		TweenMax.from(ele, 0.7, {delay:(i+3)*0.2, alpha:0, y:50, ease:Back.easeOut});
	});
  }
  
}
