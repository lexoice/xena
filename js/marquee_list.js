(function($) {
  $.fn.marqueeList = function(options) {
    var settings = $.extend({
      itemListContainerSelector: '.item-list-container',
      scrollDuration: 60, // Seconds
    }, options);

    var self = $(this);

    var itemListContainer = $(settings.itemListContainerSelector);
    var itemList = itemListContainer.children();
    var item_list_container_initial_width = itemListContainer.width();

    $(itemListContainer).prepend(itemList.clone());
    $(itemListContainer).append(itemList.clone());

    $(itemListContainer).css('animation', 'marquee_list_1 ' + settings.scrollDuration + 's infinite linear');

    return this;
  }
})(jQuery)
