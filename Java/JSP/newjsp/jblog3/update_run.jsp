<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<%
    int req_pk = Integer.parseInt(request.getParameter("pk"));
    String req_title = request.getParameter("title");
    String req_content = request.getParameter("content");
    
    MemoDTO dto = new MemoDTO();
    dto.setPK(req_pk);
    dto.setTitle(req_title);
    dto.setContent(req_content);

    MemoDAO dao = new MemoDAO();
    out.print("<script>");
    if(dao.update(dto)) {
        out.print("alert('수정됨');");
    } else {
        out.print("alert('수정실패');");
    }
    out.print("location.href='./';");
    out.print("</script>");
%>