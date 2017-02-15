/* 썸머노트 가져오기 */
$(document).ready(function(event) {
  $('#summernote').summernote({
    height: 500,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    lang: 'ko-KR'
  });
  
  $('a#write').click(function(event) {
    var result = $('#summernote').summernote('code');
    console.log(result);
    $('#textarea1').append(result);
  });
});