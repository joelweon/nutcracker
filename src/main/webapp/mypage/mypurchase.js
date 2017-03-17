var users = window.sessionStorage.getItem('user');
var memberNo = JSON.parse(users).memberNo;
var purchaseNo;

// 리스트 및 팝업 출력
$(function(e) {
	$.get(serverRoot + '/mypage/myPurchseHistory.json', 'memberNo='+memberNo, function(ajaxResult) {
		var list = ajaxResult.data;
		for (var i=0; i<list.length; i++) {
			buttonAfterReview(list[i].purchaseNo);
		}
		// 구매 리스트
		var tbody = $('.purchase-table > tbody');
    var template = Handlebars.compile($('#trTemplate').html());
    tbody.html(template({"list":list}));
    // 작성 버튼 클릭
    $(".review-btn").click(function() {
    	$('#hugi').removeClass('active');
    	purchaseNo = $(this).attr("data-no");
    	$.get(serverRoot + '/deal/detail.json', {purchaseNo}, function(ajaxResult) {
    		$('.purchase-image > img').attr('src', serverRoot+'/upload/deal/'+ajaxResult.data.photoList.photoPath);
    		$('.purchase-title').text(ajaxResult.data.title);
    		$('.purchase-percent > div').text(ajaxResult.data.percent+" %");
    		$('.purchase-delivery > div').text(ajaxResult.data.deliveryDate);
    		$(".mask").addClass("active");
    	});
    });
    // 모달 닫기
    $(".close").click(function(){
    	closeModal();
    });
    $(document).keyup(function(e) {
    	if (e.keyCode == 27) {closeModal();}
    });
	});
});

// 후기 5자 이하일 경우 버튼 비활성화
$('#textarea').keyup(function() {
	if ($('#textarea').val().length >= 5) {
		$('#hugi').addClass('active');
		$('#hugi').removeAttr('disabled');
	} else {
		$('#hugi').removeClass('active');
		$('#hugi').attr('disabled','disabled');
	}
});

//구매 후기 등록
$('.purchase-review-button').click(function() {
	var param ={
		memberNo : memberNo,
		content : $('#textarea').val(),
		purchaseNo : purchaseNo
	};
	buttonAfterReview(purchaseNo);
	$.post(serverRoot+'/comment/purchasecommentadd.json',param,function() {
		buttonAfterReview(purchaseNo);
		alertify.alert("구매 후기가 등록되었습니다.");
		closeModal();
	});
});

// 구매 등록 후 버튼 변경
var buttonAfterReview = function(purchaseNo) {
	$.get(serverRoot+'/comment/productcomments.json', {purchaseNo}, function(AjaxResult) {
		if (AjaxResult.data.length > 0) {
			$('#writeBtn_'+purchaseNo).css('display','none');
			$('#completeBtn_'+purchaseNo).css('display','inline-block');
			$('#completeBtn_'+purchaseNo+' .review-btn-completed').css('display','inline-block');
		} else {
			$('#writeBtn_'+purchaseNo).css('display','inline-block');
			$('#completeBtn_'+purchaseNo).css('display','none');
			$('#completeBtn_'+purchaseNo+' .review-btn-completed').css('display','none');
		}
	});
};

var closeModal =function() {
	$(".mask").removeClass("active");
	$('#textarea').val("");
};

$(document).on('click', '.detail-togle', function() {
	$(".my-top-detail").toggle("1000");
});
