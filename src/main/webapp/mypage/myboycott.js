var boycottNo;; // 회원이 등록한 불매운동 기업번호

prepareForm();

function prepareForm() {
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      return;
    }
    var memberNo = ajaxResult.data.memberNo;
    getCompany(memberNo);
  });
}

function getCompany(memberNo) {
  var param = {"memberNo" : memberNo};
  $.get(serverRoot + '/company/getBoycottComp.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company] 기업정보를 가져오지 못했습니다.');
      return;
    }
    var contents = $('#compositions-list');
    var parentTemplate = Handlebars.compile($('#parentTemplate').html());
    var list = ajaxResult.data;
    for(var i = 0; i < list.length; i++) {
      contents.append(
          parentTemplate({"index": i, "parentNo" : list[i].cpno, "parentName" : list[i].cp_name}));
      if (list[i].childrenNo != null) {
        var childrenNo = list[i].childrenNo.split(',');
        var childrenName = list[i].childrenName.split(',');
        var childrenArray = new Array(childrenNo.length);
        for (var j = 0; j < childrenNo.length; j++) {
          childrenArray[j] = {"childrenNo" : childrenNo[j], "childrenName" : childrenName[j]};
        }
        var li = $('#pure-tree' + i);
        var childTemplate = Handlebars.compile($('#childTemplate').html());
        li.append(childTemplate({"childrenArray" : childrenArray}));
        
        checkBoycott(memberNo);
      }
    }
  });
}

function checkBoycott(memberNo) {
  console.log('checkBoycott()...');
  var param = {"memberNo" : memberNo};
  $.get(serverRoot + '/company/getBoycottNo.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company] 불매기업번호를 가져오지 못했습니다.');
      return;
    }
    var list = ajaxResult.data;
    console.log("list: " + list);
    for (var i = 0; i < list.length; i++) {
      $('#'+list[i]).addClass('check');
    }
  });
}

function getChildren(i, param) {
  console.log("getChildren()...index: " + i + ", parentNo: " + param.parentNo);
  var children;
  $.ajax({
    type: 'GET',
    url: serverRoot + '/company/getChildren.json',
    data: param,
    success: function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        console.log('[company] 자식 기업정보를 가져오지 못했습니다.');
        return;
      }
      console.log('[company] 자식 기업정보 가져옴.');
      var li = $('#pure-tree' + i);
      var childTemplate = Handlebars.compile($('#childTemplate').html());
      children = ajaxResult.data;
      li.append(childTemplate({"children" : children}));
    },
    async: false
  });
}
