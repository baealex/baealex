<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<jsp:setProperty name="dto" property="*" />
<%
    out.print("<script>");
    if(dao.create(dto)) {
        out.print("alert(\"작성됨\");");
    } else {
        out.print("alert(\"작성실패\");");
    }
    out.print("location.href=\"./\";");
    out.print("</script>");
%>