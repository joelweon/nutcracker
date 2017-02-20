/*헤더 고정*/
$(function(){
  // Check the initial Poistion of the Sticky Header
  var stickyHeaderTop = $('#wrap-content').offset().top;
  $(window).scroll(function(){
    if( $(window).scrollTop() + 60 > stickyHeaderTop) {
      $('#wrap-header').css({background:'rgba(0,0,0,1.0)',transition:'background-color 1.5s'});
    } else {
      $('#wrap-header').css({background:'rgba(0,0,0,0.0)',transition:'background-color 1.5s'});
    }
  });
});