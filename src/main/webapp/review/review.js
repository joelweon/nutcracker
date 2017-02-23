$(function(event) {
  $.get(serverRoot + '/review/list.json', function(ajaxResult) {
    if (ajaxResult.status == "success") {
      var list = ajaxResult.data;
      var tbody = $('.table-review > tbody');
      
      var template = Handlebars.compile($('#trTemplate').html());
      tbody.html(template({"list":list}));
      
      $('.title-link').click(function(event) {
        event.preventDefault();
        location.href = 'review-detail.html?reviewNo=' + $(this).attr("data-no");
      });
      
      return;
    }
    alert(ajaxResult.data);
  }, 'json');
  
  //select box Name로 접근하여 선택된 값 읽기
  //$("select[name=셀렉트박스name]").val();
});