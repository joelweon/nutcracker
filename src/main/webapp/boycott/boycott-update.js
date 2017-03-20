try {
  var boycottNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
  var boycottNo = -1;
}

if (boycottNo > 0) {
  prepareViewForm(boycottNo);
}

var imgList = [];
var dataURL = '';
var thumbnail = '';
var device = navigator.userAgent;
var cnt = 2;
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

function prepareViewForm(boycottNo) {
  $.get(serverRoot + '/boycott/detail.json?boycottNo=' + boycottNo, function(ajaxResult) {
    var status = ajaxResult.status;
    if (status != "success") {
      alert(ajaxResult.data);
      return;
    }
    
    var boycott = ajaxResult.data;
    console.log(ajaxResult.data);
    $('#input-title').val(boycott.title);
    $('#input-company').val(boycott.companyName);
    $('#input-maker-hidden').val(boycott.companyNo);
    $('#summernote').summernote('code', boycott.content);
	    
    for(var i = 1; i < (boycott.newsList).length; i++) {
    	var wrapdiv = $('#div-article1').clone(true);
    	$('#wrap-article').append(wrapdiv.attr('id', 'div-article'+ cnt));
    	cnt++;
    }
	    
    if ((boycott.newsList).length != 0) {
    	for(var i = 0; i < (boycott.newsList).length; i++) {
    		$('#div-article'+ (i+1) +' > input[name=list-headLine]').val(boycott.newsList[i].headLine);
	        $('#div-article'+ (i+1) +' > input[name=list-url]').val(boycott.newsList[i].path);
    	}
    }
    return;
  }, 'json');
} // prepareViewForm()


$('#btn-update').click(function() {
  console.log(JSON.stringify({"newsList" : arrayToJson()}));
  	
//    /* 썸네일 사진 업로드 */
//    var contents = $('#summernote').summernote('code');
//    var start = contents.indexOf('<img src=');
//    var end = contents.indexOf('data-filename', start);
//    dataURL = contents.substring(start + 10, end - 2);
//    var blob = dataURItoBlob(dataURL);
//    /*var fd = new FormData(document.forms[0]);
//    fd.append("image", blob);*/
//    uploadImage(blob);
  
  /* 썸네일 사진 업로드 */
  var contents = $('#summernote').summernote('code');
  var start = $(contents).find('img').attr('src');
  console.log(start);
  if (start == undefined) {
  	thumbnail = 'default';
  }	else {
  	var end = contents.indexOf('data-filename', start);
    dataURL = contents.substring(start + 10, end - 2);
    var blob = dataURItoBlob(dataURL);
    /*var fd = new FormData(document.forms[0]);
    fd.append("image", blob);*/
    uploadImage(blob);
  }
  location.href = clientRoot + "/boycott/boycott.html";
});

$('#cancel').click(function(event) {
  event.preventDefault();
  location.href = clientRoot + "/boycott/boycott.html";
});


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
      console.log('uploadImage()....성공:', thumbnail);
      doUpdate(thumbnail);
      console.log('uploadImage()....끝!');
    },
    error: function(result) {
      console.log("실패: " + result);
    }
  });
}

function doUpdate(thumbnail) {
  console.log('doUpdate()....');
  var param = {
      boycottNo		: 		boycottNo,
      title				: 		$('#input-title').val(),
      content			: 		$('#summernote').summernote('code'),
      companyNo		:			$('#input-maker-hidden').val(),
      newsList		:			arrayToJson(),
      photoPath		: 		thumbnail
    };
  
  console.log("content.length: " + param.content.length);
  console.log(param);
  
  $.ajax({
    url: serverRoot + '/boycott/update.json',
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(param),
    contentType: "application/json; charset=UTF-8",
    timeout: 40000,
    success: function(ajaxResult) {
      console.log(ajaxResult)
    }
  });
}

function startSearch() {
  var keyword = $(document.getElementById('input-company'))[0].value;
  $.ajax({
    url: serverRoot + "/deal/search.json",
    type: 'POST',
    data: {keyword: keyword},
    crossDomain: 'true',
    dataType: 'json',

    success: function(ajaxResult) {
      var results = [];
      $(document.getElementById('results')).empty();
      for (var i =0;i<=ajaxResult.data.length;i++){
      	if (ajaxResult.data[i] !== undefined){
      		results.push('<a href="javascript:void(0)" data-company-no="'
      				+ajaxResult.data[i].companyNo+
      				'"><div><p>'+ajaxResult.data[i].companyName+'</p></div></a>')
      	}
      }
      results.forEach(function(x){$(document.getElementById('results')).append(x)})
    },
    error: function(err) {
      console.log(err);
    }
  })
}

$('#results').delegate('a','click', function() {
	$('#input-maker-hidden').val($(this).data("company-no"));
	$('#input-company').val($(this).text());
	$('#results').html("");
});
  