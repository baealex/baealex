<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<%
    int req_pk = Integer.parseInt(request.getParameter("pk"));
    
    MemoDAO dao = new MemoDAO();
    out.print("<script>");
    if(dao.delete(req_pk)) {
        out.print("alert('삭제됨');");
    } else {
        out.print("alert('삭제실패');");
    }
    out.print("location.href='./';");
    out.print("</script>");
%>