/*-----------------------------
 * 헤더 JavaScript
 -----------------------------*/
/*$(function(event) {*/

  /* 현재 메뉴 하이라이팅 하기 함수 */
  setTimeout(function () {
    setMenu(); 
  }, 300); //1 second
  
  /* 메뉴 클릭 이벤트 */
  $(document).on('click', '#menu-review', function() {
    location.href = clientRoot + "/review/review.html"; 
  })
  
  /* 메뉴 클릭 이벤트 */
  $(document).on('click', '#menu-deal', function() {
    location.href = clientRoot + "/deal/deal.html"; 
  })

	/* 숨은메뉴-버튼 이벤트 */
	$(document).on('click', '#btn-show-hidden', function() {
		$('#btn-show-hidden').toggleClass('on');
		$('#btn-show-hidden').toggleClass('glyphicon glyphicon-menu-hamburger');
		$('#btn-show-hidden').toggleClass('glyphicon glyphicon-remove');
		$('.div-menu-hidden').toggleClass('on');
		return false;
	});
	/* 검색버튼 이벤트 */
	$(document).on('click', '#btn-search', function() {
  	$('#btn-search').toggleClass('on');
  	$('.div-search').toggleClass('on');
	  return false;
  });
  /* 검색 마우스 올릴 때 */
	$(document).bind('mouseover', '.input-search', function(event) {
	  if ($('#input-search').val().length <= 0 &&
	      (event.toElement.className == 'input-search')) {
      $('label.input-search').addClass('hover');
    }
	  return false;
  });
	/* 검색 마우스 내릴 때 */
	$(document).bind('mouseout', '.input-search .hover', function(event) {
    if (event.target.className == 'input-search') {
      $('label.input-search').removeClass('hover');
    }
    return false;
  });
  /* 검색 input 커서in */
	$(document).on('focusin', '#input-search', function(event) {
    if ($('#input-search').val().length <= 0) {
      $('label.input-search').addClass('off');
      $('label.input-search').removeClass('hover');
    }
    return false;
  });
	/* 검색 input 커서out */
	$(document).on('focusout', '#input-search', function(event) {
    if ($('#input-search').val().length <= 0) {
      $('label.input-search').removeClass('off');
    }
    return false;
  });
	/* 검색할 때 */
	$(document).on('keydown', '#input-search', function(key) {
	  if (key.keyCode == 13) { //엔터키값은 13
	    var keyword = $(this).val();
	    console.log('[통합검색] keyword: ' + keyword);
	    if (keyword != "") {
	      console.log('[통합검색] 검색 실행...');
	      location.href=serverRoot + '/search/search.html?keyword=' 
	        +  encodeURI(keyword , "UTF-8");;
	      //totalSearch(keyword);
	    } else {
	      console.log('[통합검색] 검색어 없음...');
	      return;
	    }
	  }
	});
	
	$(document).on('click', '#btn-member', function() {
    $('.div-profile').toggleClass('on');
    $('.triangle').toggleClass('visible');
    $('.popup').toggleClass('visible');
    return false;
  });
/*});*/

function setMenu(){
  var page = new Array;
  page[0] = "boycott";
  page[1] = "review";
  page[2] = "product";
  page[3] = "deal";
  var url = location.href;
  var getAr0 = url.indexOf(page[0]);
  var getAr1 = url.indexOf(page[1]);
  var getAr2 = url.indexOf(page[2]);
  var getAr3 = url.indexOf(page[3]);
  if(getAr0 != -1){
    $("a.menu:eq(0)").addClass("on");
    $("a.menu:eq(1)").addClass("off");
    $("a.menu:eq(2)").addClass("off");
    $("a.menu:eq(3)").addClass("off");
  };
  if(getAr1 != -1){
    $("a.menu:eq(0)").addClass("off");
    $("a.menu:eq(1)").addClass("on");
    $("a.menu:eq(2)").addClass("off");
    $("a.menu:eq(3)").addClass("off");
  };
  if(getAr2 != -1){
    $("a.menu:eq(0)").addClass("off");
    $("a.menu:eq(1)").addClass("off");
    $("a.menu:eq(2)").addClass("on");
    $("a.menu:eq(3)").addClass("off");
  };
  if(getAr3 != -1){
    $("a.menu:eq(0)").addClass("off");
    $("a.menu:eq(1)").addClass("off");
    $("a.menu:eq(2)").addClass("off");
    $("a.menu:eq(3)").addClass("on");
  };
}