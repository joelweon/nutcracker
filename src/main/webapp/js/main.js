/*헤더 고정*/
$(function(){
  // Check the initial Poistion of the Sticky Header
  var stickyHeaderTop = $('#wrap-content').offset().top;
  $(window).scroll(function(){
    if( $(window).scrollTop() + 60 > stickyHeaderTop) {
      $('#wrap-header').css({background:'rgba(0,0,0,1.0)',transition:'background-color 1.5s'});
    } else {
      $('#wrap-header').css({background:'rgba(0,0,0,0.0)',transition:'background-color 1.5s'});
    }
  });
  
  loadMainBoycott();
  loadMainReview();
});

function loadMainBoycott() {
  $.get(serverRoot + '/boycott/list.json', function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      console.log("[main/boycott] 불매운동 리스트 가져오기 실패.");
      return;
    }
    var list = ajaxResult.data.splice(0,9);
    var boycottBox = $('#wrap-box');
    
    var botTemplate = Handlebars.compile($('#botTemplate').html());
    
    boycottBox.html(botTemplate({"list": list}));
  });
}

function loadMainReview() {
  $.get(serverRoot + '/review/list.json', {
    "pageNo" : 1,
    "pageSize" : 10 }, function(ajaxResult) {
    if (ajaxResult.status != "success") {
      console.log("[main/review] 불량후기 리스트 가져오기 실패.");
      return;
    }
    var list = ajaxResult.data.list.splice(0,9);
    var reviewBox = $('#wrap-reviewBox');
    
    var revTemplate = Handlebars.compile($('#revTemplate').html());
    
    reviewBox.html(revTemplate({"list": list}));
  });
}