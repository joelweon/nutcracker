$('#btn-login').click(function() {
  var param = {
    email: $('#email').val(),
    password: $('#password').val(),
  };
  $.post('login.json', param, function(ajaxResult) {
    console.log("로긴성공");
    if (ajaxResult.status == "success") {
      location.href = "../html/main.html"; 
      return;
    }
    alert(ajaxResult.data);
  }, 'json');
  
}); // click()