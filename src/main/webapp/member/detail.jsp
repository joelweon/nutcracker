<%@ page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<h1>회원 정보</h1>

<form action='update.do' method='POST'>
<table border='1'>
<tr><th>이메일</th><td><input name='email' type='text' value='${member.email}'></td></tr>
<tr><th>이름</th><td><input name='name' type='text' value='${member.name}'></td></tr>
<tr><th>암호</th><td><input name='password' type='password'></td></tr>
<tr><th>최근접속일</th><td><input name='lastDate' type='text' value='${member.lastDate}'></td></tr>
<tr><th>사진</th><td><input name='photoPath' type='file'></td></tr>
</table>
      
<button type='submit'>변경</button>
<a href='delete.do?memberNo=${member.memberNo}'>삭제</a>
<input type='hidden' name='memberNo' value='${member.memberNo}'>
      
<a href='list.do'>목록</a>
</form>