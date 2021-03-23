function hoverMenu() {
   
   $('#features').hover(function () {
      
      console.log('hello world');
      $('#dropdown-features').removeClass('hide').addClass('flexbox');
   });
}

function init() {
   
   hoverMenu();
}

$(document).ready(init);