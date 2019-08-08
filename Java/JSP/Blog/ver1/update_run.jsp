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
    String req_title = request.getParameter("title");
    String req_content = request.getParameter("content");
    int req_cnt = Integer.parseInt(request.getParameter("viewcnt"));

    Connection con = DriverManager.getConnection(url,user,password);
   
    StringBuffer sql = new StringBuffer();
    sql.append(" update memo set title = ?, ");
    sql.append(" content = ?, viewcnt = ? ");
    sql.append(" where pk = ? ");

    PreparedStatement pstmt = con.prepareStatement(sql.toString());
    pstmt.setString(1, req_title);
    pstmt.setString(2, req_content);
    pstmt.setInt(3, req_cnt);
    pstmt.setInt(4, req_pk);
    
    int cnt = pstmt.executeUpdate();
%>

<script>
<% if(cnt > 0) {%>
alert("수정됨");
<% } else { %>
alert("수정실패");
<% } %>
location.href="./";
</script>