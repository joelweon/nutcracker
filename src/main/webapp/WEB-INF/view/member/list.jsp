<%@ page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    

<h1>회원 정보</h1>
      
<a href='form.do'>추가</a><br>
<table border='1'>
<tr>
  <th>회원번호</th>
  <th>이메일</th>
  <th>이름</th>
  <th>최근접속일</th>
</tr>

<c:forEach var="member" items="${members}">
<tr>
 <td>${member.memberNo}</td>
<td><a href='detail.do?memberNo=${member.memberNo}'>${member.email}</a></td>
<td>${member.name}</td>
<td>${member.lastDate}</td>
</tr>
</c:forEach>
</table>