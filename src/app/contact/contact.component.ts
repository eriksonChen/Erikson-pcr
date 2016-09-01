import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';


@Component({
  // selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['../../sass/contact.scss'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ContactComponent implements OnInit {

  form={};

  constructor(private http:Http) {
    this.form={
      name:'',
      _subject:'',
      email: '',
      Message: '',
      _next:'http://e3pcr.com'
    }
  }

  ngOnInit() {
    $('.hiddendiv').css("display","none");

    $('.wrap').css('display', 'none').delay(200).fadeIn('slow');
    TweenMax.from('.form-cont', 0.7, {delay:0.5, alpha:0, y:30, ease:Expo.easeOut});
  }

  onSubmit(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var data = $.param(this.form);
    // var data = JSON.stringify(this.form);
    // console.log($('#contact-form').serialize());

    this.http.post('http://formspree.io/botan3951@gmail.com', data, {headers: headers})
      // .map((res:Response) => res.json())
      .subscribe(
        err => this.logError(err),
        () => this.clearForm()
      );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  clearForm(){
    alert('寄送成功！');

    this.form={
      name:'',
      _subject:'',
      email: '',
      Message: '',
      _next:'http://e3pcr.com'
    }; 
  }

}
