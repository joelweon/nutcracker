$(function(event) {
  $.get(serverRoot + '/deal/list.json', function(ajaxResult) {
    if (ajaxResult.status == "success") {
      var total = ajaxResult.data;
      var div1 = $('.deal-container > .deal-area');
      var div2 = $('.deal-container > .deal-area-finish');

      var template = Handlebars.compile($('#trTemplate').html());
      var list = [];
      var finised = [];
      for (var i = 0; i < total.length; i++) {
      	console.log("ajaxResult.data.rest: " + ajaxResult.data[i].rest);
      	if (ajaxResult.data[i].rest > 0) {
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
      $('.percentbar').each(function(){
        var percentage = $(this).attr('data-percent');
        $(this).find('.percentbar-bar').animate({ width:percentage },1000);
      });

      return;
    }
    alert(ajaxResult.data);
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
}, 500);

return false;
});

//위로 :top btn
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});