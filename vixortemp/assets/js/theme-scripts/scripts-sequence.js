/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Sequencejs Slider

if (jQuery("#sequence").length) {
    // Sequence slide
    jQuery(document).ready(function() {
        var options = {
            nextButton: true,
            prevButton: true,
            pagination: true,
            swipeNavigation: true,
            animateStartingFrameIn: false,
            autoPlay: true,
            autoPlayDelay: 8000,
            preloader: true,
            preloadTheseFrames: [1],
            preloadTheseImages: [
                "../../sliders/sequence-js/images/img-1-min.png",
                "../../sliders/sequence-js/images/img-2-min.png",
                "../../sliders/sequence-js/images/img-3-min.png"
            ]
        };

        var mySequence = jQuery("#sequence").sequence(options).data("sequence");
    });
}