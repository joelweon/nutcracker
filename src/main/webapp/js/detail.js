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

	// 공구 정보 가져오기
	var purchaseNo = '402'; //번호를 어디서 받아오는건지 모르겠어요
	$.getJSON(serverRoot + '/deal/detail.json?purchaseNo='+purchaseNo, function(ajaxResult) {
		$('.purchase-img img').attr('src', clientRoot+'/images/'+ajaxResult.data.path);
		$('.purchase-subtitle').text(ajaxResult.data.title);
	});
	
	// 댓글 정보 가져오기
	$.get(serverRoot + '/comment/boycottcomments.json?ownNo=' + boycottNo, function(ajaxResult) {
		var list = ajaxResult.data;
		var div = $('.reply-list-area:last-child');
		
		var template = Handlebars.compile($('#divTemplate').html());
		div.html(template({"list":list}));
		return;
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

	// 대체상품 정보 가져오기 : 검색어를 지정하여 상위아이템 정보 뿌리기!
	// 추후 불매기업 블로킹 적용된 검색결과 뿌리기로 수정!
	var keyword = "물티슈";
	var daumShopping = {
			init : function(r){
				daumShopping.api = 'http://apis.daum.net/shopping/search';
				daumShopping.pgno = 1;
				daumShopping.result = r;
			},
			search : function(){
				daumShoppingSearch.query = '?apikey=' + daumShoppingSearch.apikey + '&output=json&q=' + encodeURI(keyword);
			},
			pingSearch : function(pgno){
        daumShopping.pgno = pgno;
        var ds = document.getElementById('daumShoppingScript');
        var callback = 'daumShopping.pongSearch';
        daumShoppingSearch.pingSearch(ds,daumShopping.api, daumShopping.pgno, callback, daumShopping.result);  
      },
			pongSearch : function(z){
				var dv = document.getElementById('daumShopping');
				dv.innerHTML ="";
				dv.appendChild(daumShoppingSearch.pongSearch(this, z));
			},
			getSearch : function(title,content){
				$('.swiper-slide .link').text(title);
			},
			getContent : function(z){
				$('.swiper-slide a').href = z.link;
				$('.swiper-slide img').src = z.image_url;
			}
	};
	var shoppingDiv = $('.swiper-wrapper:last-child');
	var shoppingTemplate = Handlebars.compile($('#daumResult').html());
	shoppingDiv.html(shoppingTemplate({"list":z}));
	
}); // db 관련 js 끝


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
  
  //호두 던지기
  $('.walnut-stamp').click(function(event) {
  	$.getJSON(serverRoot + '/boycott/hoduUpdate.json', 'boycottNo='+boycottNo, function(ajaxResult) {
  		event.preventDefault();
  		window.location.reload(true);
  	});
  });

