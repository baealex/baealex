<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.*" %> 
<%@ page import="memo.*" %> 
<jsp:useBean id="dao" class="memo.MemoDAO"/>
<%
    request.setCharacterEncoding("utf-8"); 
    String root = request.getContextPath();
%> 