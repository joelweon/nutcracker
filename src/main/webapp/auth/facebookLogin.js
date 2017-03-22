function getUserData() {
  FB.api('/me', function(response) {
    //document.getElementById('response').innerHTML = response.name;
      var param = {
          name: response.name,
          photoPath: 'http://graph.facebook.com/' + response.id + '/picture'
      }
      $.post(serverRoot+"/auth/snsLogin.json", param, function(ajaxResult) {
        /*location.href=serverRoot+"/main.html";*/
      }, "json");
      
  });
  //location.href = 'http://el.bitcamp.com:8080/nutcracker';
}
 
window.fbAsyncInit = function() {
  //SDK loaded, initialize it
  FB.init({
    appId : '177980746026260',
    cookie : true, // 쿠키가 세션을 참조할 수 있도록 허용
    xfbml  : true, // 소셜 플러그인이 있으면 처리
    version : 'v2.8' // use version 2.8
  });
 
  //check user session and refresh it
  FB.getLoginStatus(function(response) {
    //console.log(response);
    if (response.status === 'connected') {
      //user is authorized
      //document.getElementById('loginBtn').style.display = 'none';
      getUserData();

    } else {
      //user is not authorized
    }
  });
};
//load the JavaScript SDK
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
 
//add event listener to login button
document.getElementById('facebookLogin').addEventListener('click', function() {
  //do the login
  FB.login(function(response) {
    if (response.authResponse) {
      //console.log(response.authResponse);
      //location.href = serverRoot;
      //user just authorized your app
      //document.getElementById('loginBtn').style.display = 'none';
      getUserData();
    }
  }, {scope: 'email,public_profile', return_scopes: true});
}, false);

