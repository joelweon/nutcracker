var btnCpnoList = new Array();
$(function(event) {
  loadList();
});

function loadList() {
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
    
    for(i = 0; i < ajaxResult.data.length; i++) {
      btnCpnoList.push(ajaxResult.data[i].companyNo);
    }
//    console.log(btnCpnoList);
    changeBtn();
  });
}

function admin() {
	$('#btn-write').removeClass("hidden");
	$('.list-delete-btn').removeClass("hidden");
	$('.list-update-btn').removeClass("hidden");
	$('.list-add-btn').addClass("hidden");
}

$('#btn-write').click(function(event) {
	location.href = clientRoot + '/boycott/boycott-write.html';
});

$(document).on('click', '.list-update-btn', function(event){
	location.href = clientRoot + '/boycott/boycott-update.html?boycottNo=' + $(this).attr("name");
});

$(document).on('click', '.list-delete-btn', function(e){
  var boycottNo = $(this).prop("name");
  alertify.confirm("정말 삭제하시겠습니까?", function(e) {
    if (e) {
      $.get(serverRoot + '/boycott/delete.json', {
        "boycottNo" : boycottNo
      }, function(ajaxResult) {
        if(ajaxResult.status != 'success') {
          console.log('삭제 실패');
        } else {
          loadList();
        }
      })
    }
  })
});



// 로그인 되어있을때 불매리스트 추가 버튼 변경하는 함수
function changeBtn() {
//$(function(event) {
	var param;
	$.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
		if(ajaxResult.status == 'success') {
			var loginMember = ajaxResult.data.memberNo;
			$.get(serverRoot + '/boycott/myBoycottList.json', {
				"memberNo" : ajaxResult.data.memberNo
			}, function(ajaxResult){
				if (ajaxResult.data.length > 0) {
					var cpnoList = [];
					for(i = 0; i < btnCpnoList.length; i++) {
						for(j = 0; j < ajaxResult.data.length; j++) {
							cpnoList = ajaxResult.data[j].companyNo;
							if(btnCpnoList[i] == cpnoList) {
								$('a[name='+btnCpnoList[i]+'] > input').prop('checked', 
										!$('a[name='+btnCpnoList[i]+'] > input').is(':checked'));
								$('a[name='+btnCpnoList[i]+'] > p').text("나의 불매 리스트 제거");
					    	$('a[name='+btnCpnoList[i]+']').removeClass("btn-bot-add");
					    	$('a[name='+btnCpnoList[i]+']').addClass("btn-bot-delete");
							}
						}
					}
				}
				if(loginMember == 1) {
					admin();
				}
			})
		}
	}, 'json');
//});
}

$(document).on('click', '.list-add-btn', function(event){
	var param;
	var addbtn = $(this)
	$.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
    	alertify.alert('로그인 후 사용가능합니다.', function() {
    		location.href = clientRoot + '/auth/login.html';
    		return;
    	})
    }
    else {
    	$checkbox = $(addbtn.find('input:checkbox'));
    	
    	event.preventDefault();
    	var boycottNo = addbtn.attr("id");
    	
    	param = {
    			memberNo		: 	ajaxResult.data.memberNo,
    			companyNo		:		addbtn.attr("data-no")
    	}
    	
    	if ($checkbox.is(":checked")) {
    		cancelBoycottCount(boycottNo);
    		$checkbox.prop('checked', !$checkbox.is(':checked'));
    		$('#'+boycottNo+' > p').text("나의 불매 리스트 추가");
    		$('#'+boycottNo).removeClass("btn-bot-delete");
    		$('#'+boycottNo).addClass("btn-bot-add");
    		
    		$.post(serverRoot + '/boycott/relationDelete.json', param, function(ajaxResult) {
    			if (ajaxResult.status != "success") {
    				alert(ajaxResult.data);
    				return;
    			}
    		}, 'json');
    	}
    	else {
    		addBoycottCount(boycottNo);
    		$checkbox.prop('checked', !$checkbox.is(':checked'));
    		$('#'+boycottNo+' > p').text("나의 불매 리스트 제거");
    		$('#'+boycottNo).removeClass("btn-bot-add");
    		$('#'+boycottNo).addClass("btn-bot-delete");
    		
    		$.post(serverRoot + '/boycott/relationAdd.json', param, function(ajaxResult) {
    			if (ajaxResult.status != "success") {
    				alert(ajaxResult.data);
    				return;
    			}
    		}, 'json');
    	}
    }
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

function selectEvent(value) {
	console.log("selectEvent()");
	console.log(value);
	if(value == "all") {
		$(function(event) {
		  $.get(serverRoot + '/boycott/list.json', function(ajaxResult) {
			  var status = ajaxResult.status;
			  console.log(status);
			  if (status != "success")
				  return;
			  
			  var list = ajaxResult.data;
			  var tbody = $('#test1');
			  
			  var template = Handlebars.compile($('#trTemplate').html());
			  
			  tbody.html(template({"list": list}));
			  
			  for(i = 0; i < ajaxResult.data.length; i++) {
			  	btnCpnoList.push(ajaxResult.data[i].companyNo);
			  }
		  });
		});
	} else {
		$(function(event) {
			param = { "year" : value	}
		  $.get(serverRoot + '/boycott/listYear.json', param, function(ajaxResult) {
			  var status = ajaxResult.status;
			  console.log(status);
			  if (status != "success")
				  return;
			  
			  var list = ajaxResult.data;
			  var tbody = $('#test1');
			  
			  var template = Handlebars.compile($('#trTemplate').html());
			  
			  tbody.html(template({"list": list}));
			  
			  for(i = 0; i < ajaxResult.data.length; i++) {
			  	btnCpnoList.push(ajaxResult.data[i].companyNo);
			  }
		  });
		});
	}
}

