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
    var $summernote = $('#summernote').summernote({
      height: 450,                 // set editor height
      minHeight: null,             // set minimum height of editor
      maxHeight: null,             // set maximum height of editor
      focus: true,                  // set focus to editable area after initializing summernote
      lang: 'ko-KR',
      maximumImageFileSize: 1000000, //1MB
      maximumFileSizeError: 'Maximum file size exceeded.'
    });
  }
  $('#summernote').on('.image.upload.error', function(event) {
    // upload image to server and create imgNode...
    console.log(event);
  });
  
  $('a#write').click(function(event) {
    var result = $('#summernote').summernote('code');
    $('#textarea1').append(result);
  });
  /*$('a#add-article').click(function(event) {
    $('#wrap-article').add($('div.article').attr({id:"div-article2"}));
    console.log("add article!!!");
  });*/
  var cnt = 2;
  $('a#add-article').click(function (event) {
    if (cnt < 5) {
      var wrapdiv = $('#div-article1').clone(true);
      $('#wrap-article').append(wrapdiv.attr('id', 'div-article'+ cnt));
      cnt++;
    }
  });
  $('a#remove-article').click(function (event) {
    console.log("cnt=" + cnt);
    if (cnt > 2) {
      var el = '#div-article' + (cnt - 1);
      $(el).remove();
      cnt--;
    }
  });