<%@ page contentType="text/html; charset=utf-8" %>
<%
response.setHeader("Access-Control-Allow-Origin","*");
%>
{
data:
    [
    {
        name: '가길동',
        id: 'user1', 
        kuk: 80,
        eng: 90
    }
    ,
    {
        name: '나길동',
        id: 'user2', 
        kuk: 80,
        eng: 90
    }
    ,
    {
        name: '다길동',
        id: 'user3', 
        kuk: 80,
        eng: 90
    }
    ]
}