(function ($) {
  $.fn.carouselType4 = function(options) {
    var settings = $.extend({
      visibleAreaSelector: '.carousel-item-list-outer-wrapper',
      itemListMovableContainerSelector: '.carousel-item-list',
      btnPrevSelector: '.carousel-pagination-arrows .arrow-prev',
      btnNextSelector: '.carousel-pagination-arrows .arrow-next'
    }, options);

    var self = $(this);

    var visibleAreaWrapper = $(settings.visibleAreaSelector);
    var itemListMovableContainer = $(settings.itemListMovableContainerSelector);
    var itemList = itemListMovableContainer.find('.item-list-inner-wrapper').children();

    var one_scroll_width = itemList.first().outerWidth(true);

    var init = function() {
      for(var j=0; j < itemList.length; j++) {
        $(itemList[j]).css('left', j * (itemList.first().outerWidth(true)));
      }
    }

    $(settings.btnPrevSelector).on('click', function() {
      if((itemList.eq(0).position().left + itemListMovableContainer.position().left) <= one_scroll_width) {
        var first_item_list_element = $(itemListMovableContainer).find('.carousel-item:first');
        var last_item_list_element = $(itemListMovableContainer).find('.carousel-item:last');
        last_item_list_element.css('left', first_item_list_element.position().left - last_item_list_element.outerWidth(true));
        $(first_item_list_element).before(last_item_list_element);
        itemList = itemListMovableContainer.find('.item-list-inner-wrapper').children();
      }

      $(itemListMovableContainer).css('left', $(itemListMovableContainer).position().left + one_scroll_width);
    });

    $(settings.btnNextSelector).on('click', function() {
      var last_list_item = $(itemListMovableContainer).find('.carousel-item:last');

      if((itemListMovableContainer.position().left + last_list_item.position().left + last_list_item.outerWidth(true) - visibleAreaWrapper.width()) < one_scroll_width) {
        var first_item_list_element = $(itemListMovableContainer).find('.carousel-item:first');
        var last_item_list_element = $(itemListMovableContainer).find('.carousel-item:last');
        first_item_list_element.css('left', last_item_list_element.position().left + last_item_list_element.outerWidth(true));
        last_item_list_element.after(first_item_list_element);
        itemList = itemListMovableContainer.find('.item-list-inner-wrapper').children();
      }

      $(itemListMovableContainer).css('left', $(itemListMovableContainer).position().left - one_scroll_width);
    });

    init();

    return this;
  }
})(jQuery)
