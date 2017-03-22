Kakao.init("413a2236a9af2136f9841c01e0335019");

function createKakaotalkLogin() {
  // 로그인 창을 띄웁니다.
  Kakao.Auth.login({
    persistAccessToken: false,
    persistRefreshToken: false,
    success: function(authObj) {
      console.log(authObj);
      Kakao.API.request({
        url: '/v1/user/me',
        success: function(res) {
          window.sessionStorage.setItem('kakao', Kakao.Auth.getAccessToken());
          //console.log(res.kaccount_email);
          var param = {
            name: res.properties.nickname,
            photoPath: res.properties.profile_image
          }
          $.post(serverRoot+"/auth/snsLogin.json", param, function(ajaxResult) {
            /*location.href=serverRoot;*/
          }, "json");
          //location.href=serverRoot;
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
};
//로그아웃 버튼 (임시)
/*document.getElementById('kaout').addEventListener('click', function() {
  console.log(Kakao.Auth.getAccessToken());
  Kakao.Auth.logout();
})*/