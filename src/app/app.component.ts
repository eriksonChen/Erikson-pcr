import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template: `
	<app-header></app-header>

	<router-outlet></router-outlet>
  `,
  styleUrls: ['../assets/sass/style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    gapage('erikson_index');
    if (this.paVaule('p') != '') {
      var page = this.paVaule('p');
      gaclick(`--${page}--`);
    }
  }

  paVaule(par) {
    var PA = location.search.split("?");
    var pas = (PA[1]) ? PA[1] : "";

    if (pas == '' || par == '') {
      return "";
    }
    var pasArr = pas.split("&");
    for (var i = 0; i < pasArr.length; i++) {
      var nowVal = pasArr[i].split("=");
      if (nowVal[0] == par && nowVal[1]) {
        return decodeURI(pasArr[i].split("=")[1]);
      }
    }
    return "";
  }

}


