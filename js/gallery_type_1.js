(function($) {
  $.fn.galleryType1 = function(options) {
    var settings = $.extend({
      popupBigImageContainerSelector: '.big-image-container',
      popupModalSelector: '#gallery-image-popup-modal',
      popupScrollArrowsSelector: '.carousel-pagination-arrows',
      popupCloseButtonSelector: '.popup-close-button'
    }, options);

    var self = $(this);
    var itemList = this.children();
    var popup_active_gallery_list_item = null;

    var popup_modal = $(settings.popupModalSelector);
    var big_image_container = $(settings.popupBigImageContainerSelector);

    var popupScrollPrev = function() {
      if(popup_active_gallery_list_item != null) {
        if($(popup_active_gallery_list_item).prev().length == 0) {
          popup_active_gallery_list_item = itemList.last();
        } else {
          popup_active_gallery_list_item = $(popup_active_gallery_list_item).prev();
        }
      }

      activatePopupItem();
    }

    var popupScrollNext = function() {
      if(popup_active_gallery_list_item != null) {
        if($(popup_active_gallery_list_item).next().length == 0) {
          popup_active_gallery_list_item = itemList.first();
        } else {
          popup_active_gallery_list_item = $(popup_active_gallery_list_item).next();
        }

        activatePopupItem();
      }
    }

    var activatePopupItem = function() {
      var source_image_element = $(popup_active_gallery_list_item).find('.gallery-item-image');
      var image_src = source_image_element.attr('src'),
          image_alt = source_image_element.attr('alt'),
          image_title = source_image_element.attr('title');

      big_image_container.css('background-color', 'rgba(255,255,255,0.25)');

      big_image_container.html('');
      big_image_container.append('<img class="big-image" src="' + image_src + '" alt="' + image_alt + '" title="' + image_title + '" />');
    }

    var onItemClick = function() {
      popup_active_gallery_list_item = this;

      console.log("Test surrent gallery item: ", popup_active_gallery_list_item);

      activatePopupItem();

      popup_modal.addClass('active');
    }

    var popup_scrolling_arrows = $(settings.popupScrollArrowsSelector);

    popup_scrolling_arrows.find('.arrow-prev').on('click', popupScrollPrev);
    popup_scrolling_arrows.find('.arrow-next').on('click', popupScrollNext);

    $(settings.popupCloseButtonSelector).on('click', function() {
      popup_active_gallery_list_item = null;
      popup_modal.removeClass('active');
    });

    itemList.on('click', onItemClick);

    return this;
  }
})(jQuery)
