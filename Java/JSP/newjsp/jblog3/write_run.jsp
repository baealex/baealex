<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<%
String req_title = request.getParameter("title");
String req_content = request.getParameter("content");

MemoDTO dto = new MemoDTO();
dto.setTitle(req_title);
dto.setContent(req_content);

MemoDAO dao = new MemoDAO();
out.print("<script>");
if(dao.create(dto)) {
    out.print("alert(\"작성됨\");");
} else {
    out.print("alert(\"작성실패\");");
}
out.print("location.href=\"./\";");
out.print("</script>");
%>