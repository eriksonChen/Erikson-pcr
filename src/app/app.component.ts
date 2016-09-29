import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit(){
    gapage('erikson_index');
  }

}


