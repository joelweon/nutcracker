
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
	var addbtn = $(this)
	$.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
    	alert('로그인 후 이용 가능합니다.');
      return;
    }
    $checkbox = $(addbtn.find('input:checkbox'));
    
//    $checkbox.triggerHandler('change');

    event.preventDefault();
    var boycottNo = addbtn.attr("id");
    
    if ($checkbox.is(":checked")) {
    	cancelBoycottCount(boycottNo);
//    	updateDisplay(boycottNo);
    	$checkbox.prop('checked', !$checkbox.is(':checked'));
    	$('#'+boycottNo+' > p').text("나의 불매 리스트 추가");
    	$('#'+boycottNo).removeClass("btn-bot-delete");
    	$('#'+boycottNo).addClass("btn-bot-add");
    }
    else {
    	addBoycottCount(boycottNo);
//    	updateDisplay(boycottNo);
    	$checkbox.prop('checked', !$checkbox.is(':checked'));
    	$('#'+boycottNo+' > p').text("나의 불매 리스트 제거");
    	$('#'+boycottNo).removeClass("btn-bot-add");
    	$('#'+boycottNo).addClass("btn-bot-delete");
		}
    
//    updateDisplay();
    
	}, 'json');
});

function addBoycottCount(boycottNo) {
	var param = {"boycottNo": boycottNo}
	$.post(serverRoot + '/boycott/boycottUpdate.json', param, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
      return;
    }
		$('#cnt'+boycottNo).text(ajaxResult.data);
	});
}

function cancelBoycottCount(boycottNo) {
	var param = {"boycottNo": boycottNo}
	$.post(serverRoot + '/boycott/cancelBoycott.json', param, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
      return;
    }
		$('#cnt'+boycottNo).text(ajaxResult.data);
	});
}

function updateDisplay(boycottNo) {
	var isChecked = $checkbox.is(':checked');
	
	$button.data('state', (isChecked) ? "on" : "off");
	
	$button.find('')
}


