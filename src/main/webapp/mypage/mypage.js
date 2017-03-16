jQuery(function() {
  $('#wrap-mytop').load(clientRoot + '/mypage/mytop.html');
  $('#wrap-myside').load(clientRoot + '/mypage/myside.html');
});

//로그인된 회원(member) 정보 불러오기
$(document).ready(function() {
  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
  	$('#re-email').attr('placeholder', ajaxResult.data.email);
  	$('#re-email').attr('value', ajaxResult.data.email);
  	return ajaxResult;
  });
});

//활동내역 보기
$(document).on('click', '.detail-togle', function() {
  $(".my-top-detail").toggle("1000");
});
