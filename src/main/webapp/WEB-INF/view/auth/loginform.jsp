<%@ page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="true"%>

<h1>로그인</h1>
<form action='login.do' method='POST'>
<table border='1'>
<tr><th>이메일</th><td><input name='email' type='text' placeholder='예)hong@test.com' value='${cookie.email.value}'></td></tr>
<tr><th>암호</th><td><input name='password' type='password'></td></tr>
<tr><th></th><td><input name='saveEmail' type='checkbox'> 이메일 저장</td></tr>
</table>
<button type='submit'>로그인</button>
</form>