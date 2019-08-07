<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<jsp:useBean id="dto" class="memo.MemoDTO"/>
<jsp:setProperty name="dto" property="*" />
<%
    dto.setPK(Integer.parseInt(request.getParameter("pk")));
    out.print("<script>");
    if(dao.update(dto)) {
        out.print("alert('수정됨');");
    } else {
        out.print("alert('수정실패');");
    }
    out.print("location.href='./';");
    out.print("</script>");
%>