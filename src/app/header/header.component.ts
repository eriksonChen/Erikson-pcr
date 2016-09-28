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
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
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
