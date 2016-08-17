/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Contact form

jQuery(function($) {
    "use strict";
    $.noConflict();

    //Validations
    var name, email, subject, message;
    jQuery(".send-contact").click(function() {
        jQuery(".error").hide();
        var form = jQuery(this).closest('.ajax-contacts');
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = jQuery("[name=email]", form).val();
        var nameVal = jQuery("[name=name]", form).val();
        var subjectVal = jQuery("[name=subject]", form).val();
        var messageVal = jQuery("[name=message]", form).val();

        if (nameVal == '' || subjectVal == '' || messageVal == '') {
            jQuery(".message-contact", form).html("<div class='alert alert-danger'>All fields are required</div>");
            return false;
        }

        if (emailaddressVal == '') {
            jQuery(".message-contact", form).html('<div class="alert alert-danger">Enter your email address before submitting.</div>');
            return false;
        } else if (!emailReg.test(emailaddressVal)) {
            jQuery(".message-contact", form).html("<div class='alert alert-danger'>That is not an email address.&nbsp;  Typo?</div>");
            return false;
        } else {
            email = escape(emailaddressVal);
        }

        name = escape(nameVal);
        subject = escape(subjectVal);
        message = escape(messageVal);

    });

    //Sending...
    jQuery('.ajax-contacts').submit(function() {
        var form = jQuery(this);
        jQuery(".message-contact", form).html("<div class='alert alert-danger'>Sending message...</div>");
        jQuery.ajax({
            type: 'POST',
            url: 'php/contact/contact.php',
            data: 'email=' + email + '&name=' + name + '&subject=' + subject + '&message=' + message,
            success: function(msg) {
                jQuery('.message-contact', form).html(msg);
            },
            error: function() {
                jQuery(".message-contact", form).html("<div class='alert alert-danger'>Error while sending the message</div>");
            }
        });
        return false;
    });

});