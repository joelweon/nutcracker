document.querySelector('#re-login').addEventListener('click',reLogin);
document.querySelector('#re-password').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    reLogin();
  }
});
function reLogin() { 
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