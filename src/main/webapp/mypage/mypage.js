$(document).ready(function() {
  $('#wrap-mytop').load(clientRoot + '/mypage/mytop.html');
  $('#wrap-myside').load(clientRoot + '/mypage/myside.html');
});

$(document).on('click', '.detail-togle', function() {
  $(".my-top-detail").toggle("1000");
});

