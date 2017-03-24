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
  $.get(serverRoot + '/user/listReportMember.json',
    {
      "pageNo" : pageNo,
      "pageSize" : pageSize
    },
    function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        console.log(ajaxResult.data);
        return;
      } else {
        var tbody = $('.member-table > tbody');
        var template = Handlebars.compile($('#trTemplate').html());
        tbody.html(template({"list":ajaxResult.data.list}));
        preparePagingButton(ajaxResult.data.totalCount);
      }
      //회원 활동상태 변경
      statusButton();
  });
}

var statusButton = function() {
  $('.status-btn').click(function() {
  	var memberNo = $(this).attr("data-no");
    if ($('#status-btn-'+memberNo).val() == "ON") {
    	$('#status-btn-'+memberNo).css('background', '#808080');
    	$('#status-btn-'+memberNo).val("OFF");
    	var data ={
    			outType: 2,
    			memberNo: memberNo
    	};
    	$.get(serverRoot+'/user/updateStatus.json', data, function(ajaxResult) {
    		console.log(ajaxResult.data);
    	});
    } else if ($('#status-btn-'+memberNo).val() == "OFF") {
    	console.log($('#status-btn-'+memberNo).val());
    	$('#status-btn-'+memberNo).css('background', '#ff0000');
    	$('#status-btn-'+memberNo).val("ON");
    	var data ={
      		outType: 0,
      		memberNo: memberNo
      };
      $.get(serverRoot+'/user/updateStatus.json', data, function(ajaxResult) {
      	console.log(ajaxResult.data);
      });
    }
  });
};

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

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
