$('#btn-login').click(function() {
  var param = {
    email: $('#email').val(),
    password: $('#password').val(),
  };
  $.post(serverRoot + '/auth/login.json', param, function(ajaxResult) {
    if (ajaxResult.status == "success") {
      location.href = clientRoot + "/main.html"; 
      return;
    }
    alert(ajaxResult.data);
  }, 'json');
  
}); // click()