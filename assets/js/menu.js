$(function(){
  $('.btn-burger').click(function(){
     if($('.main-menu').css('left') == '0px'){
         $(this).removeClass('fa-times').addClass('fa-bars');
         $('.main-menu, .menu-mobile-fond').animate({'left':'-100%'}, {duration:'fast'});
         console.log("hello");
     }else{
         $(this).removeClass('fa-bars').addClass('fa-times');
         $('.main-menu, .menu-mobile-fond').animate({'left':0}, {duration:'fast'});
     }
  });
});


  $(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top}, speed ); // Go
      return false;
    });
  });
