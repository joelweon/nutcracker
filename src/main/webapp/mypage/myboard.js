// 처음에는 1페이지 10개를 로딩한다.
try {
  var params = location.href.split('?')[1];
  var curPageNo = params.split('&')[0].split('=')[1];
} catch (error) {
  var curPageNo = 1; // 현재페이지
}
var pageSize = 10; // 한 페이지에 보여줄 글 갯수
var pageGpSize = 5; // 페이지그룹 크기
var pRCnt = parseInt(curPageNo / pageGpSize); // 페이지그룹 번호
var maxPageNo; // 총 페이지 수


loadList(curPageNo, pageSize);
// 버튼 이벤트 등록
$('#prevPgBtn').click(function() {
  event.preventDefault();
  //loadList(--curPageNo, pageSize);
  location.href = clientRoot + '/mypage/myboard.html?pageNo=' + --curPageNo + '&pageSize=' + pageSize;
});
$('#nextPgBtn').click(function() {
  event.preventDefault();
  //loadList(++curPageNo, pageSize);
  location.href = clientRoot + '/mypage/myboard.html?pageNo=' + ++curPageNo + '&pageSize=' + pageSize;
});
$('.pgBtn > a').click(function() {
  event.preventDefault();
  location.href = clientRoot + '/mypage/myboard.html?pageNo=' + $(this).text() + '&pageSize=' + pageSize;
  //loadList(curPageNo = $(this).text(), pageSize);
});

//로그인된 회원(member) 정보 불러오기
function loadList(pageNo, pageSize) {
  var users = window.sessionStorage.getItem('user');
  
  $.get(serverRoot + '/mypage/myboard.json', {
    "pageNo" : pageNo,
    "pageSize" : pageSize,
    "memberNo" : JSON.parse(users).memberNo}, function(ajaxResult) {
    if (ajaxResult.status != "success") {
      console.log(ajaxResult.data);
      return;
    }
    var list = ajaxResult.data.list;
    var div = $('.board-table > tbody');
    //console.log(list);

    var template = Handlebars.compile($('#trTemplate').html());
    div.html(template({"list":list}));
    
    return;
 
    // 페이지 버튼 설정
    preparePagingButton(ajaxResult.data.totalCount);
  });
}

function preparePagingButton(totalCount) {
  var maxPageNo = parseInt(totalCount / pageSize); // 총 페이지 수
  if ((totalCount % pageSize) > 0) {
    maxPageNo++;
  }

  // 현재 1페이지면 이전 버튼 비활성화
  if (curPageNo <= 1) {
    $('#prevPgBtn').addClass('disabled');
  } else {
    $('#prevPgBtn').removeClass('disabled');
  }
  
  pRCnt = parseInt(curPageNo / pageGpSize);
  if (curPageNo % pageGpSize == 0) { pRCnt--; }
  var liNo = 1;
  for (var index = pRCnt * pageGpSize + 1; 
      index < (pRCnt + 1) * pageGpSize + 1; index++) {
    $('#pg' + liNo).text(index);
    $('#pg' + liNo).parent().attr('id', 'li' + index);
    if (index != curPageNo) {
      $('#li' + index).removeClass('active');
      $('#li' + index).removeClass('disabled');
    } 
    if (index == curPageNo) {
      $('#li' + index).addClass('active');
    } 
    if (index > maxPageNo) {
      $('#li' + index).addClass('disabled');
    }
    liNo++;
  }
  
  if (curPageNo < maxPageNo) {
    $('#nextPgBtn').removeClass('disabled');
  } else {
    $('#nextPgBtn').addClass('disabled');
  }
}

// 삭제
$('.main-contents .delete-div > .delete-btn').click(function(e) {
  if (confirm("정말 삭제하시겠습니까??") == true) {    //확인
    e.preventDefault();
    
    var rnoAry = new Array();
    $('input[name=box]:checked').each(function() {
      rnoAry.push($(this).val());
    });
    jQuery.ajaxSettings.traditional = true;
    console.log(rnoAry);
    
    //댓삭
    $.ajax({
      method : 'POST',
      url    : serverRoot + '/comment/deleteReviewCmtsMy.json',
      data   : {
        'ownNo' : rnoAry
      }
    });
    //글삭
    $.ajax({
      method : 'POST',
      url    : serverRoot + "/review/deleteMy.json",
      data   : {
        'rnoAry' : rnoAry
      }
    }).done(function() {
      location.href = clientRoot + '/mypage/myboard.html';
    });


  } else { //취소
    return;
  }
})//delete

