/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

//Accordion

jQuery(document).ready(function() {
    jQuery('.collapse').on('show.bs.collapse', function() {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] span').html('<i class="glyphicon glyphicon-minus"></i>');
    });
    jQuery('.collapse').on('hide.bs.collapse', function() {
        var id = jQuery(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] span').html('<i class="glyphicon glyphicon-plus"></i>');
    });
});