/* on-off 스위치 */
var myBoycottNames = [];
var allBoycottNames = [];

$(document).ready(function(){
  $('.product-search-btn').click(function(){
    $(this).toggleClass("switchon");
  });
  
  $('div#allCheck').click(function() {
    if ($(this).hasClass('switchon')) {
      productSearch.getAllBoycott();
      $('div#myCheck').removeClass('switchon');
      myBoycottNames = [];
    } else {
      allBoycottNames = [];
      daumShoppingSearch.search();
    }
  });
  
  $('div#myCheck').click(function() {
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
        daumShoppingSearch.search();
      }
    });
  });
});

var productSearch = {
    getAllBoycott: function() {
      $.get(serverRoot + '/boycott/getBoycottNames.json', function(ajaxResult) {
        if (ajaxResult.status != 'success') {
          console.log('[product-search/getAllBoycott] 전체 불매기업 리스트 로딩 실패.');
          return;
        }
        var list = ajaxResult.data;
        for (var i = 0; i < list.length; i++) {
          allBoycottNames.push(list[i].boycottNo + "," +list[i].companyName + "," + list[i].companyNo);
        }
        daumShoppingSearch.search();
      });
    },

    getMyBoycott: function() {
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
          nameList.push(list[i].boycottNo + "," +list[i].companyName + "," + list[i].companyNo);
        }
        myBoycottNames = nameList;
        daumShoppingSearch.search();
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