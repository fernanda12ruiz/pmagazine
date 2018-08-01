$(document).ready(function(){
  // Hamburger icon
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.nav-bar').toggleClass('menu');
    $('nav.nav').toggleClass('open');
  });

  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

});
