// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  /*console.log('statusChangeCallback');*/
  console.log('response => ',response);
//response 객체는 현재 로그인 상태를 나타내는 정보를 보여준다. 
  // - connected: 현재 사용자가 페이스북과 앱에 함께 로그인 되어있다.
  // - not_authorized: 사용자가 페이스북에는 로그인 되어있으나, 앱에는 로그인되어 있지 않다.
  // - unknown: 사용자가 페이스북에 로그인되어있지 않다.

//response에 담긴것
//  - accessToken: 사용자가 앱에 접근하는 access token
//  - expiresIn: UNIX 시간으로 토큰이 만기 되어 재생성이 필요한 시기
//  - signedRequest: 앱을 사용하는 사용자에 대한 서명된 파라미터 정보
//  - userID: 앱을 사용하는 사용자의 ID



  if (response.status === 'connected') {
 // 페이스북을 통해서 로그인이 되어있다.
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        
        FB.api('/me', function(user) {
          if (user) {
            console.log(user.name);

            var image = document.getElementById('image');
            image.src = 'http://graph.facebook.com/' + user.id + '/picture';
            var name = document.getElementById('name');
            name.innerHTML = user.name
            var id = document.getElementById('id');
            id.innerHTML = user.id

          }
        }); 
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
         console.log(accessToken);
      }
    });
  }/* else if (response.status === 'not_authorized') {
    // 페이스북에는 로그인 했으나, 앱에는 로그인이 되어있지 않다.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into this app.';
  } else {
 // 페이스북에 로그인이 되어있지 않다. 따라서, 앱에 로그인이 되어있는지 여부가 불확실하다.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }*/
}

//이 함수는 누군가가 로그인 버튼에 대한 처리가 끝났을 때 호출된다. 
// onlogin 핸들러를 아래와 같이 첨부하면 된다.
//statusChangeCallback(response);  현재 접속 상태를 리턴해준다.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response); 
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId : '177980746026260',
    cookie : true, // 쿠키가 세션을 참조할 수 있도록 허용
    // the session
    xfbml : true, // 소셜 플러그인이 있으면 처리
    version : 'v2.8' // use version 2.8
  });
 
  // 자바스크립트 SDK를 초기화 했으니, FB.getLoginStatus()를 호출한다. 
  //.이 함수는 이 페이지의 사용자가 현재 로그인 되어있는 상태 3가지 중 하나를 콜백에 리턴한다. 
  // 그 3가지 상태는 아래와 같다. 
  // 1. 앱과 페이스북에 로그인 되어있다. ('connected') 
  // 2. 페이스북에 로그인되어있으나, 앱에는 로그인이 되어있지 않다. ('not_authorized') 
  // 3. 페이스북에 로그인이 되어있지 않아서 앱에 로그인이 되었는지 불확실하다.

   //위에서 구현한 콜백 함수는 이 3가지를 다루도록 되어있다.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
 


  //로그인 되는 순간 호출
  FB.Event.subscribe('auth.login', function(response) {
    /*document.location.href=".././";*/
  });
  //로그아웃 되는 순간 호출
  FB.Event.subscribe('auth.logout', function(response) {
    document.location.reload();
  });

};

// SDK를 비동기적으로 호출
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
