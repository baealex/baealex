<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>목차</title>
</head>
<body>
<%
String [] fileName = {
    "성적","성적메소드","갤러리","웹콘텐츠"
};
out.print("<ul>");
for(String i : fileName) {
    out.print("<li><a href='"+i+".jsp'>"+i+"</a></li>");
}
out.print("</ul>");
%>
</body>