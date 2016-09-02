import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls:['../../sass/hobbies-pop.scss']

})
export class PopupComponent implements OnInit, OnChanges {

  	@Input() popCont:any;

  	constructor(private aboutService:AboutService) {
      
    }

  	ngOnInit() {

  	}

    ngOnChanges(){
      // this.aboutService.changeName(this.popCont.title);
    }

  	closePop(){
  		$('.popup').fadeOut('fast');
      // this.aboutService.changeName("");
  	}


  	urlto(ur){
  		window.open(ur);
  	}

}
