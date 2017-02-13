/*-----------------------------
 * 헤더 JavaScript
 -----------------------------*/
$(function(event) {
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
	  if ($('#input-search').val().length <= 0 &&
	      event.toElement.className == 'input-search') {
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