/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

/* Switcher of styles */

window.console = window.console || (function() {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {};
    return c;
})();

/*
In html
the color button must define with:
class="switcher-btn-color" data-color="blue" data-target="backgrounds"

The data-color: define de css file and the class for colorize this button
The data-target: define the id of the link tag and the path for looking for
 */

function hide_switcher() {
    jQuery('#style-switcher').animate({
        left: '-195px'
    });
}

jQuery(function($) {
    "use strict";
    $.noConflict();
    //Colors path
    var target_path = {
        'colors': './assets/css/colors/',
        'backgrounds': './assets/css/colors/backgrounds/',
    };

    var buttons = $('.switcher-btn-color', '#style-switcher');
    var buttons_layouts = $('.switcher-btn-layout', '#style-switcher');

    //Colorize buttons
    for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        $(btn).addClass($(btn).data('color'));
    };

    // Color Changer (Front and Background)
    $('#style-switcher', document).on('click', '.switcher-btn-color', function(event) {
        event.preventDefault();

        $("link#" + $(this).data('target')).attr("href", target_path[$(this).data('target')] + $(this).data('color') + ".css");

        var btns = $(this).closest('li').siblings('li').children('.switcher-btn-color');
        $(btns).removeClass('active');
        $(this).addClass('active');

        setCookie('vixor.color_' + $(this).data('target'), $(this).data('color'), cookie_expire_days);

        return false;
    });

    // Layout Changer
    $('#style-switcher', document).on('click', '.switcher-btn-layout', function(event) {
        event.preventDefault();
        switch ($(this).data('layout')) {
            case 'wide':
                var state = false;
                break;
            case 'boxed':
                var state = true;
                break;
        }

        buttons_layouts.removeClass('btn-warning');
        $(this).addClass('btn-warning');

        $($(this).data('target')).toggleClass('container', state);
        setCookie('vixor.layout', $(this).data('layout'), cookie_expire_days);

        return false;
    });

    //Remember the options
    var color = getCookie('vixor.color_colors');
    if (typeof(color) != "undefined" && color != "") {
        $('.switcher-btn-color[data-target=colors][data-color=' + color + ']').trigger('click');
    }

    var bg = getCookie('vixor.color_backgrounds');
    if (typeof(bg) != "undefined" && bg != "") {
        $('.switcher-btn-layout[data-target=backgrounds][data-color=' + bg + ']').trigger('click');
    } else {
        console.error("It is not defined the HTML color. Or the funds folder doesn't exist.");
    }

    var layout = getCookie('vixor.layout');
    if (typeof(layout) != "undefined" && layout != "") {
        $('.switcher-btn-layout[data-layout=' + layout + ']').trigger('click');
        $('.switcher-btn-layout[data-layout=' + layout + ']').addClass('btn-warning');
    }


    //Show/Hide the switcher
    $('#style-switcher', document).on('click', '#switcher-btn-toggle', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var div = jQuery('#style-switcher');

        if (div.css('left') === '-195px') {
            jQuery('#style-switcher').animate({
                left: '0px'
            });
        } else {
            hide_switcher();
        }
    });

    $(document).on('click', ':not("#style-switcher")', function(event) {
        hide_switcher();
    });

    jQuery('#reset a').click(function(e) {
        var bg = jQuery(this).css('backgroundImage');
        jQuery('body').css('backgroundImage', 'url()');
    });

    hide_switcher();


});