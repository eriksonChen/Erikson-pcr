import { Component, OnInit } from '@angular/core';
import{ HeaderComponent } from './header/'

@Component({
  selector: 'app-root',
  templateUrl: `
	<!-- header -->
	<app-header></app-header>
	<!-- end header -->

	<!-- wrap 各頁面的內容 -->
	<router-outlet></router-outlet>
  `,
  // styleUrls: ['../sass/index.scss'],
  directives: [HeaderComponent]
})
export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(){

  }

}


