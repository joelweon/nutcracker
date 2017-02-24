function createKakaotalkLogin() {
	Kakao.init("413a2236a9af2136f9841c01e0335019");
  // 로그인 창을 띄웁니다.
  Kakao.Auth.login({
    persistAccessToken: true,
    persistRefreshToken: true,
    success: function(authObj) {
    	createKakaotalkLogout();
    	Kakao.API.request({
        url: '/v1/user/me',
        success: function(res) {
        	var param = {
        		name: res.properties.nickname,
        		photoPath: res.properties.profile_image
        	}
        	$.post(serverRoot+"/auth/snsLogin.json", param, function(ajaxResult) {
          	location.href=serverRoot+"/main.html";
          }, "json");
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
    fail: function(err) {
      console.log(err);
    }
  });
}
function createKakaotalkLogout(){
  $('#btn-logout').click(function(){
  	event.preventDefault();
    Kakao.Auth.logout(function() {
    	setTimeout(function() {
    		location.href = clientRoot + '/main.html';
    	}, 1000);
    });
    $.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
    	location.href = clientRoot + '/main.html';
    });
  });
}

if(Kakao.Auth.getRefreshToken()!=undefined && Kakao.Auth.getRefreshToken().replace(/ /gi,"")!=""){
  createKakaotalkLogout();
}else{
  createKakaotalkLogin();
}