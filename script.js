
$(document).ready(function() {
    $(".menu-bar-icon").click(function() {
      $(".mini-logo").toggleClass('none');
      $(this).toggleClass('change-btn');
      $('.btn-reviews').toggleClass('btn-review');
      $('.btn-news').toggleClass('btn-new');
      $('.btn-contacts').toggleClass('btn-contact');
  
      $('.sidebar-content').slideToggle(0, function(){
          if($(this).css('display') === "none"){
              $(this).removeAttr('style');
          }
      });
    });
  });
  
  