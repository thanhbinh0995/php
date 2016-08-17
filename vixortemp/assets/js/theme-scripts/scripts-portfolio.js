/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Portfolio (isotope plugin)

jQuery(function($) {
    "use strict";
    $.noConflict();

    jQuery.noConflict()(function($) {
        var $container = $('#container-portfolio');

        if ($container.length) {
            $container.waitForImages(function() {

                // initialize isotope
                $container.isotope({
                    itemSelector: '.box-img-portfolio',
                    layoutMode: 'fitRows',
                    resizable: false,
                    // set columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / 4
                    }
                });

                function reload_portfolio() {
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector
                    });
                    $('#filters a').removeClass('active');
                    $(this).addClass('active').siblings().removeClass('active all');

                    return false;
                }
                // filter items when filter link is clicked
                $('#filters a').click(reload_portfolio);

                $(window).resize(function() {
                    reload_portfolio();
                })

            }, null, true);
        }


    });

});