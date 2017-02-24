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
      	$('#profile-img').attr('src', clientRoot+'/images/user/'+ajaxResult.data.photoPath);
      	$('#profile-img-big').attr('src', clientRoot+'/images/user/'+ajaxResult.data.photoPath);
      } else { //카카오계정으로 로그인한 경우
      	$('#profile-img').attr('src', ajaxResult.data.photoUrl);
      	$('#profile-img-big').attr('src', ajaxResult.data.photoUrl);
      }
      $('#user-name').text(ajaxResult.data.name);
      $('#user-email').text(ajaxResult.data.email);
      
      // 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
      /*$('#btn-logout').click(function(event) {*/
      $('#btn-logout').click(function(event) {
        event.preventDefault();
        $.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
          location.href = clientRoot + '/main.html';
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