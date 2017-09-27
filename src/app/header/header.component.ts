import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isopen = false;
    constructor() { }
    ngOnInit() {
        $('img.svg').each(function () {
            const $img = $(this);
            const imgID = $img.attr('id');
            const imgClass = $img.attr('class');
            const imgURL = $img.attr('src');

            $.get(imgURL, function (data) {
                let $svg = $(data).find('svg');
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
