(function ($) {
  $.fn.carouselType3 = function(options) {
    var settings = $.extend({
      itemListSelector: '.carousel-item-list',
      buttonPrevSelector: '.carousel-pagination-arrows .arrow-prev',
      buttonNextSelector: '.carousel-pagination-arrows .arrow-next',
      visibleItemStateClassnameList: ['carousel-item-state-1', 'carousel-item-state-2', 'carousel-item-state-3', 'carousel-item-state-4'],
      defaultFirstVisibleSlideIndex: 0
    }, options);

    var currentFirstVisibleSlideIndex = settings.defaultFirstVisibleSlideIndex;
    var visibleItemIndexList = [];

    var slides = $(settings.itemListSelector).children();

    var defineNextSlideIndex = function(baseSlideIndex) {
      var nextSlideIndex;

      if(baseSlideIndex < (slides.length - 1)) {
        nextSlideIndex = baseSlideIndex + 1;
      } else {
        nextSlideIndex = 0;
      }

      return nextSlideIndex;
    }

    var rebuildVisibleItemIndexList = function() {
      visibleItemIndexList = [];

      visibleItemIndexList.push(currentFirstVisibleSlideIndex);

      for(var i = 1; i <= (settings.visibleItemStateClassnameList.length - 1); i++) {
        visibleItemIndexList.push(defineNextSlideIndex(visibleItemIndexList[i - 1]));
      }
    }

    var refreshCarouselState = function() {
      rebuildVisibleItemIndexList();

      for(var stateKey in settings.visibleItemStateClassnameList) {
        slides.removeClass(settings.visibleItemStateClassnameList[stateKey]);
      }

      for(var indexKey in visibleItemIndexList) {
        slides.eq(visibleItemIndexList[indexKey]).addClass(settings.visibleItemStateClassnameList[indexKey]);
      }
    }

    $(settings.buttonPrevSelector).on('click', function() {
      if(currentFirstVisibleSlideIndex > 0) {
        currentFirstVisibleSlideIndex--;
      } else {
        currentFirstVisibleSlideIndex = slides.length - 1;
      }

      refreshCarouselState();
    });

    $(settings.buttonNextSelector).on('click', function() {
      if(currentFirstVisibleSlideIndex < (slides.length - 1)) {
        currentFirstVisibleSlideIndex++;
      } else {
        currentFirstVisibleSlideIndex = 0;
      }

      refreshCarouselState();
    });

    refreshCarouselState();

    return this;
  }
})(jQuery)
