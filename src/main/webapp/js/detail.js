// 데이터 관련 js
try {
  var boycottNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	console.log(error);
}
$(function() {
	// 불매운동 정보 가져오기
	$.getJSON(serverRoot + '/boycott/detail.json?boycottNo='+boycottNo, function(ajaxResult) {
		$('#title-top h1').text(ajaxResult.data.title);
		$('#date').text(ajaxResult.data.postTime);
		$('.viewcount').text(ajaxResult.data.viewCount);
		$('.hoducount').text(ajaxResult.data.hoduCount);
		$('.commentcount').text(ajaxResult.data.commentCount);
		$('.sharecount').text(ajaxResult.data.shareCount);
		/*$('#profile-img').attr('src', clientRoot+'/images/detail/'+ajaxResult.data.photoPath);*/
	});
	
	// 사용자 정보 가져오기
	var users = window.sessionStorage.getItem('user');
	$('#rep-img').attr('src', clientRoot+'/images/user/'+JSON.parse(users).photoPath);
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
      var swiper = new Swiper('.swiper-container', {
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
      /*});*/
    });
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
  	$('#sticker').css('height',rightHeight - 100);
    $(window).scroll(function() {
    	// 오른쪽 바 상단 고정
    	if ( $(window).scrollTop() < stikerTop || $(window).scrollTop() == stikerTop ) {
    		$('#sticker').css('height',rightHeight - 100);
    		$('#sticker').css('position','absolute').css('top','0');
    		$('#sticker').css('position','absolute').css('bottom','0');
    	}
    	else if ( $(window).scrollTop() > stikerTop && $(window).scrollTop() < rightHeight - $(window).height() ) {
    		/*$('.content-content2').addClass("active");*/
    		$('#sticker').css('height','100%');
    		$('#sticker').css('position','fixed').css('top','0');
    		$('#sticker').css('position','fixed').css('bottom','0');
    	}
    	else {
    		/*$('.content-content2').removeClass("active");*/
    		$('#sticker').css('height',$(window).height()-100);
    		$('#sticker').css('position','fixed').css('top',0);
    		$('#sticker').css('position','fixed').css('bottom','100px');
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

