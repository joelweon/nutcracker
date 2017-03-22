function createKakaotalkLogin() {
  Kakao.init("413a2236a9af2136f9841c01e0335019");
  // 로그인 창을 띄웁니다.
  Kakao.Auth.login({
    persistAccessToken: false,
    persistRefreshToken: false,
    success: function(authObj) {
      Kakao.API.request({
        url: '/v1/user/me',
        success: function(res) {
          var param = {
            name: res.properties.nickname,
            photoPath: res.properties.profile_image
          }
          $.post(serverRoot+"/auth/snsLogin.json", param, function(ajaxResult) {
            /*location.href=serverRoot+"/main.html";*/
          }, "json");
        },
        fail: function(error) {
          console.log(error);
        }
      });
      createKakaotalkLogout();
    },
    fail: function(err) {
      console.log(err);
    }
  });
}

function createKakaotalkLogout(){
  var logoutBtn = $("<a/>",{"class":"kakao-logout-btn","text":"로그아웃"});
  logoutBtn.click(function(){
    Kakao.Auth.logout();
    createKakaotalkLogin();
    $("#kakao-profile").text("");
  });
  $("#kakao-logged-group").prepend(logoutBtn);
}

/*if(Kakao.Auth.getRefreshToken()!=undefined && Kakao.Auth.getRefreshToken().replace(/ /gi,"")!=""){
  createKakaotalkLogout();
}else{
  createKakaotalkLogin();
}*/