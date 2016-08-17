/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

/* MAIN SCRIPTS */

//Cookies functions
cookie_expire_days = 365000;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = cname + "=" + cvalue + ";" + "expires=" + d.toUTCString() + ";path=/";
}

function getCookie(cname) {
    var i, x, y;
    ARRcookies = document.cookie.split(';');
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == cname) {
            return unescape(y);
        }
    }
    return "";
}

jQuery(function($) {
    "use strict";
    $.noConflict();

    //Navbar on hover item
    $(document).ready(function() {
        function bindNavbar() {
            if ($(window).width() > 768) {
                $('.navbar-default .dropdown')
                    .on('mouseover', function() {
                        $('.dropdown-toggle', this).next('.dropdown-menu').show();
                    })
                    .on('mouseout', function() {
                        $('.dropdown-toggle', this).next('.dropdown-menu').hide();
                    });

                $('.dropdown-toggle').click(function() {
                    if ($(this).next('.dropdown-menu').is(':visible')) {
                        window.location = $(this).attr('href');
                    }
                });
            } else {
                $('.navbar-default .dropdown').off('mouseover').off('mouseout');
            }
        }

        $(window).resize(function() {
            bindNavbar();
        });

        bindNavbar();
    });

    //Change NavBar Toggle
    $('.js-navbar-collapse', '#navbar').on('show.bs.collapse', function(event) {
        $('.navbar-toggle', '#navbar').addClass('collapsed');
    });
    $('.js-navbar-collapse', '#navbar').on('hide.bs.collapse', function(event) {
        $('.navbar-toggle', '#navbar').removeClass('collapsed');
    });

    //Carousels & Sliders

    /* Bootstrap Carousel */
    $('#carousel-slide-fade').carousel({
        interval: false
    });

    $('#carousel-slide').carousel({
        interval: false
    });

    $('#carousel-basic').carousel({
        interval: false
    });

    $('#quote-carousel-1').carousel({
        interval: false
    });

    $('#quote-carousel-2').carousel({
        interval: false
    });

    $('#quote-carousel-3').carousel({
        interval: false
    });

    $('#quote-carousel-4').carousel({
        interval: false
    });

    $('#testimonial-carousel-2').carousel({
        interval: 10000
    });

    $('#carousel-basic-1').carousel({
        interval: false
    });

    $('#carousel-basic-2').carousel({
        interval: false
    });

    $('#carousel-animations').carousel({
        interval: false
    });

    $('#bs-carousel-slide').carousel({
        interval: false
    });

    //Back to top
    jQuery('#to-top').click(function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    jQuery('#to-top').click(function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    jQuery("#to-top").addClass("hide-to-top-btn");
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() === 0) {
            jQuery("#to-top").addClass("hide-to-top-btn").removeClass("show-to-top-btn");
        } else {
            jQuery("#to-top").removeClass("hide-to-top-btn").addClass("show-to-top-btn");
        }
    });

});