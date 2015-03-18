(function () {
    "use strict";

    var _data = {};

    function _initialize() {
        _data.imgCount = $("#id-container .cls-family-gallery .li").length;
        _data.imgIndex = 0;

        _bindEvents();
    }

    function _switchShow($show, index) {
        var nth = ".cls-family-photo:nth(#NTH#)".replace("#NTH#", index);

        $show.find(".cls-family-photo").hide();
        $show.find(nth).show();
    }

    function _bindEvents() {
        var $imgItems = $("#id-container .cls-family-gallery img"),
            $imgShow = $("#id-container .cls-family-show img"),
            $imgPrev = $("#id-container .cls-family-paging .prev-paging"),
            $imgNext = $("#id-container .cls-family-paging .next-paging");

        $imgItems.bind("click", function (event) {
            var t = this,
                $gallery = $("#id-container .cls-family-gallery"),
                $show = $("#id-container .cls-family-show");

            _data.imgIndex = Number($(t).parents("li").find('input[type="hidden"]').val());
            _switchShow($show, _data.imgIndex);

            $gallery.hide();
            $show.show();


            event.preventDefault();
        });

        $imgShow.bind("click", function (event) {
            var $gallery = $("#id-container .cls-family-gallery"),
                $show = $("#id-container .cls-family-show");

            $show.hide();
            $gallery.show();

            event.preventDefault();
        });

        $imgPrev.bind("click", function (event) {
            var $show = $("#id-container .cls-family-show"),
                prevIndex = (_data.imgIndex === 0) ? (_data.imgCount - 1) : (--_data.imgIndex);

            _switchShow($show, prevIndex);
            _data.imgIndex = prevIndex;

            event.preventDefault();
        });

        $imgNext.bind("click", function (event) {
            var $show = $("#id-container .cls-family-show"),
                nextIndex = (_data.imgIndex === _data.imgCount - 1) ? 0 : (++_data.imgIndex);

            _switchShow($show, nextIndex);
            _data.imgIndex = nextIndex;

            event.preventDefault();
        });
    }

    _initialize();
})();
