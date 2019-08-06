<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport", content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <% request.setCharacterEncoding("UTF-8"); %>
    제목: <%=request.getParameter("title") %><br>
    내용: <%=request.getParameter("content") %><br>
    패스워드: <%=request.getParameter("passwd") %>
    <script src="main.js"></script>
</body>
</html>