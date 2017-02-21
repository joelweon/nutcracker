/* ------------------
 * html 가져오기
 ------------------*/
$(document).ready(function() {
  $('#wrap-header').load('./header.html');
  $('#wrap-hidden').load('./hidden.html');
  $('#div-intro').load('./intro.html');
  $('#wrap-footer').load('./footer.html');
  //로그인, 회원가입 창에서는 header.js 로딩하지 않음
  if(location.href.indexOf('login') != -1 ||
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