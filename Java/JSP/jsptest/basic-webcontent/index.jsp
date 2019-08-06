<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Date" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Insert title here</title>
    </head>
    <body>
        <div style='font-size: 36px; color: #FFFFFF; background-color: #FF3399;'>
            <%
            Date date = new Date();
            out.println(date.toLocaleString());
            %>
        </div>
    </body>
</html>