$(document).ready(function() {
    $('.Panel').hide();
    $('.deslizar').click(function(){
        $('.Panel').slideToggle('slow');
   });
    $('.Panel2').hide();
    $('.deslizar2').click(function(){
        $('.Panel2').slideToggle('slow');
   });
    $('.Panel3').hide();
    $('.deslizar3').click(function(){
        $('.Panel3').slideToggle('slow');
   });
    $('.Panel4').hide();
   	$('.deslizar4').click(function(){
        $('.Panel4').slideToggle('slow');
   });
});
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

