/*-----------------------------
 * 헤더 JavaScript
 -----------------------------*/
$(function(event) {
  /* 현재 메뉴 하이라이팅 하기 함수 */
  setTimeout(function () {
    setMenu(); 
  }, 300); //1 second

	/* 숨은메뉴-버튼 이벤트 */
	$(document).on('click', '#btn-show-hidden', function() {
		$('#btn-show-hidden').toggleClass('on');
		$(this).parent().parent().find('.div-menu-hidden').toggleClass('on');
		return false;
	});
	/* 검색버튼 이벤트 */
	$(document).on('click', '#btn-search', function() {
  	$('#btn-search').toggleClass('on');
  	$(this).parent().parent().find('.div-search').toggleClass('on');
	  return false;
  });
  /* 검색 마우스 올릴 때 */
	$(document).bind('mouseover', '.input-search', function(event) {
	  if (($('#input-search').val().length <= 0) &&
	      (event.toElement.className == 'input-search')) {
      $(document).find('label.input-search').addClass('hover');
    }
	  return false;
  });
	/* 검색 마우스 내릴 때 */
	$(document).bind('mouseout', '.input-search .hover', function(event) {
    if (event.target.className == 'input-search') {
      $(document).find('label.input-search').removeClass('hover');
    }
    return false;
  });
  /* 검색 input 커서in */
	$(document).on('focusin', '#input-search', function(event) {
    if ($('#input-search').val().length <= 0) {
      $(this).parent().parent().find('label.input-search').addClass('off');
      $(this).parent().parent().find('label.input-search').removeClass('hover');
    }
    return false;
  });
	/* 검색 input 커서out */
	$(document).on('focusout', '#input-search', function(event) {
    if ($('#input-search').val().length <= 0) {
      $(this).parent().parent().find('label.input-search').removeClass('off');
    }
    return false;
  });
	

  /* 햄버거 메뉴 효과 */
  var burger = $('.menu-trigger');
  
  burger.each(function(index) {
    var $this = $(this);
    
    $this.on('click', function(e) { 
      e.preventDefault();
      $(this).toggleClass('active-' + (index+1));
      })
  });
  
});

function setMenu(){
  var page = new Array;
  page[0] = "boycott";
  page[1] = "review";
  page[2] = "product";
  var url = location.href;
  var getAr0 = url.indexOf(page[0]);
  var getAr1 = url.indexOf(page[1]);
  var getAr2 = url.indexOf(page[2]);
  if(getAr0 != -1){
    $("a.menu:eq(0)").addClass("on");
    console.log('불매운동 메뉴 진입');
  };
  if(getAr1 != -1){
    $("a.menu:eq(1)").addClass("on");
  };
  if(getAr2 != -1){
    $("a.menu:eq(2)").addClass("on");
  };
}