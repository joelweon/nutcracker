<%@ page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<h1>학생 등록폼</h1>
<form action='add.do' method='POST'>
<table border='1'>
<tr><th>이메일</th><td><input name='email' type='text' placeholder='예)hong@test.com'></td></tr>
<tr><th>이름</th><td><input name='name' type='text' placeholder='예)홍길동'></td></tr>
<tr><th>암호</th><td><input name='password' type='password'></td></tr>
<tr><th>최근접속일</th><td><input name='lastDate' type='text' placeholder='예)010-1111-2222'></td></tr>
<tr><th>사진</th><td><input name='photoPath' type='file'></td></tr>
</table>
<button type='submit'>등록</button>
 <a href='list.do'>목록</a>
</form>