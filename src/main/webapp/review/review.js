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

var listSearch = 'list'; //단순리스팅 or 검색리스팅
var range; // 검색범위
var keyword; // 검색어

// 비로그인 상태일 때 글쓰기 버튼 숨기기
$.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
  if (ajaxResult.status != 'success') {
    $('#btn-write').css('visibility', 'hidden');
  } else {
    $('#btn-write').css('visibility', 'visible');
  }
});

$('#btn-write').click(function() {
  location.href = clientRoot + '/review/review-write.html';
});
  
loadList(curPageNo, pageSize);

// 버튼 이벤트 등록
$('#prevPgBtn').click(function() {
  event.preventDefault();
  //loadList(--curPageNo, pageSize);
  location.href = clientRoot + '/review/review.html?pageNo=' + --curPageNo + '&pageSize=' + pageSize;
});
$('#nextPgBtn').click(function() {
  event.preventDefault();
  //loadList(++curPageNo, pageSize);
  location.href = clientRoot + '/review/review.html?pageNo=' + ++curPageNo + '&pageSize=' + pageSize;
});
$('.pgBtn > a').click(function() {
  event.preventDefault();
  location.href = clientRoot + '/review/review.html?pageNo=' + $(this).text() + '&pageSize=' + pageSize;
  //loadList(curPageNo = $(this).text(), pageSize);
});

function loadList(pageNo, pageSize) {
  var ajaxResult;
  var list;
  if (listSearch == 'list') {
    $.get(serverRoot + '/review/list.json', {
      "pageNo" : pageNo,
      "pageSize" : pageSize }, function(ajaxResult) {
      if (ajaxResult.status != "success") {
        console.log(ajaxResult.data);
        return;
      }
      list = ajaxResult.data.list;
      var tbody = $('.table-review > tbody');
      
      var template = Handlebars.compile($('#trTemplate').html());
      tbody.html(template({"list":list}));
   
      $('.title-link').click(function(event) {
        event.preventDefault();
        location.href = clientRoot + '/review/review-detail.html?reviewNo=' + $(this).attr("data-no");
      });
   
      // 페이지 버튼 설정
      preparePagingButton(ajaxResult.data.totalCount);
    });
  } else if (listSearch == 'search') {
    $.get(serverRoot + '/review/search.json', {
      "pageNo" : pageNo,
      "pageSize" : pageSize,
      "range" : range,
      "keyword" : keyword
    }, function(ajaxResult) {
      if(ajaxResult.status != 'success') {
        console.log('[Review] 검색 실패');
        return;
      }
      list = ajaxResult.data.list;
      var tbody = $('.table-review > tbody');
      
      var template = Handlebars.compile($('#trTemplate').html());
      tbody.html(template({"list":list}));
   
      $('.title-link').click(function(event) {
        event.preventDefault();
        location.href = clientRoot + '/review/review-detail.html?reviewNo=' + $(this).attr("data-no");
      });
   
      // 페이지 버튼 설정
      preparePagingButton(ajaxResult.data.totalCount);
    });
  }
    
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

$('#btn-reviewSearch').click(function() {
  range = $('#select-search').val();
  console.log("range: " + range);
  keyword = $('#input-reviewSearch').val();
  console.log("keyword: " + keyword);
  listSearch = 'search';
  loadList(curPageNo, pageSize);
});