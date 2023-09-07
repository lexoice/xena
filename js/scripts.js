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

function toggleModal(modal_selector, action) {
  if(action == 'open') {
    $(modal_selector).addClass('active');
  } else {
    $(modal_selector).removeClass('active');
  }
}

function sendCallRequest() {
  console.log("Perform sending Call Request");
}

function sendOrderAProjectRequest() {
  console.log("Perform sending Order A Project Request");
}

function toggleCheckbox(el) {
  $(el).parent().find('input').trigger('click');

  if($(el).hasClass('active')) {
    $(el).parent().find('input').removeAttr('checked');
    $(el).removeClass('active');
  } else {
    $(el).parent().find('input').attr('checked', 'checked');
    $(el).addClass('active');
  }
}

$(document).ready(function() {
  // Main menu scripts
  $('#main-menu-dialog .main-menu-link.gallery-active-link').on('mouseover', function(e) {
    var gallery_1_target_slide = $('#main-menu-carousel-1').find('#main-menu-gallery-1-' + $(this).attr('data-gallery-item-id'));
    var gallery_1_target_slide_top = gallery_1_target_slide.position().top;

    $('#main-menu-carousel-1 .gallery-carousel-item-list').children().removeClass('active');
    $('#main-menu-carousel-1 .gallery-carousel-item-list').css('top', -gallery_1_target_slide_top + 200);
    $(gallery_1_target_slide).addClass('active');

    var gallery_2_target_slide = $('#main-menu-carousel-2').find('#main-menu-gallery-2-' + $(this).attr('data-gallery-item-id'));
    var gallery_2_target_slide_top = gallery_2_target_slide.position().top;
    $('#main-menu-carousel-2 .gallery-carousel-item-list').children().removeClass('active');
    $('#main-menu-carousel-2 .gallery-carousel-item-list').css('top', -gallery_2_target_slide_top + 300);
    $(gallery_2_target_slide).addClass('active');
  });

  $('#scroll-top-button').click(function() {
    $(window).scroll(0);
  });

  $(window).on('scroll', function(e) {
    var yPos = window.pageYOffset;

    if(yPos > 1000) {
      if(!$('#scroll-top-button').hasClass('active')) {
        $('#scroll-top-button').addClass('active');
      }
    } else {
      if($('#scroll-top-button').hasClass('active')) {
        $('#scroll-top-button').removeClass('active');
      }
    }
  });


  const sr = ScrollReveal();
  sr.reveal('.page-section', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    delay: 100,
    easing: 'ease'
  });

});
