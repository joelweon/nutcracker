$(function(event) {
  //select box Name로 접근하여 선택된 값 읽기
  //$("select[name=셀렉트박스name]").val();
  var device = navigator.userAgent;
  if (device.indexOf('Mobile') != -1) {
    // 모바일로 접속 시 툴바 제한
    //console.log('모바일임');
    $('#summernote').summernote({
      height: 300,                 // set editor height
      minHeight: null,             // set minimum height of editor
      maxHeight: null,             // set maximum height of editor
      focus: true,                  // set focus to editable area after initializing summernote
      lang: 'ko-KR',
      toolbar: [
        ['fontsize', ['fontsize']],
        ['para', ['paragraph']],
        ['insert', ['picture']],
      ],
      maximumImageFileSize: 1000000 //1MB
    });
  } else {
    //console.log(navigator.userAgent);
    $('#summernote').summernote({
      height: 450,                 // set editor height
      minHeight: null,             // set minimum height of editor
      maxHeight: null,             // set maximum height of editor
      focus: true,                  // set focus to editable area after initializing summernote
      lang: 'ko-KR',
      maximumImageFileSize: 1000000 //1MB
    });
  }
  //write 버튼 클릭 시 내용이 없는 경우 alert 창 띄우기
/*  if ($('#summernote').summernote('isEmpty')) {
    alert('contents is empty');
  }
*/});