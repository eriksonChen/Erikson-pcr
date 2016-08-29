import { Component, OnInit } from '@angular/core';
import { Http, Request } from '@angular/http';


@Component({
  templateUrl: 'work.component.html',
  styleUrls: ['../../sass/work.scss']
})
export class WorkComponent implements OnInit {
	works:any;
	work={};
	pop=$('.pop-cont');

	constructor(private http:Http) { }

	ngOnInit() {
		this.http.get('../../api/work.json')
			.subscribe(res =>{
				this.works = res.json().data;
				setTimeout(()=>{
					$('.item').css('display','block');
					$('.item').each((i, ele)=>{
						TweenMax.from(ele, 0.8, {delay:(i+1)*0.18, alpha:0, y:40, ease:Back.easeOut});
					});
					this.onResize();
				},1)
			})
		window.scrollTo(0,0);
		TweenMax.set('.pop-cont', {transformPerspective:3000});

	}

	onUrl(url){
		window.open(url);
	}

	onResize(){
		let pw = Math.floor($('.pic').eq(0).width());
		let ph = Math.floor(pw/6*4)+1;
		$('.item .pic').css('height',ph+'px');
	}


	onPopup(work){		
		this.work=work;
		TweenMax.set('.pop-cont', {alpha:0, rotationX:90, x:'-50%', y:'-100%'});
		$('.popup').fadeIn('fast', ()=>{
			TweenMax.to('.pop-cont', 1, {alpha:1, rotationX:0, x:'-50%', y:'-50%', ease:Expo.easeOut});
		});
		
		
	}

	onPopClose(){
		$('.popup').fadeOut('fast');
	}

}
