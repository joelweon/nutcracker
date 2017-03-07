try {
  var reviewNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
  var reviewNo = -1;
}

if (reviewNo > 0) {
  prepareViewForm(reviewNo);
} 

function prepareViewForm(reviewNo) {
  var param = { "reviewNo" : reviewNo };
  $.post(serverRoot + '/review/updateReviewRead.json', param, function(ajaxResult) {
    if (ajaxResult.status != "success") { 
      console.log("[Review] 조회수 증가 실패"); 
      return; 
    }
  
    getContent(reviewNo);
    getComments(reviewNo);
    
  });
} // prepareViewForm()

function getContent(reviewNo) {
  $.get(serverRoot + '/review/detail.json?reviewNo=' + reviewNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      console.log('[Review] ' + ajaxResult.data);
      return;
    }
    
    var review = ajaxResult.data;
    
    $('#titleHead').text('[' + review.titleHead + ']');
    $('#title').text(review.title);
    $('#nickname').text(review.name);
    $('#auth-image').attr('src', "/nutcracker/images/user/" + review.photoPath);
    $('#date').text("최종수정일: " + review.postTime);
    $('#viewcount').text("조회수: " + review.viewCount);
    $('#hoducount').text("추천수: " + review.hoduCount);
    $('#content').html(review.content);
    
    return;
  }, 'json');
}

function getComments(ownNo){
  $.get(serverRoot + '/comment/reviewCmtList.json?ownNo=' + ownNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      console.log('[ReviewComment] ' + ajaxResult.data);
      return;
    }
    
    var list = ajaxResult.data;
    if (list.length < 1) { 
      return;
    } else {
      $('#comment').val("");
    
      var div = $('#div-commentList');
      
      var template = Handlebars.compile($('#divTemplate').html());
      div.html(template({"list":list}));

      return;
    }
  }, 'json');
}

//삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
$('#btn-update').click(function() {
  location.href = clientRoot + '/review/review-update.html?reviewNo=' + reviewNo;
}); // click()

$('#btn-delete').click(function() {
  if (confirm("정말 삭제하시겠습니까??") == true){    //확인
    $.get(serverRoot + '/review/delete.json?reviewNo=' + reviewNo, function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        console.log('[Review] ' + ajaxResult.data);
        return;
      }
      location.href = clientRoot + '/review/review.html';
    });
  } else {   //취소
    return;
  }
}); // click()

$('#btn-list').click(function() {
  location.href = clientRoot + '/review/review.html';
}); // click()

$('#btn-hodu').click(function() {
  event.preventDefault();
  var param = { "reviewNo" : reviewNo };
  $.post(serverRoot + '/review/updateReviewHodu.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[ReviewHodu] 호두값 증가 실패');
    }
    getContent(reviewNo);
  });
});

$('#btn-report').click(function() {
  event.preventDefault();
  var cmtParam;
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log("[ReviewComment] 세션값 없음");
      return;
    }
    cmtParam = {
      memberNo: ajaxResult.data.memberNo,
      content: $('#comment').val(),
      reviewNo: reviewNo
    };
    $.get(serverRoot + '/comment/reviewCmtAdd.json', cmtParam, function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        console.log("[ReviewComment] 댓글 등록 실패");
        return;
      }
      //location.href = 'review-detail.html?reviewNo=' + reviewNo;
      getComments(reviewNo);
    });
  });
});

