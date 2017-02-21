/* ------------------
 * html 가져오기
 ------------------*/
$(document).ready(function() {
  /*$('#wrap-header').load('./header.html');*/
  $.get('./header.html', function(result) {
    // 서버에서 로그인 사용자 정보를 가져온다.
    $.getJSON('../auth/loginUser.json', function(ajaxResult) {
      $('#wrap-header').html(result);

      if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
        // 로그온 상태 출력 창을 감춘다.
        $('#btn-logout').css('display', 'none');
      
        // 로그인 버튼의 클릭 이벤트 핸들러 등록하기
        $('#btn-login').click(function(event) {
          event.preventDefault();
          location.href = '../auth/main.html';
        });
        return;
      }
      // 로그인 되었으면 로그오프 출력 창을 감춘다.
      $('#btn-login').css('display', 'none');
      /*$('#logon-div img').attr('src', '../upload/' + ajaxResult.data.photoPath);
      $('#logon-div span').text(ajaxResult.data.name);*/
      
      // 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
      $('#btn-logout').click(function(event) {
        event.preventDefault();
        $.getJSON('../auth/logout.json', function(ajaxResult) {
          location.href = '../auth/main.html';
        });
      });
    });
  });
  $('#wrap-hidden').load('./hidden.html');
  $('#div-intro').load('./intro.html');
  $('#wrap-footer').load('./footer.html');
  //로그인, 회원가입 창에서는 header.js 로딩하지 않음
  if(location.href.indexOf('auth') != -1 ||
      location.href.indexOf('join') != -1) {
    /*console.log("로그인임");*/
  } else {
    /*console.log("로그인 아님");*/
    addJavascript('../js/header.js');
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