$(function(event) {
  $.get(serverRoot + '/deal/list.json', function(ajaxResult) {
    if (ajaxResult.status == "success") {
      var list = ajaxResult.data;
      var div = $('.deal-container > .deal-area');

      var template = Handlebars.compile($('#trTemplate').html());
      div.html(template({"list":list}));

      $('.deal-box').click(function(event) {
        event.preventDefault();
        location.href = 'deal-detail.html?purchaseNo=' + $(this).attr("data-no");
      });

      return;
    }
    alert(ajaxResult.data);
  }, 'json');
})



//퍼센트 그래프
$(document).ready(function(){
  $('.percentbar').each(function(){
  	var percentage = $(this).attr('data-percent');
  	console.log(percentage);
    $(this).find('.percentbar-bar').animate({ width:percentage },1000);
  });
});
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