$(function() {
    "use strict";
    function t() {
        p.css("max-height", $(window).height() - $(".header").height() - 20 + "px"), 
        $(window).width() <= 1024 ? $(".header").addClass("mobile-device") : $(window).width() > 1024 && $(".header").removeClass("mobile-device")
    }
    $(document).ready(function() {
        t()
    }), 
    $(window).resize(function() {
        t()
    });
    var f = $(".nav-mobile"),
        p = $(".nav-menu");
    f.click(function() {
        $(this).hasClass("active") ? $(this).hasClass("active") && (f.removeClass("active"), p.removeClass("active")) : (f.addClass("active"), p.addClass("active"))
    });
    var u, h = $(".menu-has-sub");
    $(".mobile-device .menu-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), 
    h.click(function() {
        return $(".header").hasClass("mobile-device") ? (u = $(this).parent("li:first"), u.hasClass("menu-opened") ? u.find(".sub-dropdown:first").slideUp(function() {
            u.removeClass("menu-opened"), u.find(".menu-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
        }) : ($(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), u.addClass("menu-opened"), u.find(".sub-dropdown:first").slideDown()), !1) : !1
    }), 
    u = h.parent("li"), u.hover(function() {
        $(".header").hasClass("mobile-device") || $(this).find(".sub-dropdown:first").stop(!0, !0).fadeIn("fast")
    }, 
    function() {
        $(".header").hasClass("mobile-device") || $(this).find(".sub-dropdown:first").stop(!0, !0).delay(100).fadeOut("fast")
    });

});