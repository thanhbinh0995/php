/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */
 
// FancyBox

jQuery(function($) {
    "use strict";
    $.noConflict();

    $(document).ready(function() {
        $(".fancybox").fancybox({
            openEffect: "fade",
            closeEffect: "fade"
        });
    });

    // Video
    jQuery(document).ready(function() {
        //Youtube
        $(".video-fancybox").click(function() {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });

            return false;
        });
    });

});