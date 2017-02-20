/* on-off 스위치 */
$(document).ready(function(){
  $('.product-search-btn').click(function(){
    $(this).toggleClass("switchon");
  });
});

/* 검색창 */
$(function () {
  $('#product-search-window').addClass('open');
  $('#product-search-window > form > input[type="search"]').focus();
	/* $('#product-search-window').on('click keyup', function(event) {
	  if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
	    $(this).removeClass('open');
	  }
	}); */
});