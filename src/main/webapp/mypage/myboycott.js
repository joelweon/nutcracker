prepareForm();

function prepareForm() {
  $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      return;
    }
    getCompany(ajaxResult.data.memberNo);
  });
}

function getCompany(memberNo) {
  console.log("getCompany()...");
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
      var comp = list[i].parentNo;
      var param;
      if (comp == 0) {
        contents.append(parentTemplate({"index": i, "parent" : list[i]}));
        param = {"parentNo" : list[i].companyNo};
        getChildren(i, param);
      } else {
        param = {"parentNo" : comp};
        console.log("getParent...");
        $.ajax({
          type: 'GET',
          url: serverRoot + '/company/getParent.json',
          data: param,
          success: function(ajaxResult) {
            if (ajaxResult.status != 'success') {
              console.log('[company] 기업정보를 가져오지 못했습니다.');
              return;
            }
            console.log("부모 가져옴!! " + ajaxResult.data.companyName);
            contents.append(parentTemplate({"index": i, "parent" : ajaxResult.data}));
            getChildren(i, param);
          },
          async: false
        });
      }
      $('#'+list[i].companyNo).addClass('check');
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
