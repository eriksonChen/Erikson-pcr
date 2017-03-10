import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isopen: boolean = false;
    constructor() { }
    ngOnInit() {
        $('img.svg').each(function () {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function (data) {
                var $svg = $(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);

            }, 'xml');

        });

    }

    closeMenu() {
        TweenMax.to($('.mobile-menu'), 0.7, { top: '-100%', ease: Expo.easeInOut });
        this.isopen = false;
    }

    changeHamer() {
        if (this.isopen) {
            this.isopen = false;
            TweenMax.to($('.mobile-menu'), 0.7, { top: '-100%', ease: Expo.easeInOut });
            gaclick('hamburger close');
        } else {
            this.isopen = true;
            TweenMax.to($('.mobile-menu'), 0.7, { top: '0', ease: Expo.easeInOut });
            gaclick('hamburger open');
        }

    }

    onLogo() {
        gaclick('logo');
    }

    onAbout() {
        gaclick('about');
    }
    onWork() {
        gaclick('wrok');
    }
    onContact() {
        gaclick('contact');
    }

    //social
    onFb() {
        window.open('https://www.facebook.com/ChenErikson');
        gaclick('facebook');
    }
    onIg() {
        window.open('https://www.instagram.com/erikson/');
        gaclick('instagram');
    }
    onFlickr() {
        window.open('https://www.flickr.com/photos/botan3951/');
        gaclick('flickr');
    }
}
