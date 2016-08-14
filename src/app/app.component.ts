import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  templateUrl: '../template/index.html',
  // styleUrls: ['../sass/index.scss'],
  directives: [HeaderComponent]
})
export class AppComponent implements OnInit{
  title = 'is done!';
  constructor() { }
  ngOnInit(){

    
  }

}


