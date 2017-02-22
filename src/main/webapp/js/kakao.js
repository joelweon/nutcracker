function createKakaotalkLogin() {
	Kakao.init("413a2236a9af2136f9841c01e0335019");
  // 로그인 창을 띄웁니다.
  Kakao.Auth.login({
    persistAccessToken: true,
    persistRefreshToken: true,
    success: function(authObj) {
      getKakaotalkUserProfile();
      createKakaotalkLogout();
    },
    fail: function(err) {
      console.log(err);
    }
  });
}
function getKakaotalkUserProfile(){
  $("#kakao-logged-group .kakao-logout-btn,#kakao-logged-group .kakao-login-btn").remove();
  Kakao.API.request({
    url: '/v1/user/me',
    success: function(res) {
      $("#kakao-profile").append(res.properties.nickname);
      $("#kakao-profile").append($("<img />",{"src":res.properties.profile_image,"alt":res.properties.nickname+"님의 프로필 사진"}).css("width","20px"));
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
function createKakaotalkLogout(){
  $("#kakao-logged-group .kakao-logout-btn,#kakao-logged-group .kakao-login-btn").remove();
  var logoutBtn = $("<a/>",{"class":"kakao-logout-btn","text":"로그아웃"});
  logoutBtn.click(function(){
    Kakao.Auth.logout();
    createKakaotalkLogin();
    $("#kakao-profile").text("");
  });
  $("#kakao-logged-group").prepend(logoutBtn);
}

if(Kakao.Auth.getRefreshToken()!=undefined&&Kakao.Auth.getRefreshToken().replace(/ /gi,"")!=""){
  createKakaotalkLogout();
  getKakaotalkUserProfile();
}else{
  createKakaotalkLogin();
}