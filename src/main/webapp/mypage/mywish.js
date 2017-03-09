$(document).on('click', '.detail-togle', function() {
  $(".my-top-detail").toggle("1000");
});


$(function(){
  $(".th-check-1").click(function(){
    if($(".th-check-1").prop("checked")) {
      $(".td-check-1").prop("checked",true);
      } else {
       $(".td-check-1").prop("checked",false);
      }
  })
})

$(function(){
  $(".th-check-2").click(function(){
    if($(".th-check-2").prop("checked")) {
      $(".td-check-2").prop("checked",true);
      } else {
       $(".td-check-2").prop("checked",false);
      }
  })
})

var users = window.sessionStorage.getItem('user');
  $.get(serverRoot + '/mypage/myWishList.json', {
    "memberNo" : JSON.parse(users).memberNo}, function(ajaxResult) {
    if (ajaxResult.status != "success") {
      console.log(ajaxResult.data);
      return;
    }
    var list = ajaxResult.data;
    var div = $('.wishi-table > tbody');
    console.log(list);

    var template = Handlebars.compile($('#trTemplate').html());
    div.html(template({"list":list}));
    
    return;
  });