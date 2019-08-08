<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="template/open_ssi.jsp" %>
<%
    sql.append(" delete from memo ");
    sql.append(" where pk = ? ");

    pstmt = con.prepareStatement(sql.toString());
    pstmt.setInt(1, req_pk);
    
    cnt = pstmt.executeUpdate();
%>

<script>
<% if(cnt > 0) {%>
alert("삭제됨");
<% } else { %>
alert("삭제실패");
<% } %>
location.href="./";
</script>

<%@ include file="template/close_ssi.jsp" %>