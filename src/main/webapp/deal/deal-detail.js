// db 불러오기
try {
  var purchaseNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	console.log(error);
}

$(function() {
	$.post(serverRoot + '/deal/detail.json', 'purchaseNo='+purchaseNo, function(ajaxResult) {
		$('.deal-detail-img > img').attr('src', clientRoot+"/upload/deal/"+ajaxResult.data.photoList.photoPath);
		$('.deal-detail-title > span').text(ajaxResult.data.title);
		$('.deal-detail-info-cont-price').text(ajaxResult.data.price+" 원");
		$('.deal-detail-info-cont-rest').text(ajaxResult.data.rest+" 일");
		$('.deal-detail-info-cont-total').text(ajaxResult.data.totalCount+" 명");
		$('.deal-detail-info-cont-applicant').text(ajaxResult.data.applicantCount+" 명");
		var photo = ajaxResult.data.photoList;
		console.log(photo);
	});
});

//퍼센트 그래프
$('.percentbar').each(function(){
  var percentage = $(this).attr('data-percent');
  $(this).find('.percentbar-bar').animate({ width:percentage },1000);
});

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
