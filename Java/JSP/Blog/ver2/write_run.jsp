
<%
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

<%@ include file="../template/close_ssi.jsp" %>