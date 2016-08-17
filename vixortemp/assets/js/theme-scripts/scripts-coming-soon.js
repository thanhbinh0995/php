/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

//Coming Soon

//countdown

/* jQuery Countdown Reference: http://keith-wood.name/countdownRef.html */
jQuery(document).ready(function() {
    /* Change the launch date according to the date you want to set.
Please take note that months ranges from 0-11 like an array setup. 
*/
    var launchdate = new Date(2016, 8 - 1, 7);
    jQuery('#counter').countdown({
        until: launchdate
    });
});