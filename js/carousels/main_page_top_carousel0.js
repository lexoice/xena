(function ($) {
  $.fn.mainTopCarousel = function(options) {
    var methods = {
      init: function(options) {

      },
      test1: function() {
        console.log("jquery plugin - method TEST1");
      },
      test2: function() {
        console.log("jquery plugin - method TEST2");
      },
      scrollPrev: function() {
        if(this.currentItemIndex <= 0) {
          this.currentItemIndex = carousel_item_list.length - 1;
        } else {
          this.currentItemIndex--;
        }
        this.refreshItemsDisposition();
      },
      scrollNext: function() {
        if(this.currentItemIndex >= carousel_item_list.length) {
          this.currentItemIndex = 0;
        } else {
          this.currentItemIndex++;
        }
        this.refreshItemsDisposition();
      },
      scrollTo: function(target_item_index) {
        if((target_item_index > 0) && (target_item_index <=)) {
          this.currentItemIndex = target_item_index;
          this.refreshItemsDisposition();
        }
      },
      refreshItemsDisposition: function() {
        carousel_item_list.find('.carousel-item').removeClass('active');
        carousel_item_list.find('.carousel-item').eq($(this).currentItemIndex).addClass('active');
      }
    };

    // Default options
    var settings = $.extend({
      name: "Test",
      currentItemIndex: 0
    }, options);

    var carousel_item_list = this.find('.carousel-item-list');
    var carousel_pagination_arrows = this.find('.carousel-pagination-arrows');
    var carousel_pagination_bullets = this.find('.carousel-pagination-bullets');

    carousel_pagination_arrows.find('.arrow-prev').bind('click', function(e) {
      scrollPrev();
    });

    carousel_pagination_arrows.find('.arrow-next').bind('click', function(e) {
      scrollNext();
    });
    carousel_pagination_bullets.find('.bullet-list-item').bind('click', function(e) {
      //
      var bullet_index = $(this).index();
      console.log("Bullet click: ", bullet_index);
      //
      scrollTo(bullet_index);
    });

  }
})(jQuery);
