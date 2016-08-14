import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: '../template/header.html'
  // styleUrls: ['../sass/index.scss']
})
export class HeaderComponent implements OnInit{
  constructor(
  	private route: ActivatedRoute,
  	private router: Router
  	) { }

  isopen:boolean=false;

  ngOnInit() {
    
  }

  closeMenu(){
  	TweenMax.to($('.mobile-menu'), 0.5, {top:'-100%', ease:Expo.easeOut});
  	this.isopen=false;
  }

  changeHamer(){
  	if(this.isopen){
		this.isopen=false;
		TweenMax.to($('.mobile-menu'), 0.5, {top:'-100%', ease:Expo.easeOut});
	}else{
		this.isopen=true;
		TweenMax.to($('.mobile-menu'), 0.5, {top:'0', ease:Expo.easeOut});
	}

  }

  isSelected(state: String) { 
  	var st = this.router.url.indexOf(state+"");
  	return st != -1; 
  }
  
}
