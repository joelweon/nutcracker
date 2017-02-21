//탭 고정
$(function(){
  // Check the initial Poistion of the Sticky Header
  var stickyHeaderTop = $('.deal-detail-navi').offset().top;
  $(window).scroll(function(){
  	//if() {}
    if( $(window).scrollTop() > stickyHeaderTop ) {
      $('.deal-detail-navi').css({position: 'fixed', left:'0', top: '0'});
      //$('#stickyalias').css('display', 'block');
    } else {
      $('.deal-detail-navi').css({position: 'static', top: '0px'});
      //$('#stickyalias').css('display', 'none');
    }
  });
});
