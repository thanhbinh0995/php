/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

/* Progress bar skills */

jQuery(function($) {
    "use strict";
    $.noConflict();

    jQuery(document).ready(function($) {
        function isScrolledIntoView(id) {
            var elem = id;
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            if ($(elem).length > 0) {
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
            }

            return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }


        function graph_init(id, speed) {
            var scope = jQuery(id);

            jQuery(window).scroll(function() {
                if (isScrolledIntoView(id)) {
                    $.each($('div.progress-bar', scope), function() {
                        $(this).css('width', $(this).attr('aria-valuenow') + '%');
                    });
                }
            })

            if (isScrolledIntoView(id)) {
                $.each($('div.progress-bar', scope), function() {
                    $(this).css('width', $(this).attr('aria-valuenow') + '%');
                });
            }
        }

        graph_init("#container-progress-bars-skills", 1000);

    });

});