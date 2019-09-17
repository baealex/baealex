<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@page import="org.json.simple.JSONObject" %>
<%
response.setHeader("Access-Control-Allow-Origin","*");
JSONObject obj = new JSONObject();
 
obj.put("name","Flex 강사");
obj.put("height",new Integer(175));
obj.put("weight",new Double(60.5));
obj.put("married",new Boolean(false));
obj.put("property", null);
out.print(obj);
 
%>