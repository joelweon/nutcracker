/* ------------------
 * html 가져오기
 ------------------*/
$(document).ready(function() {
  /*$('#wrap-header').load('./header.html');*/
  $.get(clientRoot + '/header.html', function(result) {
    // 서버에서 로그인 사용자 정보를 가져온다.
    $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
      $('#wrap-header').html(result);

      if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
        // 로그온 상태 출력 창을 감춘다.
        /*$('#btn-logout').css('display', 'none');*/
        $('#btn-member').css('display', 'none');
      
        // 로그인 버튼의 클릭 이벤트 핸들러 등록하기
        $('#btn-login').click(function(event) {
          event.preventDefault();
          location.href = clientRoot + '/auth/login.html';
        });
        return;
      }
      // 로그인 되었으면 로그오프 출력 창을 감춘다.
      $('#btn-login').css('display', 'none');
      if (ajaxResult.data.photoUrl == null) { //일반계정으로 로그인한 경우
      	$('#profile-img').attr('src', serverRoot+'/upload/profile/thumb/'+ajaxResult.data.photoPath);
      	$('#profile-img-big').attr('src', serverRoot+'/upload/profile/thumb/'+ajaxResult.data.photoPath);
      } else { //sns계정으로 로그인한 경우
      	$('#profile-img').attr('src', ajaxResult.data.photoUrl);
      	$('#profile-img-big').attr('src', ajaxResult.data.photoUrl);
      }
      $('#user-name').text(ajaxResult.data.name);
      $('#user-email').text(ajaxResult.data.email);
      
      // 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
      /*$('#btn-logout').click(function(event) {*/
      $('#btn-logout').click(function(event) {
        event.preventDefault();
        window.sessionStorage.removeItem('user');
        $.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
          location.reload();
          return;
        });
      });
      
      // 마이페이지 버튼의 클릭 이벤트 등록
      $('#btn-go-mypage').click(function(event) {
      	event.preventDefault();
      	$.getJSON(serverRoot + '/user/detail.json', function(ajaxResult) {
          location.href = clientRoot + '/mypage/mypage.html';
        });
      });
    });
    
  });
  $('#wrap-hidden').load(clientRoot + '/hidden.html');
  $('#div-intro').load(clientRoot + '/intro.html');
  $('#wrap-footer').load(clientRoot + '/footer.html');
  //로그인, 회원가입 창에서는 header.js 로딩하지 않음
  if(location.href.indexOf('auth') != -1 ||
      location.href.indexOf('join') != -1) {
    /*console.log("로그인임");*/
  } else {
    /*console.log("로그인 아님");*/
    addJavascript(serverRoot + '/js/header.js');
  }
});

function addJavascript(jsname) {
  var th = document.getElementsByTagName('head')[0];
  var s = document.createElement('script');
  s.setAttribute('type','text/javascript');
  s.setAttribute('src',jsname);
  th.appendChild(s);
}
/*-----------------------------
 * 메인 JavaScript
 -----------------------------*/

//불매 불량 바로가기
function fnMove(seq){
    var offset = $("#title-bar-" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
};

/* 유저 정보 갖고오기 */
var users = window.sessionStorage.getItem('user');


/* 프로필 사진 변경 */
function readUploadImage( inputObject ) {
  /* 브라우저에서 FileReader가 지원되는지
     확인하기 위해 
     window.File && window.FileReader 해 본다. */
  
  if ( window.File && window.FileReader ) {
    /*
    입력된 파일이 1개 이상 있는지 확인~
    */
    if ( inputObject.files && inputObject.files[0]) {

      /* 이미지 파일인지도 체크 */
      if ( !(/image/i).test(inputObject.files[0].type ) ){
        alert("이미지 파일을 선택해 주세요!");
        return false;
      }
      /* FileReader 를 준비 한다. */
      var reader = new FileReader();
      /* 썸네일 사진 업로드 */
      reader.onload = function (e) {
        var dataURL = e.target.result;//data:image/png;base64,iVBORw
        var blob = dataURItoBlob(dataURL);
        uploadImage(blob);
      }
      
      /* input file에 있는 파일 하나를 읽어온다. */
      reader.readAsDataURL(inputObject.files[0]);
    }

  } else {
    alert( "미리보기 지원하지 않습니다. 브라우저를 업그레이드하세요.");
  }
}

  function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
    } else {
        byteString = unescape(dataURI.split(',')[1]);
    }

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
  }

  function uploadImage(image) {
    var IMAGE_PATH = serverRoot + '/upload/profile/';

    var data = new FormData(); 
    data.append("image",image);
    $.ajax ({
      async: false,
      data: data,
      dataType : "json",
      type: "POST",
      url: serverRoot + "/user/profileUpload.json",
      cache: false,
      contentType: false,
      processData: false,
      success: function(ajaxResult) {
        thumbnail = ajaxResult.data;
        console.log("성공: " + thumbnail);
        doUpdate(thumbnail);
      },
      error: function(result) {
        console.log("실패: " + result);
      }
    });
  }
  
  function doUpdate(thumbnail) {
    var param = {
        memberNo: JSON.parse(users).memberNo,
        photoPath: thumbnail+".png"
    };
    $.ajax({
      url: serverRoot + '/user/updateProfile.json',
      method: 'post',
      dataType: 'json',
      data: JSON.stringify(param),
      contentType: "application/json; charset=UTF-8",
      timeout: 40000,
      success: function(ajaxResult) {
        $('#profile-img').attr('src', serverRoot+'/upload/profile/thumb/'+ param.photoPath);
        $('#profile-img-big').attr('src', serverRoot+'/upload/profile/thumb/'+ param.photoPath);
        window.sessionStorage.setItem('user', JSON.stringify(ajaxResult.data));
        return;
        /*$.post(serverRoot + '/auth/user.json', {memberNo: JSON.parse(users).memberNo}, function(ajaxResult) {
          console.log(ajaxResult);
            window.sessionStorage.setItem('user', JSON.stringify(ajaxResult.data));
            return;
          });*/
      }
    });
  }
