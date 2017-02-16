import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls:['../../assets/sass/hobbies-pop.scss']

})
export class PopupComponent {

  	@Input() popCont:Item;

  	constructor() {
      
    }

  	closePop(){
  		$('.popup').fadeOut('fast');
  	}


  	urlto(ur){
  		window.open(ur);
  	}

}
