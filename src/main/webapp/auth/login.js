$('#btn-login').click(function() {
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
  
}); // click()