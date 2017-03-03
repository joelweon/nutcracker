$( function() {
  $( ".datepicker" ).datepicker({
    dateFormat:'yy-mm-dd'
  });
  
  var cnt = 2;
  $('a#add-photo').click(function (event) {
    if (cnt < 5) {
      var wrapdiv = $('#div-photo1').clone(true);
      $('#wrap-photo').append(wrapdiv.attr('id', 'div-photo'+ cnt));
      $('#div-photo' + cnt + ' > input').attr('id', 'input-photo'+cnt);
      cnt++;
    }
  });
  $('a#remove-photo').click(function (event) {
    if (cnt > 2) {
      var el = '#div-photo' + (cnt - 1);
      $(el).remove();
      //$('#input-photo' + (cnt - 1)).remove();
      cnt--;
    }
  });
} );

$('#write').click(function() {
  var param = {
      title: $('#input-title').val(),
      companyNo: $('#input-maker').val(),
      price: $('#input-price').val(),
      totalCount: $('#input-volume').val(),
      startDate: $('#start-date').val(),
      endDate: $('#end-date').val(),
      deliveryDate: $('#deliv-date').val(),
      photoPath: arrayToJson($('#photo-img'))
  };
  console.log(param);
  $.post(serverRoot + '/deal/add.json', param, function(ajaxResult) {
    if (ajaxResult.status != "success") {
      alert(ajaxResult.data);
      return;
    }
    location.href = serverRoot + '/deal/deal.html';
  }, 'json');
});
var arrayToJson = function(list) {
  var result = '';
  for (var i = 0; i < list.length; i++) {
	  if (i != 0) {
		  result += ',';
	  }
	  result += list.eq(i).val();
  }
  result += '';
  return result;
}

$('#input-photo').fileupload({
  url: serverRoot + '/common/fileupload.json', // 서버에 요청할 URL
  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기. 기본은 true.
  autoUpload: true,        // 파일을 추가할 때 자동 업로딩 여부 설정. 기본은 true.
  replaceFileInput: false,
  maxNumberOfFiles: 4,
  limitConcurrentUploads: 3,
  disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
  previewMaxWidth: 800,   // 미리보기 이미지 너비
  previewMaxHeight: 800,  // 미리보기 이미지 높이 
  previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
  done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
    console.log("done data: ",data.result);
    $('#photo-path').val(data.result.data[0]);
  },
  processalways: function(e, data) {
    console.log('processalways data:', data);
    var img = $('#photo-img');
    if (data.index == 0) {
      var canvas = data.files[0].preview;
      var dataURL = canvas.toDataURL();
      img.attr('src', dataURL).css('width', '100px');
      $('#photo-label').css('display', '');
    }
  }
});
