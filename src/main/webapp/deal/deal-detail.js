// db 불러오기
try {
  var purchaseNo = location.href.split('?')[1].split('=')[1];
  var users = window.sessionStorage.getItem('user');
  var IMP = window.IMP;
  IMP.init('imp59301576');
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
/*var QuantityBox = React.createClass({
  getInitialState: function() {
    return { value: 1 };
  },
  onDecrement: function(e) {
    if (this.state.value <= 0) return;
    this.setState({value: --this.state.value});
  },
  onIncrement: function(e) {
    this.setState({value: ++this.state.value});
  },    
  render: function() {
	  var html = document.createElement("div");
	  html.addClassName("qty-box");
	  html.append('<span className="dec" onClick={this.onDecrement} onTouchStart={this.onDecrement}>–</span>');
	  html.append('<span className="qty">{this.state.value}</span>');
	  html.append('<span className="inc" onClick={this.onIncrement} onTouchStart={this.onIncrement}>+</span>');
    return html;
  }
});
React.render("<QuantityBox />", document.body);*/

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
	IMP.request_pay({
		pg : 'kakao',
		pay_method : 'card',
		merchant_uid : 'merchant_' + new Date().getTime(),
		name : '주문명:결제테스트',
		amount : 100,
		buyer_email : JSON.parse(users).email,
		buyer_name : JSON.parse(users).name,
		buyer_tel : JSON.parse(users).tel,
		buyer_addr : JSON.parse(users).basicAddress + " " + JSON.parse(users).detailAddress,
		buyer_postcode : JSON.parse(users).postcode
	}, function(rsp) {
		if ( rsp.success ) {
	        var msg = '결제가 완료되었습니다.';
	        msg += '고유ID : ' + rsp.imp_uid;
	        msg += '상점 거래ID : ' + rsp.merchant_uid;
	        msg += '결제 금액 : ' + rsp.paid_amount;
	        msg += '카드 승인번호 : ' + rsp.apply_num;
	    } else {
	        var msg = '결제에 실패하였습니다.';
	        msg += '에러내용 : ' + rsp.error_msg;
	    }
		alertify.alert(msg);
	});
});
