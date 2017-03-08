prepareForm();

function prepareForm() {
  console.log("prepareForm()...");
  getCompany();  
}

function getCompany() {
  console.log("getCompany()...");
  $.get(serverRoot + '/company/getParents.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company] 부모 기업정보를 가져오지 못했습니다.');
      return;
    }
    var contents = $('#compositions-list');
    var parentTemplate = Handlebars.compile($('#parentTemplate').html());
    var parents = ajaxResult.data;
    for(var i = 0; i < parents.length; i++) {
      var parent = parents[i].parentNo;
      var param = {"parent" : parent};
      contents.append(parentTemplate({"index": i, "parent" : parent}));
      
      getChildren(i, param);
    }
  });
}

function getChildren(i, param) {
  var children;
  $.get(serverRoot + '/company/getChildren.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company] 자식 기업정보를 가져오지 못했습니다.');
      return;
    }
    console.log('[company] 자식 기업정보 가져옴.');
    var li = $('#pure-tree' + i);
    var childTemplate = Handlebars.compile($('#childTemplate').html());
    children = ajaxResult.data;
    li.append(childTemplate({"children" : children}));
  });
}
