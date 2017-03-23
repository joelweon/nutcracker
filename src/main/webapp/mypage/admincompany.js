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
  $.get(serverRoot + '/company/getAllCompany.json', function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      console.log('[company/getAllCompany] 기업정보 리스트 가져오기 실패');
      return;
    } 
    var list = ajaxResult.data;
    var content = $('ul#table-comp');
    var template = Handlebars.compile($('#Template').html());
    
    for (var i = 0; i < list.length; i++) {
      content.append(template({"list" : JSON.parse(list[i])}));
    }
    
    var parent = $('h4.parent');
    var child = $('div.child');
    parent.on('click', function(e) {
      console.log('click()...');
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



/*$('li.accordian--box').click(function(e) {
  var eTarget = $(e.currentTarget);
  if (eTarget.next().is(':visible')) {
    eTarget.next().slideUp();
    return;
  }
})*/

/*var accModule = function accModule() {
  // private member (비공개 멤버, 고유멤버)
  var acc_wrap = $('.accordian'),
    question = acc_wrap.find('h4'),
    answer = question.next('div');

  // privilieged member(공용 인터페이스)
  return {
    runInit: function() {
      console.log('accModule()...');
      this.accHandler();
    },
    accHandler: function() {
      var accordian = {
        targetClick: function(e) {
          var eTarget = $(e.currentTarget);
          if (eTarget.next().is(':visible')) {
            eTarget.next().slideUp();
            return;
          }
          answer.slideUp();
          eTarget.next().slideDown();
        }
      };
      question.on('click', accordian.targetClick);
    }
  }
}();*/