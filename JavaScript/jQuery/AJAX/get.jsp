<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
response.setHeader("Access-Control-Allow-Origin","*");

request.setCharacterEncoding("utf-8");
 
String name= request.getParameter("name");
System.out.println("name: " + name);
 
int kuk = Integer.parseInt(request.getParameter("kuk"));
System.out.println("kuk: " + kuk);
 
int eng = Integer.parseInt(request.getParameter("eng"));
System.out.println("eng: " + eng);
 
int tot = kuk + eng;
int avg = tot / 2;
%>
{
    name: '<%=name%>',
    kuk: <%=kuk%>,
    eng: <%=eng%>,
    tot: <%=tot%>,
    avg: <%=avg%>
}