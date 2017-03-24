// 데이터 관련 js
try {
  var boycottNo = location.href.split('?')[1].split('=')[1];
  var users = window.sessionStorage.getItem('user');
} catch (error) {
	console.log(error);
}

// 크기에 따른 대체상품 위치변경
if ($(window).width() < 850) {
  $('#sticker > #daumShopping').remove();
  $('#sticker > #daumShoppingScript').remove();
  $dm = $('<div id=daumShopping></div><div id=daumShoppingScript></div>');
  $('#hidden-alternative-goods').append($dm);
} else {
  $('#hidden-alternative-goods > #daumShopping').remove();
  $('#hidden-alternative-goods > #daumShoppingScript').remove();
  $wide = $('<div id=daumShopping></div><div id=daumShoppingScript></div>');
  $('#sticker').append($wide);
}

//불매 조회수
$(document).ready(function() {
	$.getJSON(serverRoot + '/boycott/viewUpdate.json', 'boycottNo='+boycottNo, function(ajaxResult) {});
});

$(function() {
  //textarea 글자수 제한
  $('#textarea').keyup(function (e){
    var content = $(this).val();
    $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
    $('#counter').html(content.length + '/200');
  });
  $('#textarea').keyup();
  
	// 불매운동 정보 가져오기
	$.getJSON(serverRoot + '/boycott/detail.json?boycottNo='+boycottNo, function(ajaxResult) {
		$('#content').html(ajaxResult.data.content);
		$('#title-top h1').text(ajaxResult.data.title);
		$('#date').text(ajaxResult.data.postTime);
		$('.viewcount').text(ajaxResult.data.viewCount);
		$('.hoducount').text(ajaxResult.data.hoduCount);
		$('.sharecount').text(ajaxResult.data.shareCount);
		/*$('#profile-img').attr('src', clientRoot+'/images/detail/'+ajaxResult.data.photoPath);*/
	});
	$.getJSON(serverRoot + '/comment/boycottcmtcount.json', 'boycottNo='+boycottNo, function(ajaxResult) {
		$('.commentcount').text(ajaxResult.data);
	});

	// 공구 정보 가져오기

	$.getJSON(serverRoot + '/deal/detailByBotno.json', {boycottNo}, function(ajaxResult) {
		if (ajaxResult.status == "success") {
			$('.purchase-img img').attr('src', clientRoot+'/upload/deal/'+ajaxResult.data.photoList.photoPath);
			$('.purchase-subtitle').text(ajaxResult.data.title);
			$('.purchase-img a').attr('href', serverRoot+'/deal/deal-detail.html?purchaseNo='+ajaxResult.data.purchaseNo);
		} else {
			$('.purchase-subtitle').text(ajaxResult.data);
		}
	});
	
	// 사용자 정보 가져오기
	if (users != null) {
		$('#rep-img').attr('src', clientRoot+'/images/user/'+JSON.parse(users).photoPath);
		$('#textarea').attr('placeholder', '댓글을 입력하세요.');
	} else {
		$('#rep-img').attr('src', clientRoot+'/images/user/default.jpg');
		$('#textarea').attr('placeholder', '로그인이 필요합니다.');
		$('#textarea').attr('readonly', true);
	}
	
	getComments(boycottNo);
	
//댓글 작성
	$('.reply-button').click(function() {
		if (users != null) {
			var param = {
					memberNo: JSON.parse(users).memberNo,
					content: $('#textarea').val(),
					boycottNo: boycottNo,
			};
			if (param.content.length == 0) {
				alertify.alert("댓글을 입력하세요.");
			} else {
				$.getJSON(serverRoot + '/comment/boycottcommentadd.json', param, function(ajaxResult) {
					getComments(boycottNo);
				});
			}
		} else {
			alertify.confirm("로그인 후 이용 가능합니다. 로그인하시겠습니까?", function (e) {
	      if (e) {location.href = serverRoot+'/auth/login.html';}
	      else {}
	    });
		}
	});
	
}); // db 관련 js 끝

// 댓글 정보 가져오기
function getComments(boycottNo) {
  $.get(serverRoot + '/comment/boycottcomments.json?boycottNo=' + boycottNo, function(ajaxResult) {
    var list = ajaxResult.data;
    if (list.legth < 1) {
      return;
    } else {
      $('#textarea').val("");
      var div = $('.reply-list-area:last-child');
      var template = Handlebars.compile($('#divTemplate').html());
      div.html(template({"list":list}));
      
      // 신고 버튼 클릭
      $('.report-btn').click(function() {
        if (users != null) {
	      	var commentNo = $(this).attr('data-no');
	      	if ($('#report-'+commentNo+' > .report-menu').css('visibility') == 'hidden') {
	      		$('#report-'+commentNo+' > .report-menu').css('visibility','visible');
	      		// 제출 버튼 클릭
	      		$('.report-submit-btn').click(function() {
	      			var reportNo = $('.report-reason:checked').val();
	      			if (reportNo == undefined) {
	      				alertify.alert("신고 사유를 선택해주세요.");
	      				return;
	      			}
	      			commentReport(commentNo,reportNo);
	      		});
	      	} else {
	      		$('#report-'+commentNo+' > .report-menu').css('visibility','hidden');
	      	}
        } else {
        	alertify.confirm("로그인 후 이용 가능합니다. 로그인하시겠습니까?", function (e) {
      	      if (e) {location.href = serverRoot+'/auth/login.html';}
      	      else {}
      	    });
        }
      });
    }
    changeBtn()
  }, 'json');
}

function changeBtn() {
	var param;
	$.get(serverRoot + '/auth/loginUser.json', param, function(ajaxResult) {
		if(ajaxResult.status == 'success') {
			console.log('success');
			var loginMember = ajaxResult.data.memberNo;
			$('div[name='+loginMember+'] .report-btn').addClass("hidden");
			$('div[name='+loginMember+'] .update-btn').removeClass("hidden");
			$('div[name='+loginMember+'] .delete-btn').removeClass("hidden");
		}
	}, 'json');
}



// 댓글 수정버튼 클릭 시 해당 폼 변경
$(document).on('click', '.update-btn', function(event) {
	var clickCmtNo = $(this).attr("data-no");
	console.log(clickCmtNo);
	$('#div-'+clickCmtNo+'> .infotext').addClass("hidden");
	$('#div-'+clickCmtNo+'> .comment-write-box').removeClass("hidden");
	$('#report-'+clickCmtNo).addClass("hidden");
});

// 댓글 삭제 이벤트
$(document).on('click', '.delete-btn', function(event) {
	$.get(serverRoot + '/comment/deleteOneBotCmt.json', {
			"commentNo" : $(this).attr("data-no")
	}, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			console.log("삭제실패");
		}
		getComments(boycottNo);
	}, 'json');
});

function updateCmt(cmtNo) {
	var param = {
			"cont" : $('#div-'+cmtNo+' .comment-write-textarea').val(),
			"ctno" : cmtNo
	}
	$.post(serverRoot + '/comment/updateCmt.json', param, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			console.log("수정실패");
		}
		getComments(boycottNo);
	}, 'json');
}

function updateCancel(cmtNo) {
	$('#div-'+cmtNo+'> .infotext').removeClass("hidden");
	$('#div-'+cmtNo+'> .comment-write-box').addClass("hidden");
	$('#report-'+cmtNo).removeClass("hidden");
}


// 신고 사유 등록하기
var commentReport = function(commentNo,reportNo) {
	$.ajax({
    type: "POST",
    url: serverRoot+'/comment/commentReport.json',
    data: ({
  		commentNo : commentNo,
  		memberNo : JSON.parse(users).memberNo,
  		reportNo : reportNo
  	}),
    dataType: "json",
    success: function(ajaxResult) {
    	$('.report-menu').css('visibility','hidden');
    	if (ajaxResult.data == 0) {
    		alertify.alert("정상적으로 신고되었습니다.");
    	} else {
    		alertify.alert("신고는 한 댓글 당 한 번만 가능합니다.");
    	}
    }
  });
};

  
//호두 던지기
$('.walnut-stamp > a').click(function(event) {
  $.getJSON(serverRoot + '/boycott/hoduUpdate.json', 'boycottNo='+boycottNo, function(ajaxResult) {
		event.preventDefault();
		$("span.hoducount").text(ajaxResult.data);
	});
});



// 화면 구성 관련 js

  
  $(document).ready(function(){
    //검은 막 띄우기
    /*$('.openMask').click(function(e){
      e.preventDefault();
      $('#mask').css({'width':'100%','height':'970px'});
      $('#mask').fadeIn(700);
      $('#mask').fadeTo("slow",0.8);*/
      $('.wrap-body').show();
      //스크롤막기
      /*$("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});*/
      /* 대체상품 이미지 swiper */
/*      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        spaceBetween: 30,
        loop: true
      });
    });*/
    //닫기 버튼을 눌렀을 때
    $('.wrap-body .close').click(function (e) {  
        //링크 기본동작은 작동하지 않도록 한다.
        e.preventDefault();  
        history.back();
        /*$('#mask, .window').hide();
        $("body").css({overflow:'auto'})*/

    });

    //검은 막을 눌렀을 때
/*    $('#mask').click(function () {  
        $('#mask, .window').hide();
         $(this).hide();  
        $('.window').hide();   
    });      */
  });
  
  // 스크롤 - active
  $(function () {
  	var snsTop = $('#sns-area').offset().top;
  	var stikerTop = $('.right-area').offset().top;
  	var rightHeight = $('.left-area').height();
  	/*$('#sticker').css('height','100%');*/
    $(window).scroll(function() {
    	// 오른쪽 바 상단 고정
    	if ( $(window).scrollTop() < stikerTop || $(window).scrollTop() == stikerTop ) {
    		$('#sticker').css('position','absolute').css('top','0');
    		$('#sticker').css('position','absolute').css('bottom','0');
    	}                    
    	else {
    	  $('#sticker').css('background-color','#424242');
    		$('#sticker').css('height','100%');
    		$('#sticker').css('position','fixed').css('top','0');
    		$('#sticker').css('position','fixed').css('bottom','0');
    	}
    	
    	// 공유하기 버튼 이동
      if ( $(window).scrollTop() > snsTop + 100 ) {
      	$('#sns-area').css('position', 'fixed');
        $('.share-area').addClass("active");
        $('.top').addClass("active");
      }
      else {
      	$('#sns-area').css('position', 'absolute');
      	$('.share-area').removeClass("active");
      	$('.top').removeClass("active");
      }
    });
  });
  
  // myModal 중앙 배치
  $('.wrap-body').css({
  	right:((window.innerWidth/2) - ($('.wrap-body').width()/2))+'px',
    left:((window.innerWidth/2) - ($('.wrap-body').width()/2))+'px'
  });

/* URL 공유하기버튼 */
  $('.share-logo').click(function() {
    alertify.alert('링크를 복사하세요'+
        document.URL);
  });
  
//  function copyToClipboard() {
//    //alertify.prompt("클립보드 복사 Ctrl+C, Enter", document.URL);
//    alertify
//    .prompt("This is a prompt dialog",
//      function (val, ev) {
//
//
//      })
//  }  
  
/*  function copyURL() {
    var Url = document.getElementById("copy");
    Url.value = window.location.href;
    Url.focus();
    Url.select();  
    document.execCommand("Copy");
  }*/