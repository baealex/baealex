<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.PreparedStatement" %>

<%
    request.setCharacterEncoding("utf-8");
    Connection conn=null;
    String driver="oracle.jdbc.driver.OracleDriver";
    String url="jdbc:oracle:thin:@localhost:1521:xe";
    
    Boolean connect=false;
    try{ 
       Class.forName(driver);
       conn=DriverManager.getConnection(url,"baealex","1234");
       connect=true;
       conn.close();
    } catch(Exception e){
       connect=false;
       e.printStackTrace();
    }
    
    if(connect){
    	out.println("연결o");
    } else {
    	out.println("연결x");
    }
%>