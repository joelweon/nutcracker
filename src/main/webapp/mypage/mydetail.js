/*try {
  var memberNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
  var memberNo = -1;
}

if (memberNo > 0) {
  prepareViewForm();
} else {
  prepareNewForm();
}*/
  var users = window.sessionStorage.getItem('user');
    $('#user-email').val(JSON.parse(users).email);
    $('#user-name').val(JSON.parse(users).name);
    $('#user-tel').val(JSON.parse(users).tel);
    $('#postcode').val(JSON.parse(users).postcode);
    $('#address').val(JSON.parse(users).basicAddress);
    $('#address2').val(JSON.parse(users).detailAddress);
    $('#user-job select').val(JSON.parse(users).job);
    
    $('#user-email').attr('readOnly', '');
    
/*    if (status != "success") {
      alert(ajaxResult.data);
      return;
    }*/

  // 삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
/*  $('#delete-btn').click(function() {
    $.getJSON('delete.json?memberNo=' + memberNo, function(ajaxResult) {
      if (ajaxResult.status != "success") { 
        alert(ajaxResult.data);
        return;
      }
      location.href = 'main.html';
    }); // getJSON()
  }); // click()
*/  
/*  $('#update-btn').click(function() {
      var param = {
        "memberNo": memberNo, 
        "name": $('#name').val(),
        "tel": $('#tel').val(),
        "email": $('#email').val(),
        "password": $('#password').val(),
        "working": $('#working').is(':checked'),
        "grade": $('#grade').val(),
        "schoolName": $('#school-name').val()
      };
      
      $.post('update.json', param, function(ajaxResult) {
        if (ajaxResult.status != "success") {
          alert(ajaxResult.data);
          return;
        }
        location.href = 'main.html';
      }, 'json');
      
  }); // click()
*/  

/*function prepareNewForm() {
  // 변경,삭제 버튼을 감춘다.
    $('.view-form').css('display', 'none');
  
    $('#add-btn').click(function() {
      var param = {
        "name": $('#name').val(),
        "tel": $('#tel').val(),
        "email": $('#email').val(),
        "password": $('#password').val(),
        "working": $('#working').is(':checked'),
        "grade": $('#grade').val(),
        "schoolName": $('#school-name').val()
      };
      
      $.post('add.json', param, function(ajaxResult) {
          if (ajaxResult.status != "success") {
            alert(ajaxResult.data);
            return;
          }
          location.href = 'main.html';
      }, 'json'); // post();
      
  }); // click()
}*/






