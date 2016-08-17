/*
 * Vixor - Responsive Website Template
 * Version: 1.0.3
 * Copyright 2016
 * Created by: damterthemes
 * @damterthemes: https://wrapbootstrap.com/user/damterthemes
 */

// Bootstrap Carousel with animations

(function($) {
    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    var $BootstrapCarousel = $('.carousel'),
        $firstAnimatingElems = $BootstrapCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    $BootstrapCarousel.carousel({
        interval: 7000
    });

    doAnimations($firstAnimatingElems);

    //$BootstrapCarousel.carousel('pause');

    $BootstrapCarousel.on('slide.bs.carousel', function(e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})(jQuery);