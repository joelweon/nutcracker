/*  function wrapWindowByMask(){
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({'width':maskWidth,'height':maskHeight});

    //애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
    $('#mask').fadeIn(700);      
    $('#mask').fadeTo("slow",0.8);    

    //윈도우 같은 거 띄운다.
    $('.window').show();
  }*/

  $(document).ready(function(){
    //검은 막 띄우기
    $('.openMask').click(function(e){
      e.preventDefault();
      $('#mask').css({'width':'100%','height':'970px'});
      $('#mask').fadeIn(700);      
      $('#mask').fadeTo("slow",0.8);    
      $('.window').show();
      //스크롤막기
      $("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
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
      });
    });
    //닫기 버튼을 눌렀을 때
    $('.window .close').click(function (e) {  
        //링크 기본동작은 작동하지 않도록 한다.
        e.preventDefault();  
        $('#mask, .window').hide();
        $("body").css({overflow:'auto'})

    });       

    //검은 막을 눌렀을 때
    $('#mask').click(function () {  
        $('#mask, .window').hide();
        /* $(this).hide();  
        $('.window').hide();   */
    });      
  });
  
  //스크롤 -active
  var modal = document.querySelectorAll('.modal')[0];
  var modal_content = document.querySelectorAll('.modal-content')[0];
  var sticky = document.getElementById('sticker');
        
  modal.addEventListener('scroll',function(e){
      
      var windowTop = e.target.scrollTop;
      var modalTop = modal_content.offsetTop;
                              
      if(modalTop<windowTop){
          sticky.classList.add('active');
      }else{
          sticky.classList.remove('active');
      }
  }); 
  

