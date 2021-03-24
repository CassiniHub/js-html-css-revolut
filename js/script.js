function hoverMenu() {
   
   $('.nav-voice').hover(function () {
      
      var hoverNavVoice    = $(this);
      var dropdownNavVoice = hoverNavVoice.find('.dropdown');

      $('.dropdown.flexbox').removeClass('flexbox').addClass('hide');
      // $('.dropdown').not(dropdownNavVoice).removeClass('flexbox').addClass('hide');
      $(dropdownNavVoice).removeClass('hide').addClass('flexbox');
   });
}

function bodyClick() {
   
   $('body').click(function () {
      
      $('.dropdown').removeClass('flexbox').addClass('hide');
   })

   $('.dropdown').click(function(event) {
      
      event.stopPropagation();
   })
}

function init() {
   
   hoverMenu();
   bodyClick();
}

$(document).ready(init);