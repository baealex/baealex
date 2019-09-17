<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="org.json.simple.*" %>
 
<%
response.setHeader("Access-Control-Allow-Origin","*");
JSONArray list = new JSONArray();
 
list.add("가길동");
list.add("나길동");
list.add("다길동");
list.add("라길동");
list.add("마길동");
 
out.print(list.toString());
%> 