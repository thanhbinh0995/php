/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Google Maps

/* Default Map */
jQuery(document).ready(function() {
    if (typeof(google) != "undefined") {
        jQuery('.default-map').gMap({
            address: '276 N Tustin, St. Orange, California 92867, USA',
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            overviewMapControl: true,
            scrollwheel: true,
            icon: {
                image: "http://www.google.com/mapfiles/marker.png",
                shadow: "http://www.google.com/mapfiles/shadow50.png",
                iconsize: [20, 34],
                shadowsize: [37, 34],
                iconanchor: [9, 34],
                shadowanchor: [19, 34]
            },
            zoom: 14,
            markers: [{
                'address': '276 N Tustin, St. Orange, California 92867, USA'
            }]

        });
    }

});

/* Street View Map */
jQuery(document).ready(function() {
    if (typeof(google) != "undefined") {
        jQuery('#street-view-map').gMap({
            address: '276 N Tustin, St. Orange, California 92867, USA',
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            scrollwheel: true,
            icon: {
                image: "http://www.google.com/mapfiles/marker.png",
                shadow: "http://www.google.com/mapfiles/shadow50.png",
                iconsize: [20, 34],
                shadowsize: [37, 34],
                iconanchor: [9, 34],
                shadowanchor: [19, 34]
            },
            zoom: 18,
            markers: [{
                'address': '276 N Tustin, St. Orange, California 92867, USA'
            }]

        });
    }
});

/* Satellite Map */
jQuery(document).ready(function() {
    if (typeof(google) != "undefined") {
        jQuery('#satellite-map').gMap({
            address: '276 N Tustin, St. Orange, California 92867, USA',
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            maptype: google.maps.MapTypeId.SATELLITE,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            scrollwheel: true,
            icon: {
                image: "http://www.google.com/mapfiles/marker.png",
                shadow: "http://www.google.com/mapfiles/shadow50.png",
                iconsize: [20, 34],
                shadowsize: [37, 34],
                iconanchor: [9, 34],
                shadowanchor: [19, 34]
            },
            zoom: 18,
            markers: [{
                'address': '276 N Tustin, St. Orange, California 92867, USA'
            }]
        });
    }
});

/* Street View Map */
jQuery(document).ready(function() {
    if (typeof(google) != "undefined") {
        jQuery('#street-view-map').gMap({
            address: '276 N Tustin, St. Orange, California 92867, USA',
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            scrollwheel: true,
            icon: {
                image: "http://www.google.com/mapfiles/marker.png",
                shadow: "http://www.google.com/mapfiles/shadow50.png",
                iconsize: [20, 34],
                shadowsize: [37, 34],
                iconanchor: [9, 34],
                shadowanchor: [19, 34]
            },
            zoom: 14,
            markers: [{
                'address': '276 N Tustin, St. Orange, California 92867, USA'
            }]
        });
    }
});