
(function($){
  'use strict';

  // Main Menu


  $('.fram-menu-icon i.fa-bars').on('click', function(){
  	$('.fram-main-menu').slideDown();
  	$('.fram-menu-icon i.fa-times').show();
  	$(this).hide();
  });

  $('.fram-menu-icon i.fa-times').on('click', function(){
  	$('.fram-main-menu').slideUp();
  	$('.fram-menu-icon i.fa-bars').show();
  	$(this).hide();
  })


// owl
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }

})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-prev').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-next').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})






}) (jQuery);
