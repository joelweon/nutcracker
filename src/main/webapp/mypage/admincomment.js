$(function(){
  $("#allCheck").click(function(){
    if($("#allCheck").prop("checked")) {
      $("input[type=checkbox]").prop("checked",true);
        } else {
          $("input[type=checkbox]").prop("checked",false);
    }
  })
})

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

//페이지 처음 로딩시
document.location.hash = '#1';
checkForHash();
//hash 값 변경

function checkForHash() {
  if (document.location.hash) {
    curPageNo = document.location.hash.replace('#', '');
    loadList(curPageNo, pageSize);
  } else {
    console.log("remove Hash...");
  }
}
$(window).on('hashchange', function(){ checkForHash() });


//버튼 이벤트 등록
$('#prevPgBtn').click(function() {
  event.preventDefault();
  document.location.hash = '#' + --curPageNo;
  checkForHash();
})

$('#nextPgBtn').click(function() {
  event.preventDefault();
  document.location.hash = '#' + ++curPageNo;
  checkForHash();
})

$('.pgBtn > a').click(function() {
  event.preventDefault();
  var page = $(this).text();
  document.location.hash = '#' + page;
  checkForHash();
})

function loadList(pageNo, pageSize) {
	$.get(serverRoot+'/comment/getCommentReportList.json', {"pageNo":pageNo,"pageSize":pageSize}, function(ajaxResult) {
		var status = ajaxResult.status;
    if (status != "success") {
    	$('.comment-table > #tbody-review').html("<tr><td></td><td></td><td></td><td>"+ajaxResult.data+"</td><td></td><td></td></tr>");
      return;
    }
		var list = ajaxResult.data.list;
		var totalCount = ajaxResult.data.totalCount;
		var reviewList = [];
		var boycottList = [];
		var tbody1 = $('.comment-table > #tbody-review');
		var tbody2 = $('.comment-table > #tbody-boycott');
		for (var i=0; i < list.length; i++) {
			if (list[i].reviewNo != undefined) {
				reviewList.push(list[i]);
			}
			if (list[i].boycottNo != undefined) {
				boycottList.push(list[i]);
			}
		}
		var reviewtemplate = Handlebars.compile($('#reviewTemplate').html());
		var boycotttemplate = Handlebars.compile($('#boycottTemplate').html());
		tbody1.html(reviewtemplate({"reviewList":reviewList}));
		tbody2.html(boycotttemplate({"boycottList":boycottList}));
		preparePagingButton(totalCount);
	});
}

function preparePagingButton(totalCount) {
  var maxPageNo = parseInt(totalCount / pageSize); // 총 페이지 수
  if ((totalCount % pageSize) > 0) {
    maxPageNo++;
  }

  // 현재 1페이지면 이전 버튼 비활성화
  console.log("curPageNo: " + curPageNo + ", maxPageNo: " + maxPageNo);
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

// 삭제
$('.main-contents .delete-div > .delete-btn').click(function(e) {
  e.preventDefault();
  alertify.confirm("정말 삭제하시겠습니까?", function(e) {
    if (e) {
      var noAry = new Array();
      $('input[name=box]:checked').each(function() {
        noAry.push($(this).val());
      });
      jQuery.ajaxSettings.traditional = true;
      //댓삭
      $.ajax({
        method : 'POST',
        url    : serverRoot + '/comment/deleteReportCmt.json',
        data   : {
          'commentNo' : noAry
        }
      });
      loadList(curPageNo, pageSize);
    } else { //취소
      return;
    }
  });
}) //delete

