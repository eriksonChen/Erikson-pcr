import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

	//設定要傳遞資料的物件設定
	private showBar = new Subject<boolean>();
	missionBar$ = this.showBar.asObservable();

	private erikson = new Subject<string>();
	missionErikson$ = this.erikson.asObservable();

	constructor(private http: Http) {
		// this.showBar=true;
	}

	//讀取hobbies資料
	getData(mytype) {
		return this.http.get('./assets/api/' + mytype + '.json').map(res => res.json());
	}
	//讀取作品資料
	getWork() {
		return this.http.get('./assets/api/work.json').map(res => res.json());
	}

	//讀取Experience
	getExperience(){
		return this.http.get('./assets/api/about.json').map(res => res.json());
	}

	changeBar(key: boolean) {
		this.showBar.next(key);
		// console.log(this.showBar);
	}

	changeName(er: string) {
		this.erikson.next(er);
	}

	getBar() {
		return this.showBar;
	}

}
