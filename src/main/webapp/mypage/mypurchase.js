var users = window.sessionStorage.getItem('user');
var memberNo = JSON.parse(users).memberNo;

$(function() {
	$.get(serverRoot + '/mypage/myPurchseHistory.json', 'memberNo='+memberNo, function(ajaxResult) {
		var list = ajaxResult.data;
		var tbody = $('.purchase-table > tbody');
    var template = Handlebars.compile($('#trTemplate').html());
    tbody.html(template({"list":list}));
	});
});
