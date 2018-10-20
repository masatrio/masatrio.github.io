jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


}); // JQuery end

$(document).ready(function(){
    new Typed('#nametag', {
        strings: ["Hi, ^200 I'm Maulana Aji Satrio! "],
        typeSpeed: 80
    })
    new Typed('#positiontag', {
        strings: ["^3500Software ^50Engineer"],
        typeSpeed: 50
    });
    $(".typed-cursor").hide();
})
