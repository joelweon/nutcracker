/* 썸머노트 가져오기 */
$(document).ready(function(event) {
  $('#summernote').summernote({
    height: 450,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    lang: 'ko-KR'
  });
  
  $('a#write').click(function(event) {
    var result = $('#summernote').summernote('code');
    $('#textarea1').append(result);
  });
  $('a#add-article').click(function(event) {
    console.log("add article!!!");
    $('div#wrap-article').append($('div.article').html());
  });
});