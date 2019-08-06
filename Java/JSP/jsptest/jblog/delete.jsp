<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.Connection" %> 
<%@ page import="java.sql.DriverManager" %> 
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<% 
    request.setCharacterEncoding("utf-8"); 
    String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
    String user = "baealex";
    String password = "1234";
    String driver = "oracle.jdbc.driver.OracleDriver";
   
    Class.forName(driver);

    int req_pk = Integer.parseInt(request.getParameter("pk"));
   
    Connection con = DriverManager.getConnection(url,user,password);
   
    StringBuffer sql = new StringBuffer();
    sql.append(" delete from memo ");
    sql.append(" where pk = ? ");

    PreparedStatement pstmt = con.prepareStatement(sql.toString());
    pstmt.setInt(1, req_pk);
    
    int cnt = pstmt.executeUpdate();
%>

<script>
<% if(cnt > 0) {%>
alert("삭제됨");
<% } else { %>
alert("삭제실패");
<% } %>
location.href="./";
</script>