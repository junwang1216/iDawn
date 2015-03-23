$(document).ready(function () {
    "use strict";

    var _data = {};

    function _position($dialog) {
        var $win = $(window),
            $doc = $(document),
            dialogWidth, dialogHeight, scrollHeight, top, left;

        dialogWidth = $dialog.width();
        dialogHeight = $dialog.height();
        scrollHeight = $doc.scrollTop();
        top = parseInt($win.height() - dialogHeight) / 2 + scrollHeight;
        top = top > 0 ? top : 0;
        left = parseInt($win.width() - dialogWidth) / 2;

        return {
            "top" : top + "px",
            "left" : left + "px"
        };
    }

    function _initialize() {
        $(".cls-family-show").hide();
        $("#id-family-slider").responsiveSlides({ auto: false, nav: true, speed: 500 });

        $(".cls-family-gallery li").on("click", function (e) {
            e.preventDefault();

            $('<div class="cls-overflow"></div>').appendTo($("body")).css({
                width: $("body").width(),
                height: $("body").height(),
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0.2,
                background: "#DCDCDC"
            });

            $(".cls-family-show").css(_position($(".cls-family-show")));
            $(".cls-family-show").show("slow");
        });

        $(".cls-family-show .cls-family-close").on("click", function (e) {
            e.preventDefault();

            $(".cls-family-show").hide("slow");
            $(".cls-overflow").remove();
        });
    }

    _initialize();
});
