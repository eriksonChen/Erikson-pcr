import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AboutService } from '../about.service';


@Component({
	// selector: 'app-about',
	template: `<router-outlet></router-outlet>`
})
export class AboutComponent implements OnInit, OnDestroy {

	isShow: boolean;
	private subscription;
	//component 之間互傳資料的方法, 使用service 依賴注入
	constructor(private aboutService: AboutService) {
		this.subscription = aboutService.missionBar$.subscribe(showBar => {
			this.isShow = showBar;
			console.log('isShow change : ' + this.isShow);
		})
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
