$('#btn-n').click(function() {
  var param = {
    email: $('#email').val(),
    password: $('#password').val(),
  };
  alert($('#email').val());
  $.post('login.json', param, function(ajaxResult) {
    if (ajaxResult.status == "success") {
      location.href = "../html/main.html"; 
      return;
    }
    alert(ajaxResult.data);
  }, 'json');
  
}); // click()