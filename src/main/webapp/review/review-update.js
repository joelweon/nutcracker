try {
  var reviewNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
  var reviewNo = -1;
}

if (reviewNo > 0) {
  prepareViewForm(reviewNo);
} 

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
    //maximumImageFileSize: 1000000 //1MB
  });
} else {
  //console.log(navigator.userAgent);
  $('#summernote').summernote({
    height: 450,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    lang: 'ko-KR',
    //maximumImageFileSize: 1000000, //1MB
    /*callbacks : {
      onImageUpload: function(image) {
        uploadImage(image[0]);
      }
    }*/
  });
}

function prepareViewForm(reviewNo) {
  $.get(serverRoot + '/review/detail.json?reviewNo=' + reviewNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      alert(ajaxResult.data);
      return;
    }
    
    var review = ajaxResult.data;
    
    if (review.titleHead == '불매운동') {
      $('#select-subject option').eq(0).prop('selected', true);
    } else if (review.titleHead == '불량후기') {
      $('#select-subject option').eq(1).prop('selected', true);
    }
    $('#input-title').val(review.title);
    $('#summernote').summernote('code', review.content);
    
    return;
  }, 'json');
} // prepareViewForm()
  
// 삭제, 변경 버튼을 클릭 했을 때 호출될 함수(클릭 이벤트 핸들러) 등록
$('#btn-update').click(function(event) {
  event.preventDefault();
  $('#loading-img').fadeIn('slow');
  /*var loading = $('#loading-img');
  console.log("x= " + (window.innerWidth - $('#loading-img').width) / 2);
  console.log("y= " + (window.innerHeight - $('#loading-img').height) / 2);
  $('#loading-img').css('left', (window.innerWidth - $('#loading-img').width) / 2 + 'px');
  $('#loading-img').css('top', (window.innerHeight - $('#loading-img').height) / 2 + 'px');
*/
  var param;
  $.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
    if (ajaxResult.status != 'success') {
      alert("로그인 후 가능합니다.");
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
  }, 'json');
  
}); // click()

$('#btn-cancel').click(function(event) {
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
      doUpdate(thumbnail);
    },
    error: function(result) {
      console.log("실패: " + result);
    }
  });
}

function doUpdate(thumbnail) {
  var param = {
      reviewNo: reviewNo,
      titleHead: $('#select-subject option:selected').val(),
      title: $('#input-title').val(),
      content: $('#summernote').summernote('code'),
      photoPath: thumbnail
    };
  
  $.ajax({
    url: serverRoot + '/review/update.json',
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(param),
    contentType: "application/json; charset=UTF-8",
    timeout: 40000,
    success: function(ajaxResult) {
      /*$('#loading-img').css('display', 'none');*/
      location.href = clientRoot + '/review/review.html';
    }
  });
}



