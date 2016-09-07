import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{ HeaderComponent } from './header/';

@Component({
  selector: 'app-root',
  templateUrl: `
	<!-- header -->
	<app-header></app-header>
	<!-- end header -->

	<!-- wrap 各頁面的內容 -->
	<router-outlet></router-outlet>
  `,
  styleUrls: ['../sass/style.scss'],
  encapsulation: ViewEncapsulation.None,
  directives: [HeaderComponent]
})
export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(){
    gapage('erikson_index');
  }

}


