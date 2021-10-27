<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<%
    out.print("<script>");
    if(dao.delete(Integer.parseInt(request.getParameter("pk")))) {
        out.print("alert('삭제됨');");
    } else {
        out.print("alert('삭제실패');");
    }
    out.print("location.href='./';");
    out.print("</script>");
%>