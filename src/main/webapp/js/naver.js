     //네이버아이디로로그인 버튼 노출 영역 
var naver_id_login = new naver_id_login("cji2_hdyGEUyIUZYdkpb", "http://localhost:8080/nutcracker/html/main.html");
    var state = naver_id_login.getUniqState();
    /* 사용 가능한버튼 Option  버튼 색상 : white, green 크기 : 1(버튼형), 2(작은 배너), 3(큰 배너) 배너 및 버튼 높이 : 사용자 지정값 */
    naver_id_login.setButton("green", 6,60);
    naver_id_login.setDomain("127.0.0.1/nutcracker/main.html");
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();
    
/*    var naver_id_login = new naver_id_login("cji2_hdyGEUyIUZYdkpb", "main.html");
    // 접근 토큰 값 출력
    alert(naver_id_login.oauthParams.access_token);
    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile("naverSignInCallback()");
    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
*/    function naverSignInCallback() {
      alert(naver_id_login.getProfileData('email'));
      alert(naver_id_login.getProfileData('nickname'));
      alert(naver_id_login.getProfileData('age'));
    }