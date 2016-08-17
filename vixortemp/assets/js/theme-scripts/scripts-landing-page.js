/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

//Landing Page

jQuery(function($) {
    "use strict";
    $.noConflict();

    /* Smooth Scroll */
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
        selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function(toggle, anchor) {} // Function to run after scrolling
    });

});