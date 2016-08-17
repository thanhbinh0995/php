/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Flickr feed (plugin)

jQuery(function($) {
     "use strict";
     $.noConflict();

     $('.flickr-feed').jflickrfeed({
             limit: 9,
             qstrings: {
                 id: '125303894@N06' // Find your Flickr ID in http://idgettr.com/
             },
             itemTemplate: '<li><a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
         },
         function(data) {
             $(".flickr-feed li:nth-child(3n)").addClass("nomargin");
         });

});