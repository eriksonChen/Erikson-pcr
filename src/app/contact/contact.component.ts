import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { Subscription } from 'rxjs/Subscription';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  // selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['../../assets/sass/contact.scss']
})
export class ContactComponent implements OnInit {

  isClick = false;
  sub: Subscription;
  // form = {
  //   name: '',
  //   _subject: '',
  //   email: '',
  //   message: '',
  //   _next: 'http://e3pcr.com'
  // }
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: Http) {
    this.form = fb.group({
        name: ['', Validators.required],
        _subject: ['', Validators.required],
        email: ['', [Validators.required , CustomValidators.email]],
        message: ['', Validators.required]
    })
  }

  ngOnInit() {
    $('.hiddendiv').css('display', 'none');

    $('.wrap').css('display', 'none').delay(200).fadeIn('slow');
    TweenMax.from('.form-cont', 0.7, { delay: 0.5, alpha: 0, y: 30, ease: Expo.easeOut });
    gapage('contact');
  }
  get name(){
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get _subject(){
    return this.form.get('_subject');
  }
  get message(){
    return this.form.get('message');
  }

  onSubmit() {
    console.log('send');
    this.isClick = true;
    gaclick('submit');
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const data = $.param(this.form.value);

    this.sub = this.http.post('http://formspree.io/botan3951@gmail.com', data, { headers: headers })
      .subscribe(
      err => this.logError(err),
      () => this.clearForm()
      );
  }

  logError(err) {
    // console.error('There was an error: ' + err);
    this.clearForm();
  }

  clearForm() {
    alert('寄送成功！');
    this.isClick = false;
    this.form.reset();
    this.sub.unsubscribe();
  }

}
