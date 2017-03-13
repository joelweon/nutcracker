// db 불러오기
try {
  var purchaseNo = location.href.split('?')[1].split('=')[1];
  var users = window.sessionStorage.getItem('user');
  var IMP = window.IMP;
  var getDetail;
  IMP.init('imp59301576');
} catch (error) {
	console.log(error);
}

$(function() {
	$.post(serverRoot + '/deal/detail.json', 'purchaseNo='+purchaseNo, function(ajaxResult) {
		getDetail = ajaxResult.data;
		$('.deal-detail-img > img').attr('src', clientRoot+"/upload/deal/"+ajaxResult.data.photoList.photoPath);
		$('.deal-detail-title > span').text(ajaxResult.data.title);
		$('.deal-detail-info-cont-price').text(ajaxResult.data.price+" 원");
		$('.deal-detail-info-cont-rest').text(ajaxResult.data.rest+" 일");
		$('.deal-detail-info-cont-total').text(ajaxResult.data.totalCount+" 명");
		$('.deal-detail-info-cont-applicant').text(ajaxResult.data.applicantCount+" 명");
		$('.percentbar').attr('data-percent', ajaxResult.data.percent+"%");
		$('.percentbar .percentbar-text').text(ajaxResult.data.percent+"%");

		//퍼센트 그래프
		$('.percentbar').each(function(){
		  var percentage = $(this).attr('data-percent');
		  if (ajaxResult.data.percent < 50) {
		  	$(this).find('.percentbar-bar').css("background-color","rgb(255,0,0)");
		  } else {
		  	$(this).find('.percentbar-bar').css("background-color","rgb(0,128,64)");
		  }
		  $(this).find('.percentbar-bar').animate({ width:percentage },1000);
		});
		
		// 상세정보 이미지 불러오기
		var div = $('.deal-detail-img-list:last-child');
		var template = Handlebars.compile($('#imgTemplate').html());
		var imgList = ajaxResult.data.photo;
		div.html(template({"imgList":imgList}));
	});
});

// 댓글 불러오기
$(function() {
  $.post(serverRoot + '/comment/productcomments.json', 'purchaseNo='+purchaseNo, function(ajaxResult) {
    var cmtList = ajaxResult.data;
    if (cmtList.legth < 1) {
      return;
    } else {
      var div = $('.reply-list-area:last-child');
      var template = Handlebars.compile($('#divTemplate').html());
      div.html(template({"list":cmtList}));
      return;
    }
  }, 'json');
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

//구매 수량 선택
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('#product-quantity input');
jQuery('#product-quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');
  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
      alertify.alert("1인 최대 구매 가능수량은 10개입니다.");
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
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

//카카오페이
$('#purchase-btn').click(function() {
	if (users != null) { //유저정보가 있는 경우
		IMP.request_pay({
			pg : 'kakao',
			pay_method : 'card',
			merchant_uid : 'merchant_' + new Date().getTime(),
			name : getDetail.title,
			amount : getDetail.price * $("#product-quantity input").val(),
			buyer_email : JSON.parse(users).email,
			buyer_name : JSON.parse(users).name,
			buyer_tel : JSON.parse(users).tel,
			buyer_addr : JSON.parse(users).basicAddress + " " + JSON.parse(users).detailAddress,
			buyer_postcode : JSON.parse(users).postcode
		}, function(rsp) {
			if ( rsp.success ) {
				jQuery.ajax({
					url: serverRoot + "/mypage/myPurchseHistoryAdd.json", //cross-domain error가 발생하지 않도록 동일한 도메인으로 전송
					type: 'POST',
					dataType: 'json',
					data: {
						memberNo : JSON.parse(users).memberNo,
						purchaseNo : purchaseNo,
						quantity : $("#product-quantity input").val(),
						imp_uid : rsp.imp_uid,
						purchaseDate : rsp.paid_at, //결제 승인 시각
						receipt : rsp.receipt_url // 거래 매출 전표 URL
						//기타 필요한 데이터가 있으면 추가 전달
					}
				}).done(function(data) {
					//[2] 서버에서 REST API로 결제정보확인 및 서비스루틴이 정상적인 경우
					/*if (data) {*/
					var msg = '결제가 완료되었습니다.';
					msg += '<br>나의 구매내역으로 이동하시겠습니까?'
						alertify.confirm(msg, function (e) {
							if (e) {
								location.href = serverRoot+'/mypage/mypurchase.html';
							} else {
								location.href = serverRoot+'/deal/deal.html';
							}
						});
					/*} else {
        	alertify.alert("결제 실패");
          //[3] 아직 제대로 결제가 되지 않았습니다.
          //[4] 결제된 금액이 요청한 금액과 달라 결제를 자동취소처리하였습니다.
        }*/
				});
			} else {
				var msg = rsp.error_msg;
				alertify.alert(msg);
			}
		});
	} else { //유저정보가 없는 경우
		alertify.confirm("로그인 후 이용 가능합니다. 로그인하시겠습니까?", function (e) {
      if (e) {location.href = serverRoot+'/auth/login.html';}
      else {}
    });
	}
});
