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
