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

  // Initialize carousels
  $('#main-top-carousel').mainTopCarousel();

  $('#main-page-section-3-carousel-1').carouselType1({
    itemListSelector: '#main-page-section-3-carousel-1 .carousel-item-list',
    buttonPrevSelector: '#main-page-section-3-carousel-1 .carousel-pagination-arrows .arrow-prev',
    buttonNextSelector: '#main-page-section-3-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  $('#main-page-section-2-carousel-1').carouselType2({
    itemListSelector: '#main-page-section-2-carousel-1 .carousel-item-list',
    buttonPrevSelector: '#main-page-section-2-carousel-1 .carousel-pagination-arrows .arrow-prev',
    buttonNextSelector: '#main-page-section-2-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  $('#main-page-section-5-carousel-1').carouselType2({
    itemListSelector: '#main-page-section-5-carousel-1 .carousel-item-list',
    buttonPrevSelector: '#main-page-section-5-carousel-1 .carousel-pagination-arrows .arrow-prev',
    buttonNextSelector: '#main-page-section-5-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  $('#main-page-section-6-carousel-1').carouselType2({
    itemListSelector: '#main-page-section-6-carousel-1 .carousel-item-list',
    buttonPrevSelector: '#main-page-section-6-carousel-1 .carousel-pagination-arrows .arrow-prev',
    buttonNextSelector: '#main-page-section-6-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  $('#main-page-section-8-carousel-1').carouselType4({
    visibleAreaSelector: '#main-page-section-8-carousel-1 .carousel-item-list-outer-wrapper',
    itemListMovableContainerSelector: '#main-page-section-8-carousel-1 .carousel-item-list',
    btnPrevSelector: '#main-page-section-8-carousel-1 .carousel-pagination-arrows .arrow-prev',
    btnNextSelector: '#main-page-section-8-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  $('#main-page-section-9-carousel-1').carouselType2({
    itemListSelector: '#main-page-section-9-carousel-1 .carousel-item-list',
    buttonPrevSelector: '#main-page-section-9-carousel-1 .carousel-pagination-arrows .arrow-prev',
    buttonNextSelector: '#main-page-section-9-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  $('#main-page-section-10-carousel-1').carouselType3({
    itemListSelector: '#main-page-section-10-carousel-1 .carousel-item-list',
    buttonPrevSelector: '#main-page-section-10-carousel-1 .carousel-pagination-arrows .arrow-prev',
    buttonNextSelector: '#main-page-section-10-carousel-1 .carousel-pagination-arrows .arrow-next'
  });

  // Animations
  $(window).on('scroll', function(e) {
    console.log("Window scroll event: ", e);

    var yPos = window.pageYOffset;
    if(yPos >= 0) {
      if(!$('#main-page-section-1').hasClass('on-show')) {
        $('#main-page-section-1').addClass('on-show');
      }
    }

    if(yPos >= 720) {
      if($('#main-page-section-1').hasClass('on-show')) {
        $('#main-page-section-1').removeClass('on-show');
        //$('#main-page-section-1').addClass('out-of-show-2');
      }
    }

    if(yPos >= 240) {
      setTimeout(function() {
        if(!$('#main-page-section-2').hasClass('on-show')) {
          $('#main-page-section-2').addClass('on-show');
        }
      }, 30);

      if($('#main-page-section-2').hasClass('on-show')) {

      }
    }

    if(yPos >= 1440) {
      setTimeout(function() {
        if($('#main-page-section-2').hasClass('on-show')) {
          $('#main-page-section-2').removeClass('on-show');
        }
      }, 30);
    }


    if(yPos >= 480) {
      setTimeout(function() {
        if(!$('#main-page-section-3').hasClass('on-show')) {
          $('#main-page-section-3').addClass('on-show');
        }
      }, 60);
    }

    if(yPos >= 480) {
      setTimeout(function() {
        if(!$('#main-page-section-3').hasClass('on-show')) {
          $('#main-page-section-3').removeClass('on-show');
        }
      }, 60);
    }

    if(yPos >= 960) {
      setTimeout(function() {
        if(!$('#main-page-section-4').hasClass('on-show')) {
          $('#main-page-section-4').addClass('on-show');
        }
      }, 90);
    }

    if(yPos >= 3276) {
      setTimeout(function() {
        if(!$('#main-page-section-5').hasClass('on-show')) {
          $('#main-page-section-5').addClass('on-show');
        }
      }, 120);
    }

    if(yPos >= 4220) {
      setTimeout(function() {
        if($('#main-page-section-5').hasClass('on-show')) {
          $('#main-page-section-5').removeClass('on-show');
        }
      }, 120);
    }

    if(yPos >= 3120) {
      setTimeout(function() {
        if(!$('#main-page-section-6').hasClass('on-show')) {
          $('#main-page-section-6').addClass('on-show');
        }
      }, 150);
    }

    if(yPos >= 5612) {
      setTimeout(function() {
        if($('#main-page-section-6').hasClass('on-show')) {
          $('#main-page-section-6').removeClass('on-show');
        }
      }, 150);
    }

    if(yPos >= 4484) {
      setTimeout(function() {
        if(!$('#main-page-section-8').hasClass('on-show')) {
          $('#main-page-section-8').addClass('on-show');
        }
      }, 180);
    }

    if(yPos >= 6240) {
      setTimeout(function() {
        if($('#main-page-section-8').hasClass('on-show')) {
          $('#main-page-section-8').removeClass('on-show');
        }
      }, 180);
    }


    if(yPos >= 4800) {
      setTimeout(function() {
        if(!$('#main-page-section-9').hasClass('on-show')) {
          $('#main-page-section-9').addClass('on-show');
        }
      }, 210);
    }


    if(yPos >= 7204) {
      setTimeout(function() {
        if($('#main-page-section-9').hasClass('on-show')) {
          $('#main-page-section-9').removeClass('on-show');
        }
      }, 210);
    }

    if(yPos >= 5520) {
      setTimeout(function() {
        if(!$('#main-page-section-10').hasClass('on-show')) {
          $('#main-page-section-10').addClass('on-show');
        }
      }, 240);
    }

    if(yPos <= 5436) {
      setTimeout(function() {
        if($('#main-page-section-10').hasClass('on-show')) {
          $('#main-page-section-10').removeClass('on-show');
        }
      }, 240);
    }

    if(yPos >= 6404) {
      setTimeout(function() {
        if(!$('#main-page-section-11').hasClass('on-show')) {
          $('#main-page-section-11').addClass('on-show');
        }
      }, 270);
    }

    if(yPos <= 5816) {
      setTimeout(function() {
        if($('#main-page-section-11').hasClass('on-show')) {
          $('#main-page-section-11').removeClass('on-show');
        }
      }, 270);
    }
  });

  $(window).scroll();
});
