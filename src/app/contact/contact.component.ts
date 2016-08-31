import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['../../sass/contact.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	var $contactForm = $('#contact-form');
    $contactForm.submit(function(e) {
        console.log('submit');
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/botan3951@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                // $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function(data) {
                /*$contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--success">Message sent!</div>');*/
                alert('Message sent!');
            },
            error: function(err) {
               alert(err);
            }
        });
    });

  }



}
