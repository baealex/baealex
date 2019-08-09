<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="java.io.*"%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>목차</title>
</head>
<body>
<%

String fileDir = "./";
String filePath = request.getRealPath(fileDir) + "/";

File f = new File(filePath); 
File [] files = f.listFiles();

out.print("<ul>");
for ( int i = 0; i < files.length; i++ ) {
  if ( files[i].isFile() || files[i].isDirectory()){ 
    out.print("<li><a href='"+files[i].getName()+"'>"+files[i].getName()+"</a></li>");
  }
}
out.print("</ul>");
%>

<style>
ul>li>a {
  text-decoration: none;
}
</style>
</body>