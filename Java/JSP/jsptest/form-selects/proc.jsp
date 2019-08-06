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
    <%
    String area = request.getParameter("area");
    out.print("<p>지역 선택 1 : "+area+"</p>");

    String hobby1 = request.getParameter("hobby1");
    String hobby2 = request.getParameter("hobby2");
    String hobby3 = request.getParameter("hobby3");

    if(hobby1 != null) {
        out.print("<p>취미 1 : "+hobby1+"</p>");
    }
    if(hobby2 != null) {
        out.print("<p>취미 2 : "+hobby2+"</p>");
    }
    if(hobby3 != null) {
        out.print("<p>취미 3 : "+hobby3+"</p>");
    }
    
    String [] hobby = request.getParameterValues("hobby");

    if(hobby != null) {
        for(int i=0; i<hobby.length; i++){
            out.println("<p>"+ hobby[i] +"</p>");
        }
    }
    %>
    <script src="main.js"></script>
</body>
</html>