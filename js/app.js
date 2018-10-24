// $(document).ready(function(){
//   // launch parallax after each image loads
//   $('#main').imagesLoaded( function() {
//     parallax.init({
// 		    el: '.parallax'
// 	   });
//   });
//
// });

$('document').ready(function(){
  $('button.hamburger').click(function(){
    $('.navigation .left').toggleClass('show');
  });

  $('.categories .button').click(function(){
    $('.dropdown').toggleClass('d-show');
  });
});


window.addEventListener('DOMContentLoaded', function() {
  Parallax.init('.parallax');
});

// scrollify

if ($(window).width() > 1024){
  $.scrollify({
    section : ".fullheight",
    interstitialSection : "#footer",
    scrollbars: false,
    updateHash: false
  });
}

// Smooth State
$(function(){
  'use strict';
  var $page = $('section'),
      $body = $('html, body'),

      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',

        onProgress: {
          duration: 150, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-loading');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onStart: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-loading');
            $container.addClass('is-exiting');
            $body.animate({ 'scrollTop': 0 });
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-loading');
            $container.removeClass('is-exiting');
            $body.animate({ 'scrollTop': 0 });
            // Inject the new content
            $container.html($newContent);
          }
        },

      onAfter: function($container, $newContent) {

      }
    },
      smoothState = $page.smoothState(options).data('smoothState');
});
