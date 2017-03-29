/*jQuery(function() {
  $('#wrap-mytop').load(clientRoot + '/mypage/mytop.html');
  $('#wrap-myside').load(clientRoot + '/mypage/myside.html');
});*/

//로그인된 회원(member) 정보 불러오기
$(document).ready(function() {
  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    /*if (ajaxResult.status != 'success') {
      location.href=clientRoot + '/main.html';
    }*/
  	$('#re-email').attr('placeholder', ajaxResult.data.email);
  	$('#re-email').attr('value', ajaxResult.data.email);
    if ("admin@test.com" == ajaxResult.data.email) {
      $('#wrap-myside').load(clientRoot + '/mypage/adminside.html');
    } else {
      $('#wrap-myside').load(clientRoot + '/mypage/myside.html');
    }
    //$('#wrap-mytop').load(clientRoot + '/mypage/mytop.html');
  	//return ajaxResult;
  });
});

// 사이드메뉴 세팅
setTimeout(function () {
  setSideMenu(); 
}, 300);

//활동내역 보기
$(document).on('click', '.detail-togle', function() {
  $(".my-top-detail").toggle("1000");
});

function setSideMenu(){
  var page = new Array;
  page[0] = "mypage.html";
  page[1] = "myboycott.html";
  page[2] = "mypurchase.html";
  page[3] = "mywish.html";
  page[4] = "myboard.html";
  page[5] = "deleteboard.html";
  page[6] = "admincomment.html";
  page[7] = "admincompany.html";
  page[8] = "adminmember.html";
  var url = location.href;
  console.log(location.href);
  var getAr0 = url.indexOf(page[0]);
  var getAr1 = url.indexOf(page[1]);
  var getAr2 = url.indexOf(page[2]);
  var getAr3 = url.indexOf(page[3]);
  var getAr4 = url.indexOf(page[4]);
  var getAr5 = url.indexOf(page[5]);
  var getAr6 = url.indexOf(page[6]);
  var getAr7 = url.indexOf(page[7]);
  var getAr8 = url.indexOf(page[8]);
  if (getAr0 != -1){ //mypage
    $('li#side-member').addClass('selected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr1 != -1) { //myboycott
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('selected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr2 != -1) { //mypurchase
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('selected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr3 != -1) { //mywish
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('selected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr4 != -1) { //myboard(user)
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('selected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('selected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr5 != -1) { //deleteboard(admin)
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('selected');
    $('li#side-boardDel').addClass('selected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr6 != -1) { //admincomment(admin)
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('selected');
    $('li#side-commentRep').addClass('selected');
  } else if (getAr7 != -1) { //admincompany(admin)
    $('li#side-member').addClass('unselected');
    $('li#side-boycott').addClass('selected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  } else if (getAr8 != -1) { //adminmember(admin)
    $('li#side-member').addClass('selected');
    $('li#side-boycott').addClass('unselected');
    $('li#side-purchase').addClass('unselected');
    $('li#side-wish').addClass('unselected');
    $('li#side-myboard').addClass('unselected');
    $('li#side-boardDel').addClass('unselected');
    $('li#side-boardRep').addClass('unselected');
    $('li#side-comment').addClass('unselected');
    $('li#side-commentRep').addClass('unselected');
  }
}
