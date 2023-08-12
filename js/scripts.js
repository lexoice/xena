/* Main menu */
function toggleMainMenu() {
  if($('#main-menu').hasClass('active')) {
    $('#main-menu').removeClass('active');
    $('#main-menu-dialog').removeClass('active');
  } else {
    $('#main-menu').addClass('active');
    $('#main-menu-dialog').addClass('active');
  }
}

function closeMainMenu() {
  $('#main-menu').removeClass('active');
  $('#main-menu-dialog').removeClass('active');
}
