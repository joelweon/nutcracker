var ownNo;
try {
  var reviewNo = location.href.split('?')[1].split('=')[1];
  var users = window.sessionStorage.getItem('user');
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
    
    
    /* 수정, 삭제 버튼 설정 */
    $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        console.log('[review-detail] 로그인 정보 가져오기 실패.');
        return;
      }
      if (ajaxResult.data.memberNo == review.memberNo) {
        $('#btn-update').css('display', 'block');
        $('#btn-delete').css('display', 'block');
      }
    });
    return;
  }, 'json');
}

function getComments(ownNo){
  $.get(serverRoot + '/comment/listReviewCmt.json?ownNo=' + ownNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      console.log(ajaxResult.data);
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
      
      changeBtn();
      
      $('.comment-report').click(function() {
    	  if (users != null) {
	      	var commentNo = $(this).attr('data-no');
	      	if ($('#report-'+commentNo+' > .report-menu').css('visibility') == 'hidden') {
	      		$('#report-'+commentNo+' > .report-menu').css('visibility','visible');
	      		$('#report-'+commentNo+' > .report-menu > .report-submit-btn').click(function() {
	      			var reportNo = $('input[name="reasons"]:checked').val();
	      			if (reportNo == undefined) {
	      				alertify.alert("신고 사유를 선택해주세요.");
	      				return;
	      			}
	      			commentReport(commentNo, reportNo);
	      		});
	      	} else {
	      		$('#report-'+commentNo+' > .report-menu').css('visibility','hidden');
	      	}
      } else {
        alertify.confirm("로그인 후 이용 가능합니다. 로그인하시겠습니까?", function (e) {
          if (e) {location.href = serverRoot+'/auth/login.html';}
          else {}
        });
      }
      });
      return;
    }
  }, 'json');
}

//삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
$('#btn-update').click(function() {
  location.href = clientRoot + '/review/review-update.html?reviewNo=' + reviewNo;
}); // click()

$('#btn-delete').click(function(e) {
  alertify.confirm('정말 삭제하시겠습니까??', function(e) {
    if (e) {
      $.post(serverRoot + '/comment/deleteReviewCmts.json', {"ownNo" : reviewNo}, function(ajaxResult) {
        if (ajaxResult.status != 'success') {
          console.log(ajaxResult.data);
          return;
        }
        $.post(serverRoot + '/review/delete.json', {"reviewNo" : reviewNo}, function(ajaxResult) {
          if (ajaxResult.status != 'success') {
            console.log(ajaxResult.data);
            return;
          }
          location.href = clientRoot + '/review/review.html';
        });
      });
    } else {
      return;
    }
  })
  /*if (confirm("정말 삭제하시겠습니까??") == true){    //확인
    
  } else {   //취소
    return;
  }*/
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
  event.preventDefault();
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      alertify.alert('로그인 후 사용가능합니다.', function() {
        location.href = clientRoot + '/auth/login.html';
      });
    } else {
      cmtParam = {
        memberNo: ajaxResult.data.memberNo,
        content: $('#comment').val(),
        reviewNo: reviewNo
      };
      if (cmtParam.content.length <= 0) {
        alertify.alert('내용을 입력해주세요.');
      } else {
        
        $.get(serverRoot + '/comment/addReviewCmt.json', cmtParam, function(ajaxResult) {
          if (ajaxResult.status != 'success') {
            console.log("[ReviewComment] 댓글 등록 실패");
            return;
          }
          //location.href = 'review-detail.html?reviewNo=' + reviewNo;
          getComments(reviewNo);
        });
      }
    }
  });
});

//신고 사유 등록하기
var commentReport = function(commentNo,reportNo) {
	$.ajax({
    type: "POST",
    url: serverRoot+'/comment/commentReport.json',
    data: ({
  		commentNo : commentNo,
  		memberNo : JSON.parse(users).memberNo,
  		reportNo : reportNo
  	}),
    dataType: "json",
    success: function(AjaxResult) {
    	$('.report-menu').css('visibility','hidden');
    	if (AjaxResult.data == 0) {
    		alertify.alert("정상적으로 신고되었습니다.");
    	} else {
    		alertify.alert("신고는 한 댓글 당 한 번만 가능합니다.");
    	}
    }
  });
};

$('#review-report').click(function() {
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      alertify.alert('로그인 후 신고 가능합니다.', function() {
        location.href = clientRoot + '/auth/login.html';
      });
    } else {
      $('div#div-report').toggleClass('open');
    }
  });
});
$('a#submit-report').click(function() {
  var reportVal = $('input[name="report"]:checked').val();
  if (reportVal == null) {
    alertify.alert('신고 사유를 선택해주세요.');
  } else {
    $.get(serverRoot + '/review/reviewReport.json', {
      memberNo: JSON.parse(window.sessionStorage.getItem('user')).memberNo,
      reviewNo: reviewNo,
      reasonNo: reportVal
    }, function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        alertify.alert(ajaxResult.data);
        return;
      } else {
        alertify.alert('정상적으로 신고되었습니다.', function() {
          location.href = clientRoot + '/review/review.html';
        });
      }
    });
  }
  console.log(reportVal);
});

function changeBtn() {
	var param;
	$.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
		if(ajaxResult.status == 'success') {
			console.log('success');
			var loginMember = ajaxResult.data.memberNo;
			console.log(loginMember);
			$('div[name='+loginMember+'] .comment-report').addClass("hidden");
			$('div[name='+loginMember+'] .comment-update-btn').removeClass("hidden");
			$('div[name='+loginMember+'] .comment-delete-btn').removeClass("hidden");
		}
	}, 'json');
}

//댓글 수정버튼 클릭 시 해당 폼 변경
$(document).on('click', '.comment-update-btn', function(event) {
	var clickCmtNo = $(this).attr("data-no");
	console.log(clickCmtNo);
	$('#div-'+clickCmtNo+'> .review-detail-comment-others-sentence').addClass("hidden");
	$('#div-'+clickCmtNo+'> .comment-write-box').removeClass("hidden");
	$('#div-'+clickCmtNo+'> .comment-update-btn').addClass("hidden");
	$('#div-'+clickCmtNo+'> .comment-delete-btn').addClass("hidden");
});

// 댓글 삭제 이벤트
$(document).on('click', '.comment-delete-btn', function(event) {
	$.get(serverRoot + '/comment/deleteOneRevCmt.json', {
			"commentNo" : $(this).attr("data-no")
	}, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			console.log("삭제실패");
		}
		console.log("revNo:" + reviewNo);
		getComments(reviewNo);
	}, 'json');
});

function updateCmt(cmtNo) {
	var param = {
			"cont" : $('#div-'+cmtNo+' .comment-write-textarea').val(),
			"ctno" : cmtNo
	}
	$.post(serverRoot + '/comment/updateCmt.json', param, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			console.log("수정실패");
		}
		getComments(reviewNo);
	}, 'json');
}

function updateCancel(cmtNo) {
	$('#div-'+cmtNo+'> .review-detail-comment-others-sentence').removeClass("hidden");
	$('#div-'+cmtNo+'> .comment-write-box').addClass("hidden");
	$('#div-'+cmtNo+'> .comment-update-btn').removeClass("hidden");
	$('#div-'+cmtNo+'> .comment-delete-btn').removeClass("hidden");
}


