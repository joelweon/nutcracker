/*$('#btn-login').click(function() {

  
}); // click()

*/
document.querySelector('#btn-login').addEventListener('click',login);
document.querySelector('#email').addEventListener('keypress', function (e) {
  enter(e);
});
document.querySelector('#password').addEventListener('keypress', function (e) {
  enter(e);
});
function enter(e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    login();
  }
}
function login() {
  var backURL = document.referrer;
  console.log('[backURL]: ' + backURL);
  var param = {
      email: $('#email').val(),
      password: $('#password').val(),
    };
    $.post(serverRoot + '/auth/login.json', param, function(ajaxResult) {
      if (ajaxResult.status == "success") {
        console.log("[login check]");
        console.log(ajaxResult.data);
        window.sessionStorage.setItem('user', JSON.stringify(ajaxResult.data));
        
        /*history.back();
        window.location.replace(document.referrer)*/
        location.href = backURL;
        return;
      }
      alertify.alert(ajaxResult.data);
    }, 'json');
}

