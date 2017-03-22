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

$(function() {
  //페이지 처음 로딩시
  document.location.hash = '#1';
  checkForHash();
});


$('#btn-write').click(function(event) {
  event.preventDefault();
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      alertify.alert('로그인 후 사용가능합니다.', function() {
        location.href = clientRoot + '/auth/login.html';
      });
    } else {
      location.href = clientRoot + '/review/review-write.html';
    }
  });
});

function checkForHash() {
  //console.log(document.location);
  //var oldURL = document.referrer;
  //console.log("prevURL: " + oldURL);
  if (document.location.hash) {
    curPageNo = document.location.hash.replace('#', '');
    loadList(curPageNo, pageSize);
  } else {
    console.log("remove Hash...");
  }
}
$(window).on('hashchange', function(){ checkForHash() });

// 버튼 이벤트 등록
$('#prevPgBtn').click(function() {
  event.preventDefault();
  document.location.hash = '#' + --curPageNo;
  checkForHash();
  //loadList(--curPageNo, pageSize);
})

$('#nextPgBtn').click(function() {
  event.preventDefault();
  document.location.hash = '#' + ++curPageNo;
  checkForHash();
  //loadList(++curPageNo, pageSize);
})

$('.pgBtn > a').click(function() {
  event.preventDefault();
  var page = $(this).text();
  document.location.hash = '#' + page;
  checkForHash();
  //loadList(curPageNo = page, pageSize);
})

function loadList(pageNo, pageSize) {
  //console.log("loadList()..." + pageNo + ", " + pageSize);
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
   
      formForAdmin();
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
      // 검색 결과가 없을 때
      if (list == null) {
        $('table#table-review').css('display', 'none');
        $('div#noresult').css('display', 'block');
      } else {
        $('div#noresult').css('display', 'none');
        $('table#table-review').css('display', 'table');
        var tbody = $('.table-review > tbody');
        var template = Handlebars.compile($('#trTemplate').html());
        tbody.html(template({"list":list}));
        
        $('.title-link').click(function(event) {
          event.preventDefault();
          location.href = clientRoot + '/review/review-detail.html?reviewNo=' + $(this).attr("data-no");
        });
      }
      formForAdmin();
      // 페이지 버튼 설정
      preparePagingButton(ajaxResult.data.totalCount);
    });
  }
    
}

function formForAdmin() {
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      return;
    } else {
      if (ajaxResult.data.memberNo == 1) {
        $('a#btn-delete').css('display', 'block');
        $('th.table-check').css('display', 'table-cell');
        $('td.table-check').css('display', 'table-cell');
      }
    }
  });
}

function preparePagingButton(totalCount) {
  var maxPageNo = parseInt(totalCount / pageSize); // 총 페이지 수
  if ((totalCount % pageSize) > 0) {
    maxPageNo++;
  }

  // 현재 1페이지면 이전 버튼 비활성화
  var prevBtn = $('#prevPgBtn');
  if (curPageNo <= 1) {
    prevBtn.addClass('disabled');
  } else {
    prevBtn.removeClass('disabled');
  }
  
  pRCnt = parseInt(curPageNo / pageGpSize);
  if (curPageNo % pageGpSize == 0) { pRCnt--; }
  var liNo = 1;
  for (var index = pRCnt * pageGpSize + 1; 
      index < (pRCnt + 1) * pageGpSize + 1; index++) {
    $('#pg' + liNo).text(index);
    $('#pg' + liNo).parent().attr('id', 'li' + index);
    var pageBtn = $('#li' + index);
    if (index != curPageNo) {
      pageBtn.removeClass('active');
      pageBtn.removeClass('disabled');
    } 
    if (index == curPageNo) {
      pageBtn.addClass('active');
    } 
    if (index > maxPageNo) {
     pageBtn.addClass('disabled');
    }
    liNo++;
  }
  
  // 마지막 페이지면 다음 버튼 비활성화
  var nextBtn = $('#nextPgBtn');
  if (curPageNo < maxPageNo) {
    nextBtn.removeClass('disabled');
  } else {
    nextBtn.addClass('disabled');
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

$("#allCheck").click(function(){
  if($("#allCheck").prop("checked")) {
    $("input[type=checkbox]").prop("checked",true);
  } else {
    $("input[type=checkbox]").prop("checked",false);
  }
});

$('a#btn-delete').click(function(e) {
  e.preventDefault();
  alertify.confirm("삭제게시글로 처리하시겠습니까??", function(e) {
    if (e) {
      var rnoAry = new Array();
      $('input[name=box]:checked').each(function() {
        rnoAry.push($(this).val());
      });
      jQuery.ajaxSettings.traditional = true;
      console.log(rnoAry);
        
      $.ajax({
        method : 'POST',
        url    : serverRoot + "/review/moveDelete.json",
        data   : {
          'rnoAry' : rnoAry
        }
      }).done(function() {
        location.reload();
      });
    } else { //취소
        return;
    }
  });
});