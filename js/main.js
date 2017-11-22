$(document).ready(function(){
  $('.slider-section').slick( {
  	dots: true,
  	infinite: true,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	arrows: false
  });

  $('.hamburger').on('click',function(){
    console.log('hamburger');

    $('nav ul').toggleClass('show-nav')

  }); 

  /* User clicks arrow
<div> slides down */
$('.question-header').on('click',function(e) {
	e.preventDefault();
	if (!$(this).next('.answer').is(':visible')) {
		$('.answer').slideUp();
		$(this).next('.answer').slideDown();
	} else {
		$(this).next('.answer').slideUp();
	}
	
	
})

/* User clicks arrow 
<div> slides up */
// $('.down-arrow').click(function(e) {
// 	e.preventDefault();
// 	$('.read-more').slideUp();
// })


});
