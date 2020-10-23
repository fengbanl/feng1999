;
$(function($, window, document, undefined) {
    slide = function(container, options) {
        "use strict";
        if (!container) return;
        var options = options || {},
            isAuto = options.auto,
            controller = options.controller,
            event = options.event,
            interval, slidesWrapper = container.children().first(),
            length = container.children().length + 1,
            childWidth = container.width(),
            totalWidth = childWidth * length;
        $(".slideBox").css({ "width": totalWidth });
        $(controller.children().eq(0)).addClass('active');
        var toNum = true;

        function prev() {
            if ($(".active").index() == 0) { toNum = length - 1; } else { toNum = $(".active").index() - 1 }
            locate(toNum);
        }

        function next() {
            if ($(".active").index() == (length - 1)) { toNum = 0; } else { toNum = $(".active").index() + 1 }
            locate(toNum);
        }

        function slideAuto() { if (isAuto == true) { interval = setInterval(function() { next(); }, options.time) } }

        function locate(num) {
            $(controller.children()).removeClass("active");
            $(controller.children().eq(num)).addClass('active');
            $('.slides').css({ "margin-left": "-" + (num * childWidth) + "px" });
        }

        function stop() { clearInterval(interval); }
        slideAuto();
        $(".flexslider").mouseover(function() { stop(); }).mouseout(function() { slideAuto(); });
        if (event == "hover") { $(controller.children()).mouseover(function() { locate($(this).index()); }); } else if (event == "click") { $(controller.children()).click(function() { locate($(this).index()); }); }
        return { prev: function() { prev(); }, next: function() { next(); } }
    };
}(jQuery, window, document));

$(function() {
    var bannerSlide = new slide($("#banner-tab"), {
        time: 4000,
        event: "hover",
        auto: true,
        controller: $('#bannerCtrl')
    });

    $(".prev").click(function() {
        bannerSlide.prev();
    });

    $(".next").click(function() {
        bannerSlide.next();
    })

})