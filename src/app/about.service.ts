import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AboutService {
	
    //設定要傳遞資料的物件設定
	  private showBar=new Subject<boolean>();
	  missionBar$ = this.showBar.asObservable();

    private erikson = new Subject<string>();
    missionErikson$ = this.erikson.asObservable();

  	constructor() { 
  		// this.showBar=true;
  	}

  	changeBar(key:boolean){
  		this.showBar.next(key);
  		// console.log(this.showBar);
  	}

    changeName(er:string){
      this.erikson.next(er);
    }

  	getBar(){
  		return this.showBar;
  	}

}
