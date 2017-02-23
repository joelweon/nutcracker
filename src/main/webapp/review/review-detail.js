try {
  var reviewNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
  var reviewNo = -1;
}

if (reviewNo > 0) {
  prepareViewForm();
} 
/*else {
  prepareNewForm();
}*/

function prepareViewForm() {
  // 등록 버튼은 감춘다.
  /*$('.new-form').css('display', 'none');*/
  
  $.getJSON('detail.json?reviewNo=' + reviewNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      alert(ajaxResult.data);
      return;
    }
    
    var review = ajaxResult.data;
    
    $('.review-detail-title-subject').text('[' + review.titleHead + ']');
    $('.review-detail-title-title').text(review.title);
    $('.review-detail-info-nickname').text(review.name);
    $('.review-detail-info-date').text("최종수정일: " + review.postTime);
    $('.review-detail-info-viewcount').text("조회수: " + review.viewCount);
    $('.review-detail-info-hoducount').text("추천수: " + review.hoduCount);
    $('.review-detail-content > pre').text(review.content);
  });
  
  // 삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
  /*$('#delete-btn').click(function() {
    $.getJSON('delete.json?memberNo=' + memberNo, function(ajaxResult) {
      if (ajaxResult.status != "success") { 
        alert(ajaxResult.data);
        return;
      }
      location.href = 'main.html';
    }); // getJSON()
  }); // click()
  
  $('#update-btn').click(function() {
      var param = {
        "memberNo": memberNo, 
        "name": $('#name').val(),
        "tel": $('#tel').val(),
        "email": $('#email').val(),
        "password": $('#password').val(),
        "working": $('#working').is(':checked'),
        "grade": $('#grade').val(),
        "schoolName": $('#school-name').val()
      };
      
      $.post('update.json', param, function(ajaxResult) {
        if (ajaxResult.status != "success") {
          alert(ajaxResult.data);
          return;
        }
        location.href = 'main.html';
      }, 'json');
      
  }); // click()
*/  
} // prepareViewForm()
