/* on-off 스위치 */
var myBoycottNames = [];
var allBoycottNames = [];

$(document).ready(function(){
  $('.product-search-btn').click(function(){
    $(this).toggleClass("switchon");
  });
  
  $('div#allCheck').click(function() {
    console.log('allcheck 클릭');
    if ($(this).hasClass('switchon')) {
      productSearch.getAllBoycott();
      $('div#myCheck').removeClass('switchon');
      myBoycottNames = [];
      daumShoppingSearch.search();
    } else {
      allBoycottNames = [];
      daumShoppingSearch.search();
    }
  });
  
  $('div#myCheck').click(function() {
    console.log('mycheck 클릭');
    /*var user = window.sessionStorage.getItem('user');
    if (user == null) {*/
    $.get(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
      if (ajaxResult.status != 'success') {
        $('div#myCheck').removeClass('switchon');
        alertify.alert('로그인 후 사용가능합니다.', function() {
          location.href = clientRoot + '/auth/login.html';
        });
      }
      if ($('div#myCheck').hasClass('switchon')) {
        productSearch.getMyBoycott();
        $('div#allCheck').removeClass('switchon');
        allBoycottNames = [];
      } else {
        myBoycottNames = [];
      }
    });
  });
});

var productSearch = {
    getAllBoycott: function() {
      console.log('[product-search/getAllBoycott] 호출...');
      $.get(serverRoot + '/boycott/getBoycottNames.json', function(ajaxResult) {
        if (ajaxResult.status != 'success') {
          console.log('[product-search/getAllBoycott] 전체 불매기업 리스트 로딩 실패.');
          return;
        }
        var list = ajaxResult.data;
        for (var i = 0; i < list.length; i++) {
          allBoycottNames.push(list[i].companyNo + "," + list[i].companyName);
        }
      });
    },

    getMyBoycott: function() {
      console.log('[product-search/getMyBoycott] 호출...');
      var user = window.sessionStorage.getItem('user');
      var param = {"memberNo" : JSON.parse(user).memberNo}
      $.get(serverRoot + '/boycott/myBoycottList.json', param, function(ajaxResult) {
        if (ajaxResult.status != 'success') {
          console.log('[product-search/getAllBoycott] 불매기업 리스트 로딩 실패.');
          return;
        }
        var list = ajaxResult.data;
        var nameList = [];
        for (var i = 0; i < list.length; i++) {
          nameList.push(list[i].companyNo + "," + list[i].companyName);
        }
        myBoycottNames = nameList;
      });
    }
}

/* 검색창 */
/*$(function () {
  $('#product-search-window').addClass('open');
  $('#product-search-window > form > input[type="search"]').focus();
   $('#product-search-window').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  }); 
});*/