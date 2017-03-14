jQuery(function() {
  $('#wrap-mytop').load(clientRoot + '/mypage/mytop.html');
  $('#wrap-myside').load(clientRoot + '/mypage/myside.html');
});

//로그인된 회원(member) 정보 불러오기
$(document).ready(function() {
  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
  	$('#profile-photo').attr('src', clientRoot+'/images/user/'+ajaxResult.data.photoPath);
  	$('#profile-name').text(ajaxResult.data.name);
  	$('#re-email').attr('placeholder', ajaxResult.data.email);
  	$('#re-email').attr('value', ajaxResult.data.email);
  	return ajaxResult;
  });
});

//활동내역 보기
$(document).on('click', '.detail-togle', function() {
  $(".my-top-detail").toggle("1000");
});

//마이페이지 리로그인 클릭 이벤트 -> user 정보 가져오기
/*$("#re-login").click(function() {
	var param = {
	    email: $('#re-email').val(),
	    password: $('#re-password').val(),
	  };
	$.getJSON(serverRoot + '/user/detail.json', param, function(ajaxResult) {
		location.href = clientRoot + "/mypage/mydetail.html";
  });
});*/
$('#re-login').click(reLogin);
$('#re-password').keypress(function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    reLogin();
  }
});
var reLogin = function() { 
  var param = {
      email: $('#re-email').val(),
      password: $('#re-password').val(),
    };

  $.post(serverRoot + '/user/detail.json',param,function(ajaxResult) {
    if (ajaxResult.status == "success") {
      location.href = clientRoot + "/mypage/mydetail.html"; 
      return;
    }
    alertify.alert(ajaxResult.data);
  }, 'json');
};
