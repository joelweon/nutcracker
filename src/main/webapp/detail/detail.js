// 데이터 관련 js
try {
  var boycottNo = location.href.split('?')[1].split('=')[1];
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
	// 불매운동 정보 가져오기
	$.getJSON(serverRoot + '/boycott/detail.json?boycottNo='+boycottNo, function(ajaxResult) {
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
	var purchaseNo = '405'; //번호를 어디서 받아오는건지 모르겠어요
	$.getJSON(serverRoot + '/deal/detail.json?purchaseNo='+purchaseNo, function(ajaxResult) {
		$('.purchase-img img').attr('src', clientRoot+'/images/'+ajaxResult.data.photoList.photoPath);
		$('.purchase-subtitle').text(ajaxResult.data.title);
	});
	
	// 사용자 정보 가져오기
	var users = window.sessionStorage.getItem('user');
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
	  var param = {
	      memberNo: JSON.parse(users).memberNo,
	      content: $('#textarea').val(),
	      boycottNo: boycottNo,
	  };
	  $.getJSON(serverRoot + '/comment/boycottcommentadd.json', param, function(ajaxResult) {
	    getComments(boycottNo);
	  });
	  
	});
	

	
	// handlebars helper 등록
	/*var context = {
	    postDate   : Date.now() - (1000 * 60 * 60 * 24),
	    commentDate: Date.now() - (1000 * 60 * 60 * 2),
	    meetingDate: Date.now() + (1000 * 60 * 51)
	};
	var intlData = {
			"locales": "en-US"
	};
	var html = template(context, {
		data: {intl: intlData}
	});
	Handlebars.registerHelper('formatDate', function(date) {
		return;
	});*/
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
      
      return;
    }
  }, 'json');
}

  
//호두 던지기
$('.walnut-stamp > img').click(function(event) {
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
  	$('#sticker').css('height',rightHeight);
    $(window).scroll(function() {
    	// 오른쪽 바 상단 고정
    	if ( $(window).scrollTop() < stikerTop || $(window).scrollTop() == stikerTop ) {
    		$('#sticker').css('height',rightHeight - 100);
    		$('#sticker').css('position','absolute').css('top','0');
    		$('#sticker').css('position','absolute').css('bottom','0');
    	}                    
    	else {
    		/*$('.content-content2').removeClass("active");*/
    		$('#sticker').css('height','100%');
    		$('#sticker').css('position','fixed').css('top','0');
    		$('#sticker').css('position','fixed').css('bottom','0');
    	}
    	
    	// 공유하기 버튼 이동
      if ( $(window).scrollTop() > snsTop ) {
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


