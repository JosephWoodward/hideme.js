(function ($) {
    $.fn.hideme = function (options) {

        var settings = $.extend({
            effect: "fadeOut",
            speed: 800,
            delay: 2000
        }, options);

        var _init = function(parent, options) {
            setInterval(function() {
                if (settings.effect == "fadeOut") $(parent).fadeOut(settings.speed);
                if (settings.effect == "slideUp") $(parent).slideUp(settings.speed);
                if (settings.effect == "hide") $(parent).hide();
            }, options.delay);
        };

        _init(this, settings);

    };
}(jQuery));