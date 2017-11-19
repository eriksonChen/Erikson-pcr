import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
@Component({
	templateUrl: 'resume.component.html',
	styleUrls: ['resume.scss']
})
export class ResumeComponent implements OnInit {

	constructor(private aboutService: AboutService) {

	}

	ngOnInit() {
		// this.aboutService.changeBar(false);
		window.scrollTo(0, 0);
		$('.wrap').css('display', 'none').delay(200).fadeIn(800);
		$('.txt-box').each((index, ele) => {
			TweenMax.from(ele, 0.6, { delay: (index + 2.5) * 0.2, alpha: 0, y: 70, ease: Cubic.easeOut });
		});
		gapage('resume');
	}

}
