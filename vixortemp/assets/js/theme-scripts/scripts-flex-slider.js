/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Flex Slider

// Can also be used with jQuery(document).ready()

jQuery(document).ready(function() {
    jQuery('#flexslider-slides-container').flexslider({
        animation: "fade",
        slideshow: true, //Play in start
        slideshowSpeed: 7000,
        controlsContainer: '.flexslider',
        after: function(slider) {
            var current = jQuery('.flexslider  .slides > li.flex-active-slide img');
            var current_caption = jQuery('.flexslider  .slides > li.flex-active-slide .caption');
            var others = jQuery('.flexslider  .slides > li:not(.flex-active-slide) img');
            var others_captions = jQuery('.flexslider  .slides > li:not(.flex-active-slide) .caption');

            //Apply animate.css in background images
            jQuery.each(others, function(i, item) {
                jQuery(this)
                    .removeClass('animated ' + jQuery(this).data('animate-in-class'))
                    .addClass('animated ' + jQuery(this).data('animate-out-class'));
            });

            jQuery(current)
                .removeClass('animate animated ' + jQuery(current).data('animate-out-class'))
                .addClass('animate animated ' + jQuery(current).data('animate-in-class'))


            //Apply animate.css in caption
            jQuery.each(others_captions, function(i, item) {
                jQuery(this)
                    .removeClass('animated ' + jQuery(this).data('animate-in-class'))
                    .addClass('animated ' + jQuery(this).data('animate-out-class'));
            });

            jQuery(current_caption)
                .removeClass('animate animated ' + jQuery(current_caption).data('animate-out-class'))
                .addClass('animate animated ' + jQuery(current_caption).data('animate-in-class'));
        }
    });
});