<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.PreparedStatement" %>

<%
request.setCharacterEncoding("utf-8");

String title = request.getParameter("title");
String content = request.getParameter("content");

String url="jdbc:oracle:thin:@localhost:1521:xe";
String user = "baealex";
String password = "1234";
String driver = "oracle.jdbc.driver.OracleDriver";

Connection con = null;

Class.forName(driver);

con = DriverManager.getConnection(url,user,password);

StringBuffer sql = new StringBuffer();
sql.append("insert into memo(pk, title, content, wdate)");
sql.append(" values(memo_seq.nextval, ?, ?, sysdate)");

PreparedStatement pstmt = con.prepareStatement(sql.toString());

pstmt.setString(1, title);
pstmt.setString(2, content);

int cnt = pstmt.executeUpdate();
%>

<script>
alert("작성됨");
location.href="./";
</script>