import { Component, OnInit } from '@angular/core';
import { Http, Request } from '@angular/http';


@Component({
  templateUrl: 'work.component.html',
  styleUrls: ['../../sass/work.scss']
})
export class WorkComponent implements OnInit {
	works:any;
	work={};

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
				},1)
			})
		window.scrollTo(0,0);
		

	}

	onUrl(url){
		window.open(url);
	}

	onPopup(work){		
		this.work=work;
		$('.popup').fadeIn();
	}

	onPopClose(){
		$('.popup').fadeOut();
	}

}
