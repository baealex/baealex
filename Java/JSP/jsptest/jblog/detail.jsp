<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.Connection" %> 
<%@ page import="java.sql.DriverManager" %> 
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<% 
    request.setCharacterEncoding("utf-8"); 
    String url = "jdbc:oracle:thin:@127.0.0.1:1521:XE";
    String user = "baealex";
    String password = "1234";
    String driver = "oracle.jdbc.driver.OracleDriver";
   
    Class.forName(driver);

    int req_pk = Integer.parseInt(request.getParameter("pk"));
   
    Connection con = DriverManager.getConnection(url,user,password);
   
    StringBuffer sql = new StringBuffer();
    sql.append(" update memo ");
    sql.append(" set viewcnt = viewcnt + 1 ");
    sql.append(" where pk = ? ");

    PreparedStatement pstmt = con.prepareStatement(sql.toString());
    pstmt.setInt(1, req_pk);
    
    pstmt.executeUpdate();

    sql.delete(0, sql.length());
    sql.append(" select pk, title, viewcnt, content, ");
    sql.append(" to_char(wdate,'yyyy-mm-dd') wdate");
    sql.append(" from memo ");
    sql.append(" where pk = ? ");
    
    pstmt = con.prepareStatement(sql.toString());
    pstmt.setInt(1, req_pk);

    ResultSet rs = pstmt.executeQuery();
    int pk = 0;
    String title = "";
    String content = "";
    int view_cnt = 0;
    String date = "";
    if(rs.next()){
        pk = rs.getInt("pk");
        title = rs.getString("title");
        content = rs.getString("content").replaceAll("\n", "<br>");
        view_cnt = rs.getInt("viewcnt");
        date = rs.getString("wdate");
    } else {
        title = "페이지를 찾을 수 없습니다.";
    }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row h30">
            <div class="fill-full fill-single-img"
                style="background-image:url(https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">
                <div class="fill-full fill-mask image-front-title text-center">
                    <h3><%=title %></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mt-4">
                <div class="article">
                    <p><%=content %>
                </div>
            </div>
            <div class="col-md-4 mt-4">
                <div class="sub-block">
                    <h5>글 정보</h5>
                    <ul>
                      <li>조회수 : <%=view_cnt %></li>
                      <li>등록일 : <%=date %></li>
                  </ul>
                </div>
                <div class="sub-block">
                    <h5>링크</h5>
                    <ul>
                        <li><a href="./">홈</a></li>
                        <li><a href="javascript:void(0)" onclick="post_update(<%=pk%>)">수정</a></li>
                        <li><a href="javascript:void(0)" data-toggle="modal" data-target="#deleteModal">삭제</a></li>
                        <li><a href="./write.html">글쓰기</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="deleteModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>정말로 삭제 하시겠어요?</p>
        </div>
        <div class="modal-footer">
            <button type="button" onclick="post_delete(<%=pk%>)" class="btn btn-primary">삭제</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
        </div>
        </div>
    </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
    function post_delete(pk) {
        location.href= "./delete.jsp?pk="+pk;
    }
    function post_update(pk) {
        location.href= "./update.jsp?pk="+pk;
    }
    </script>
</body>

</html>
<%
if(rs!=null)rs.close();
if(pstmt!=null)pstmt.close();
if(con!=null)con.close();
%>