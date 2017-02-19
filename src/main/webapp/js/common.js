/* ------------------
 * html 가져오기
 ------------------*/
$(document).ready(function() {
  $('#wrap-header').load('./header.html');
  $('#div-intro').load('./intro.html');
  $('#wrap-footer').load('./footer.html');
  addJavascript('../js/header.js');
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