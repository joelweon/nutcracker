$(document).ready(function() {
  /* 숨은메뉴-버튼 이벤트 */
  $('#btn-show-hidden').click(function() { 
    $('#btn-show-hidden').toggleClass('on');
    $(this).parent().parent().find('.div-menu-hidden').toggleClass('on');
    return false;
  });
  /* 검색버튼 이벤트 */
  $('#btn-search').click(function() {
    $('#btn-search').toggleClass('on');
    $(this).parent().parent().find('.div-search').toggleClass('on');
    return false;
  });
  /* 검색 마우스 올릴 때 */
  $('.input-search').hover(function() {
    if ($('#input-search').val().length <= 0) {
      $(this).parent().parent().find('label.input-search').addClass('hover');
    }
  }, function() {
    $(this).parent().parent().find('label.input-search').removeClass('hover');
  });
  /* 검색 input 입력시 */
  $('#input-search').focus(function() {
    if ($('#input-search').val().length <= 0) {
      $(this).parent().parent().find('label.input-search').toggleClass('off');
      $(this).parent().parent().find('label.input-search').removeClass('hover');
    }
    return false;
  });
  $('#input-search').blur(function() {
    if ($('#input-search').val().length <= 0) {
      $(this).parent().parent().find('label.input-search').removeClass('off');
    }
    return false;
  });
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
//불매 불량 바로가기
function fnMove(seq){
    var offset = $("#title-bar-" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
};