/* 썸머노트 가져오기 */
$(function(event) {
//학생 목록 가져와서 tr 태그를 만들어 붙인다.
  $.get(serverRoot + '/boycott/list.json', function(ajaxResult) {
	  var status = ajaxResult.status;
	  console.log(status);
	  if (status != "success")
		  return;
	  
	  var list = ajaxResult.data;
	  var tbody = $('#test1');
	  
	  // 템플릿 텍스트를 처리하여 HTML을 생성해 줄 함수 얻기
	  var template = Handlebars.compile($('#trTemplate').html());
	  
	  // 템플릿 엔진을 통해 생성된 HTML을 tbody에 넣는다.
	  tbody.html(template({"list": list}));
	  
  });
  
  $('#new-btn').click(function(event) {
	  event.preventDefault(); 
	  location.href = 'view.html';
  });
});

$(document).on('click', '.list-add-btn', function(event){
	var param;
	console.log('111');
	$.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
	    if (ajaxResult.status != 'success') {
	      return;
	    }
	    
	    
	
	    
	    
	}, 'json');
});

