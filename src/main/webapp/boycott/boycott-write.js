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
  var $summernote = $('#summernote').summernote({
    height: 450,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                  // set focus to editable area after initializing summernote
    lang: 'ko-KR',
    maximumImageFileSize: 1000000, //1MB
  });
}


$('a#write').click(function(event) {
  console.log(JSON.stringify({"newsList" : arrayToJson()}));
  	
    /* 썸네일 사진 업로드 */
    var contents = $('#summernote').summernote('code');
    var start = $(contents).find('img').attr('src');
    console.log(start);
    if (start == -1) {
    	thumbnail = 'default';
    }	else {
    	var end = contents.indexOf('data-filename', start);
      dataURL = contents.substring(start + 10, end - 2);
      var blob = dataURItoBlob(dataURL);
      /*var fd = new FormData(document.forms[0]);
      fd.append("image", blob);*/
      uploadImage(blob);
    }
    console.log("thumbnail: " + thumbnail);
  
	param = {
		title		:	 	$('#input-title').val(),
		content		: 		$('#summernote').summernote('code'),
		photoPath	: 		thumbnail,
		companyNo	:		$('#input-company').val(),
		newsList	:		arrayToJson()
	};  

	
	$.ajax({
	url: serverRoot + '/boycott/add.json',
    method: 'post',
    dataType: 'json', 
    data: JSON.stringify(param),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    success: function(ajaxResult) {
       if (ajaxResult.status != "success") {
         alert(ajaxResult.data);
         return;
       }
     }
  });
});

$('#cancel').click(function(event) {
  event.preventDefault();
  location.href = clientRoot + "/boycott/boycott.html";
});

var cnt = 2;
$('a#add-article').click(function (event) {
  if (cnt < 5) {
    var wrapdiv = $('#div-article1').clone(true);
    $('#wrap-article').append(wrapdiv.attr('id', 'div-article'+ cnt));
    cnt++;
  }
});
$('a#remove-article').click(function (event) {
  if (cnt > 2) {
    var el = '#div-article' + (cnt - 1);
    $(el).remove();
    cnt--;
  }
});

function arrayToJson() {
  var result = [];
  var cntDiv = $('#wrap-article > div').length;
  var i = 1;
  while (cntDiv > 0) {
    var headline = $('#div-article'+i+' > input[name=list-headLine]').val();
    var url = $('#div-article'+i+' > input[name=list-url]').val();
    result.push({"headLine":headline, "path":url});
    i++;
    cntDiv--;
  }
  console.log("결과값: " + result);
  return result; //JSON.stringify(result);
}
  

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
  var IMAGE_PATH = serverRoot + '/upload/boycott/';

  var data = new FormData();
  data.append("image",image);
  $.ajax ({
    async: false,
    data: data,
    dataType : "json",
    type: "POST",
    url: serverRoot + "/boycott/imgUpload.json",
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
  