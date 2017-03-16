var users = window.sessionStorage.getItem('user');
var memberNo = JSON.parse(users).memberNo;
var purchaseNo;

// 리스트 및 팝업 출력
$(function(e) {
	$.get(serverRoot + '/mypage/myPurchseHistory.json', 'memberNo='+memberNo, function(ajaxResult) {
		if(ajaxResult.status != 'success') { console.log('myPurchseHistory.fail'); return; }
		var list = ajaxResult.data;
		// 구매 리스트
		var tbody = $('.purchase-table > tbody');
    var template = Handlebars.compile($('#trTemplate').html());
    tbody.html(template({"list":list}));
    // 작성 버튼 클릭
    $(".review-btn").click(function() {
    	purchaseNo = $(this).attr("data-no");
    	$.get(serverRoot + '/deal/detail.json', {purchaseNo}, function(ajaxResult) {
    		if (ajaxResult.status != 'success') { console.log('detail.fail'); return; }
    		$('.purchase-image > img').attr('src', serverRoot+'/upload/deal/'+ajaxResult.data.photoList.photoPath);
    		$('.purchase-title').text(ajaxResult.data.title);
    		$('.purchase-percent > div').text(ajaxResult.data.percent+" %");
    		$('.purchase-delivery > div').text(ajaxResult.data.deliveryDate);
    		$(".mask").addClass("active");
    	});
    });
    // 마스크 끝내기
    $(".close").click(function(){
    	closeModal();
    });
    $(document).keyup(function(e) {
    	if (e.keyCode == 27) {closeModal();}
    });
	});
});

//구매 후기 등록
$('.purchase-review-button').click(function() {
	var param ={
		memberNo : memberNo,
		content : $('#textarea').val(),
		purchaseNo : purchaseNo
	};
	$.post(serverRoot+'/comment/purchasecommentadd.json',param,function() {
		$('#textarea').val("");
		closeModal();
	});
});

var closeModal =function() {
	$(".mask").removeClass("active");
};



