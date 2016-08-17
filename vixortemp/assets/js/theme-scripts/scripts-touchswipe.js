/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// TouchSwipe plugin

jQuery(function($) {
    "use strict";
    $.noConflict();

    $(document).ready(function() {

        //Enable swiping...
        $(".carousel-inner").swipe({

            //Generic swipe handler for all directions
            swipeLeft: function(event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('next');
            },
            swipeRight: function() {
                $(this).parent().carousel('prev');
            },

            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });
    });

});