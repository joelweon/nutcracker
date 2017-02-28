  var users = window.sessionStorage.getItem('user');
    $('#user-email-update').val(JSON.parse(users).email);
    $('#user-name-update').val(JSON.parse(users).name);
    $('#tel').val((JSON.parse(users).tel).substring(0,3));
    $('#user-tel').val((JSON.parse(users).tel).substring(3,11));
    $('#postcode').val(JSON.parse(users).postcode);
    $('#address').val(JSON.parse(users).basicAddress);
    $('#address2').val(JSON.parse(users).detailAddress);
    $('#user-job').val(JSON.parse(users).job);
    $('#user-email-update').attr('readOnly', '');

    //업데이트 클릭
  $('#user-update-btn').click(function() {
    if(!checkName()) {
      return;
    };
    if (!checkPassword()) {
      return;
    };
    if (!checkTel()) {
      return;
    }
    //비밀번호 확인 검사
    if ($('#user-password-new').val() != $('#user-password-new-check').val()) {
      alert('비밀번호를 확인해주세요.');
      return;
    }

      var param = {
        "memberNo": JSON.parse(users).memberNo, 
        "email": $('#user-email-update').val(),
        "password": $('#user-password-new').val(),
        "name": $('#user-name-update').val(),
        "tel": $('#tel').val() + $('#user-tel').val(),
        "postcode": $('#postcode').val(),
        "basicAddress": $('#address').val(),
        "detailAddress": $('#address2').val(),
        "job": $('#user-job').val()
      };
      console.log($('#tel').val() + $('#user-tel').val());

      $.post(serverRoot + '/user/update.json', param, function(ajaxResult) {
        if (ajaxResult.status != "success") {
          alert(ajaxResult.data);
          return;
        }
        location.href = serverRoot + '/main.html';
      }, 'json');
  }); // click()


  // 닉네임 2자 유효성검사
  function checkName() {
    var elName = document.getElementById('user-name-update');
    if (elName.value.length < 2) {
      alert('닉네임은 2자 이상이여야 합니다.');
      return false;
    } else {
      return true;
    }
  }
  // 패스워드 6자 유효성검사
  function checkPassword() {
    var elPassword = document.getElementById('user-password-new');
    if (elPassword.value.length < 6 || elPassword.value.length > 16) {
      alert('비밀번호는 6글자 이상 16자 이하여야 합니다.');
      return false;
    } else {
      return true;
    }
  }
  // 연락처 6자 유효성검사
  function checkTel() {
    var re = /^[0-9]+$/;
    var elTel = document.getElementById('user-tel');
    if (elTel.value.length < 7 || elTel.value.length > 8 || !re.test(elTel.value)) {
      alert('올바른 연락처를 입력해주세요.');
      return false;
    } else {
      return true;
    }
  }
