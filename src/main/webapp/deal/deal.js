$(function(event) {
	// 관리자 로그인 시 글쓰기 버튼 보이기
	var user = window.sessionStorage.getItem('user');
	if (user != null && JSON.parse(user).memberNo == 1) {
		$("#purchase-write-btn").css('display','inline');
	}
  $.get(serverRoot + '/deal/list.json', function(ajaxResult) {
    if (ajaxResult.status == "success") {
      var div1 = $('.deal-container > .deal-area');
      var div2 = $('.deal-container > .deal-area-finish');

      var template = Handlebars.compile($('#trTemplate').html());
      var list = [];
      var finised = [];
      for (var i = 0; i < ajaxResult.data.length; i++) {
      	if (ajaxResult.data[i].rest >= 0) {
      		list.push(ajaxResult.data[i]);
      	} else {
      		finised.push(ajaxResult.data[i]);
      	}
      }
      div1.html(template({"list":list}));
      div2.html(template({"finished":finised}));

      // 디테일 링크
      $('.deal-box').click(function(event) {
        event.preventDefault();
        location.href = 'deal-detail.html?purchaseNo=' + $(this).attr("data-no");
      });
      
      //퍼센트 그래프
      $('.percentbar').each(function() {
        var percentage = $(this).attr('data-percent').replace("%","");
        if (percentage < 50) {
  		  	$(this).find('.percentbar-bar').css("background-color","rgb(255,0,0)");
  		  } else {
  		  	$(this).find('.percentbar-bar').css("background-color","rgb(0,128,64)");
  		  }
        $(this).find('.percentbar-bar').animate({ width:percentage+"%" },1000);
      });
      return;
    }
  }, 'json');
})

//탭이동
var sections = $('deal-detail-navi-cont')
, nav = $('deal-detail-navi')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

sections.each(function() {
  var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
  
  if (cur_pos >= top && cur_pos <= bottom) {
    nav.find('.deal-detail-navi a').removeClass('active');
    sections.removeClass('active');
    
    $(this).addClass('active');
    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
  }
});
});

nav.find('.deal-detail-navi a').on('click', function () {
var $el = $(this)
  , id = $el.attr('href');

$('html, body').animate({
  scrollTop: $(id).offset().top - nav_height
}, 300);

return false;
});

