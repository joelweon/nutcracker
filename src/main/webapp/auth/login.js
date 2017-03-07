/*$('#btn-login').click(function() {

  
}); // click()

*/
document.querySelector('#btn-login').addEventListener('click',login);
document.querySelector('#password').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      login();
    }
});
function login() {
  var param = {
      email: $('#email').val(),
      password: $('#password').val(),
    };
    $.post(serverRoot + '/auth/login.json', param, function(ajaxResult) {
      if (ajaxResult.status == "success") {
        window.sessionStorage.setItem('user', JSON.stringify(ajaxResult.data));
        location.href = clientRoot + "/main.html"; 
        return;
      }
      alert(ajaxResult.data);
    }, 'json');
}