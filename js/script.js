function hoverMenu() {
   
   $('#features').hover(function () {
      
      console.log('hello world');
      $('#dropdown-features').removeClass('hide').addClass('flexbox');
   });
}

function bodyClick() {
   
   $('body').click(function () {
      
      $('#dropdown-features').removeClass('flexbox').addClass('hide');
   })

   $('#dropdown-features').click(function(event) {
      
      event.stopPropagation();
   })
}

function init() {
   
   hoverMenu();
   bodyClick();
}

$(document).ready(init);