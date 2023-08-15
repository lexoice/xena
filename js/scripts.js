/* Main menu */
function toggleMainMenu() {
  if($('#main-menu').hasClass('active')) {
    $('#main-menu').removeClass('active');
    $('#main-menu-dialog').removeClass('active');

    $('#main-menu-dialog .site-navigation-block .menu-item-list > .menu-item').css('transition-delay', '');
    $('#main-menu-dialog .site-navigation-block .menu-item-list > .menu-item').removeClass('activated');

    $('#main-menu-carousel-1 .gallery-carousel-item-list').css('top', '0px');
    $('#main-menu-carousel-2 .gallery-carousel-item-list').css('top', '-' + $('#main-menu-carousel-2 .gallery-carousel-item-list').height + 1200 + 'px');
  } else {
    $('#main-menu').addClass('active');
    $('#main-menu-dialog').addClass('active');

    $('#main-menu-dialog .main-menu-link.gallery-active-link').eq(0).trigger('mouseover');

    var level_1_menu_item_list_length = $('#main-menu-dialog .site-navigation-block .menu-item-list > .menu-item').length;

    for(var i = 0; i < level_1_menu_item_list_length; i++) {
      $('#main-menu-dialog .site-navigation-block .menu-item-list > .menu-item').eq(i).css('transition-delay', ((i + 1) * 200) + 'ms');
      $('#main-menu-dialog .site-navigation-block .menu-item-list > .menu-item').eq(i).addClass('activated');
    }
  }
}

function closeMainMenu() {
  $('#main-menu').removeClass('active');
  $('#main-menu-dialog').removeClass('active');
}
