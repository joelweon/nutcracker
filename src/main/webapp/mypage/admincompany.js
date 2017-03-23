$(function() {
  regHelper();
  getAllCompany();
})

function regHelper() {
  Handlebars.registerHelper('ifFive', function (index, options) {
    if(index%5 == 0){
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
}

function getAllCompany() {
  $('input#input-comp').val("");
  $.get(serverRoot + '/company/getAllCompany.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company/getAllCompany] 기업정보 리스트 가져오기 실패');
      return;
    } 
    var list = ajaxResult.data;
    var content = $('ul#table-comp');
    content.html("");
    var template = Handlebars.compile($('#Template').html());
    
    for (var i = 0; i < list.length; i++) {
      content.append(template({"list" : JSON.parse(list[i])}));
    }
    
    var parent = $('h4.parent');
    var child = $('div.child');
    parent.on('click', function(e) {
      var eTarget = $(this);
      if (eTarget.next().is(':visible')) {
        eTarget.next().slideUp();
        return;
      }
      child.slideUp();
      eTarget.next().slideDown();
    });
   /* //실행
    accModule.runInit();*/
  });
}

$('a#btn-regComp').click(function() {
  var comp = $('input#input-comp').val();
  $.post(serverRoot + '/company/add.json', {"comp":comp}, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company/add] 기업정보 등록 실패');
      return;
    }
    getAllCompany();
  })
})