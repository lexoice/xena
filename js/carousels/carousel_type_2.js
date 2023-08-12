(function ($) {
  $.fn.carouselType2 = function(options) {
    var settings = $.extend({
      itemListSelector: '.carousel-item-list',
      buttonPrevSelector: '.carousel-pagination-arrows .arrow-prev',
      buttonNextSelector: '.carousel-pagination-arrows .arrow-next',
      defaultSlideIndex: 0
    }, options);

    var currentSlideIndex = settings.defaultSlideIndex;
    var slides = $(settings.itemListSelector).children();

    var refreshCarouselState = function() {
      slides.removeClass('active');
      slides.eq(currentSlideIndex).addClass('active');
    }

    $(settings.buttonPrevSelector).on('click', function() {
      if(currentSlideIndex > 0) {
        currentSlideIndex--;
      } else {
        currentSlideIndex = slides.length - 1;
      }

      refreshCarouselState();
    });

    $(settings.buttonNextSelector).on('click', function() {
      if(currentSlideIndex < (slides.length - 1)) {
        currentSlideIndex++;
      } else {
        currentSlideIndex = 0;
      }

      refreshCarouselState();
    });

    refreshCarouselState();

    return this;
  }
})(jQuery)
