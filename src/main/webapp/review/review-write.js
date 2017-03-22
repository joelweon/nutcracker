var imgList = [];
var dataURL = '';
var thumbnail = '';
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
    maximumImageFileSize: 1000000, //1MB
    /*callbacks : {
      onImageUpload: function(image) {
        uploadImage(image[0]);
      }
    }*/
  });
}

//write 버튼 클릭 시 내용이 없는 경우 alert 창 띄우기
/*  if ($('#summernote').summernote('isEmpty')) {
  alert('contents is empty');
} */
$('#write').click(function() {
  event.preventDefault();
  $('#loading-img').fadeIn('slow');
  var param;
  $.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') { 
      colsole.log(ajaxResult.data); 
      return;
    }
    /* 썸네일 사진 업로드 */
    var contents = $('#summernote').summernote('code');
    if ($(contents).find('img').length >= 1) {
      var dataURL = $(contents).find('img').attr('src');
      var blob = dataURItoBlob($(contents).find('img').attr('src'));
      uploadImage(blob);
    } else {
      thumbnail = 'default';
    }
    
    param = {
      memberNo: ajaxResult.data.memberNo,
      titleHead: $('#select-subject option:selected').val(),
      title: $('#input-title').val(),
      content: contents,
      photoPath: thumbnail,
    };
    
    $.post(serverRoot + '/review/add.json', param, function(ajaxResult) {
      if (ajaxResult.status != "success") {
        alert(ajaxResult.data);
        return;
      }
      location.href = clientRoot + '/review/review.html';
    }, 'json'); // post();
  });
}); // click()

$('#cancel').click(function(event) {
  event.preventDefault();
  location.href = clientRoot + "/review/review.html";
});

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
  } else {
      byteString = unescape(dataURI.split(',')[1]);
  }

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}

function uploadImage(image) {
  var IMAGE_PATH = serverRoot + '/upload/review/';

  var data = new FormData();
  data.append("image",image);
  $.ajax ({
    async: false,
    data: data,
    dataType : "json",
    type: "POST",
    url: serverRoot + "/review/imgUpload.json",
    cache: false,
    contentType: false,
    processData: false,
    success: function(ajaxResult) {
      /*$('#summernote').summernote("insertImage", IMAGE_PATH + result.data, result.data);*/
      thumbnail = ajaxResult.data;
      console.log("성공: " + thumbnail);
      return thumbnail;
    },
    error: function(result) {
      console.log("실패: " + result);
    }
  });
}