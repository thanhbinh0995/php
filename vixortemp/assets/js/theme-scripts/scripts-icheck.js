/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Icheck (checkboxes and radio buttons)

jQuery(function($) {
    "use strict";
    $.noConflict();

    $(document).ready(function() {
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat',
            radioClass: 'iradio_flat'
        });
    });

    $(document).ready(function() {
        $('input').iCheck({
            checkboxClass: 'icheckbox_flat-grey',
            radioClass: 'iradio_flat-grey'
        });
    });

});