(function ($) {
  $.fn.mainTopCarousel = function(options) {
    var settings = $.extend({
      itemList: '.carousel-item-list',
      btnPrev: '.carousel-pagination-arrows .arrow-prev',
      btnNext: '.carousel-pagination-arrows .arrow-next',
      bullets: '.carousel-pagination-bullets',
      defaultSlideIndex: 0
    }, options);

    var currentSlideIndex = settings.defaultSlideIndex;

    var slides = $(this).find(settings.itemList).children();
    var navigationBullets = $(this).find(settings.bullets).children();

    var refreshCarouselState = function() {
      console.log("Test refresh: ", currentSlideIndex);

      slides.removeClass('active');
      navigationBullets.removeClass('active');

      slides.eq(currentSlideIndex).addClass('active');
      navigationBullets.eq(currentSlideIndex).addClass('active');
    }

    var scrollPrev = function() {
      if(currentSlideIndex > 0) {
        currentSlideIndex--;
      } else {
        currentSlideIndex = slides.length - 1;
      }

      refreshCarouselState();
    }

    var scrollNext = function() {
      if(currentSlideIndex < (slides.length - 1)) {
        currentSlideIndex++;
      } else {
        currentSlideIndex = 0;
      }

      refreshCarouselState();
    }

    $(this).find(settings.btnPrev).on('click', scrollPrev);
    $(this).find(settings.btnNext).on('click', scrollNext);

    navigationBullets.on('click', function(e) {
      currentSlideIndex = navigationBullets.index(this);
      refreshCarouselState();
    });

    refreshCarouselState();

    return this;
  }
})(jQuery);
