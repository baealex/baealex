<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<%
    int req_pk = Integer.parseInt(request.getParameter("pk"));
    MemoDTO dto = dao.read(req_pk);

    int pk = dto.getPK();
    String title = dto.getTitle();
    String content = dto.getContent();
    int view_cnt = dto.getViewcnt();
    String date = dto.getWdate();
%>

<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport', content='width=device-width, initial-scale=1.0'>
    <title>Title</title>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'>
</head>
<body>
    <div class="container">
        <h1 class="col-sm-offset-2 col-sm-10">
            메모 등록
        </h1>
        <form action="update_run.jsp" class="form-horizontal" method="post">
            <div class="form-group">
                <label class="control-lable col-sm-2" for="title">번호</label>
                <div class="col-sm-6">
                    <input type="text" name="pk" readonly class="form-control" value="<%=pk%>">
                </div>
            </div>

            <div class="form-group">
                <label class="control-lable col-sm-2" for="title">제목</label>
                <div class="col-sm-6">
                    <input type="text" name="title" id="title" class="form-control" value="<%=title%>">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-2" for="content">내용</label>
                <div class="col-sm-6">
                    <textarea rows="5" cols="5" id="content" name="content" class="form-control"><%=content%></textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="control-lable col-sm-2" for="viewcnt">조회수</label>
                <div class="col-sm-6">
                    <input type="text" name="viewcnt" id="viewcnt" class="form-control" value="<%=view_cnt%>">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-5">
                    <button class="btn">수정</button>
                    <button type="button" onclick="location.href='./'" class="btn">취소</button>
                </div>
            </div>
        </form>
    </div>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script>
</body>
</html>