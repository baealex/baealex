<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<% String root = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
// 이미지 목록을 배열에 저장
String[] images = {"tu01.jpg","tu02.jpg","tu03.jpg","tu04.jpg","tu05.jpg",
                   "tu06.jpg","tu07.jpg","tu08.jpg","tu09.jpg","tu10.jpg"};
 
out.println("<H1>튜울립 축제</H1><br>");
for(int i=0; i < images.length; i++){
  out.println("<A href='"+root+"/tulip/"+images[i]+"'>");
  out.println("<IMG src='"+root+"/tulip/"+images[i]+"' width='200px' height='160px' border='0'>");
  out.println("</A>");
}
%>
</body>
</html>