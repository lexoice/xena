(function ($) {
  $.fn.carouselType1 = function(options) {
    var settings = $.extend({
      itemListSelector: '.carousel-item-list',
      buttonPrevSelector: '.carousel-pagination-arrows .arrow-prev',
      buttonNextSelector: '.carousel-pagination-arrows .arrow-next',
      itemStateClassnameSubsequence: ['carousel-item-state-1', 'carousel-item-state-2', 'carousel-item-state-3']
    }, options);

    var slides = $(settings.itemListSelector).children();

    var refreshCarouselState = function() {
      for(var selectorKey in settings.itemStateClassnameSubsequence) {
        slides.removeClass(settings.itemStateClassnameSubsequence[selectorKey]);
      }

      for(var selectorKey in settings.itemStateClassnameSubsequence) {
        slides.eq(selectorKey).addClass(settings.itemStateClassnameSubsequence[selectorKey]);
      }
    }

    $(settings.buttonPrevSelector).on('click', function() {
      var lastSlideSelector = settings.itemStateClassnameSubsequence.pop();
      settings.itemStateClassnameSubsequence.unshift(lastSlideSelector);

      refreshCarouselState();
    });

    $(settings.buttonNextSelector).on('click', function() {
      var firstSlideSelector = settings.itemStateClassnameSubsequence.shift();
      settings.itemStateClassnameSubsequence.push(firstSlideSelector);

      refreshCarouselState();
    });

    refreshCarouselState();

    return this;
  }
})(jQuery)
