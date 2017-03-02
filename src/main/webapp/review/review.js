// 처음에는 1페이지 20개를 로딩한다.
var curPageNo = 1; // 현재페이지
var pageSize = 10; // 한 페이지에 보여줄 글 갯수
var pageGpSize = 5; // 페이지그룹 크기
var pRCnt = parseInt(curPageNo / pageGpSize); // 페이지그룹 번호
var maxPageNo; // 총 페이지 수

loadList(curPageNo, pageSize);

// 버튼 이벤트 등록
$('#prevPgBtn').click(function() {
  loadList(--curPageNo, pageSize);
});
$('#nextPgBtn').click(function() {
  loadList(++curPageNo, pageSize);
});
$('.pgBtn > a').click(function() {
  loadList(curPageNo = $(this).text(), pageSize);
});

function loadList(pageNo, pageSize) {
  $.get(serverRoot + '/review/list.json', {
    "pageNo" : pageNo,
    "pageSize" : pageSize
  }, function(ajaxResult) {
    if (ajaxResult.status != "success") {
      return;
    }
    var list = ajaxResult.data.list;
    var tbody = $('.table-review > tbody');
 
    var template = Handlebars.compile($('#trTemplate').html());
    tbody.html(template({"list":list}));
 
    $('.title-link').click(function(event) {
      event.preventDefault();
      location.href = 'review-detail.html?reviewNo=' + $(this).attr("data-no");
    });
 
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