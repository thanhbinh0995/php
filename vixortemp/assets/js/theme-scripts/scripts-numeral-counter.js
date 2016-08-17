/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Numeral counter

jQuery('#numeral-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        jQuery(this).find('.timer').each(function() {
            var $this = jQuery(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        jQuery(this).unbind('inview');
    }
});