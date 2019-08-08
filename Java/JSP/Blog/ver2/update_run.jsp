<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="template/open_ssi.jsp" %>
<%
    int req_pk = Integer.parseInt(request.getParameter("pk"));
    String req_title = request.getParameter("title");
    String req_content = request.getParameter("content");
    int req_cnt = Integer.parseInt(request.getParameter("viewcnt"));

    sql.append(" update memo set title = ?, ");
    sql.append(" content = ?, viewcnt = ? ");
    sql.append(" where pk = ? ");

    pstmt = con.prepareStatement(sql.toString());
    pstmt.setString(1, req_title);
    pstmt.setString(2, req_content);
    pstmt.setInt(3, req_cnt);
    pstmt.setInt(4, req_pk);
    
    cnt = pstmt.executeUpdate();
%>

<script>
<% if(cnt > 0) {%>
alert("수정됨");
<% } else { %>
alert("수정실패");
<% } %>
location.href="./";
</script>

<%@ include file="template/close_ssi.jsp" %>