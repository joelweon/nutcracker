


/*$(function(){
  $(".th-check-1").click(function(){
    if($(".th-check-1").prop("checked")) {
      $(".td-check-1").prop("checked",true);
      } else {
       $(".td-check-1").prop("checked",false);
      }
  })
})*/

$(function(){
  $(".th-check").click(function(){
    if($(".th-check").prop("checked")) {
      $(".td-check").prop("checked",true);
      } else {
       $(".td-check").prop("checked",false);
      }
  })
})

//삭제
  $('.main-contents .delete-div > .delete-btn').click(function(e) {
    e.preventDefault();
    alertify.confirm("정말 삭제하시겠습니까??", function(e) {
      if (e) {
        
        var rnoAry = new Array();
        $('input[name=box]:checked').each(function() {
          rnoAry.push($(this).val());
        });
        
        jQuery.ajaxSettings.traditional = true;
        console.log(rnoAry);
        
        $.ajax({
          method : 'POST',
          url    : serverRoot + "/mypage/myWishListDelete.json",
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
  })//delete
  
  
/* 페이지 */
  
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


//버튼 이벤트 등록
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

// 위시리스트 불러오기
function loadList(pageNo, pageSize) {
  var users = window.sessionStorage.getItem('user');
  var ajaxResult;
  $.get(serverRoot + '/mypage/myWishList.json',
      {
        "pageNo" : pageNo,
        "pageSize" : pageSize,
        "memberNo" : JSON.parse(users).memberNo
      }, 
    function(ajaxResult) {
      if (ajaxResult.status != "success") {
        console.log(ajaxResult.data);
        return;
      }
      var list = ajaxResult.data.list;
      var tbody = $('.wish-table > tbody');
      console.log(list);
  
      var template = Handlebars.compile($('#trTemplate').html());
      tbody.html(template({"list":list}));
      
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
