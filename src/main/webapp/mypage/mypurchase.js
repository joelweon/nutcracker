var users = window.sessionStorage.getItem('user');
var memberNo = JSON.parse(users).memberNo;

$(function(e) {
	$.get(serverRoot + '/mypage/myPurchseHistory.json', 'memberNo='+memberNo, function(ajaxResult) {
		var list = ajaxResult.data;
		// 구매 리스트
		var tbody = $('.purchase-table > tbody');
    var template = Handlebars.compile($('#trTemplate').html());
    tbody.html(template({"list":list}));
    // 구매 후기
    var modal = $('.modal-div');
    var templateForModal = Handlebars.compile($('#modalTemplate').html());
    modal.html(templateForModal({"listForModal":list}));
    // 작성 버튼 클릭
    $(".review-btn").click(function() {
    	$(".mask").addClass("active");
    });
    // 마스크 끝내기
    $(".close, .mask").click(function(){
    	closeModal();
    });
    $(document).keyup(function(e) {
    	if (e.keyCode == 27) {
    		closeModal();
    	}
    });
    var closeModal =function() {
    	$(".mask").removeClass("active");
    };
	});
});
