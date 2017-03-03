try {
  var reviewNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
  var reviewNo = -1;
}

if (reviewNo > 0) {
  prepareViewForm(reviewNo);
} 

function prepareViewForm(reviewNo) {
  $.get(serverRoot + '/review/detail.json?reviewNo=' + reviewNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      alert(ajaxResult.data);
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
  
  $.get(serverRoot + '/comment/list.json?ownNo=' + reviewNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      alert(ajaxResult.data);
      return;
    }
    
    var list = ajaxResult.data;
    if (list.length < 1) { 
      return;
    } else {
    
      var div = $('#div-commentList');
      
      var template = Handlebars.compile($('#divTemplate').html());
      div.html(template({"list":list}));
      
      /*$('#report').click(function(event) {
        event.preventDefault();
        var param = {
          memberNo: 
          content: $('#comment').val()
        }
        $.get(serverRoot + '/comment/add.json', param, function(ajaxResult) {
          if (ajax)
        });
        location.href = 'review-detail.html?reviewNo=' + $(this).attr("data-no");
      });*/
      
      
      return;
    }
    
  }, 'json');
  
  
  // 삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
  
  /*$('#delete-btn').click(function() {
    $.getJSON('delete.json?memberNo=' + memberNo, function(ajaxResult) {
      if (ajaxResult.status != "success") { 
        alert(ajaxResult.data);
        return;
      }
      location.href = 'main.html';
    }); // getJSON()
  }); // click()*/
  
  $('#btn-update').click(function() {
    location.href = clientRoot + '/review/review-update.html?reviewNo=' + reviewNo;
  }); // click()
  $('#btn-delete').click(function() {
    if (confirm("정말 삭제하시겠습니까??") == true){    //확인
      $.get(serverRoot + '/review/delete.json?reviewNo=' + reviewNo, function(ajaxResult) {
        if (ajaxResult.status != 'success') {
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
  
  
} // prepareViewForm()

