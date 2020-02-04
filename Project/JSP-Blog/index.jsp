<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="ssi/ssi.jsp" %>
<% 
   List<MemoDTO> list = dao.list(); 
%> 
 
<!DOCTYPE html> 
<html> 
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
                    <h3>JSP BLOG</h3>
                </div>
            </div>
        </div>
    </div>
<div class="container">
  <div class="container">
        <div class="row">
            <div class="col-md-8 mt-4">
                <div class="article">
                <style>
                .post-box {
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  margin-top: 15px;
                }
                </style>
                    <%
                    if(list.size() ==0) {
                      out.print("<h4>등록된 메모가 없습니다.</h4>");
                    } else {
                      for(int i=0; i<list.size();i++) {
                        MemoDTO dto = list.get(i);
                        int pk = dto.getPK();
                        String title = dto.getTitle();
                        String date = dto.getWdate();
                        String content = "미리보기 추가중...";
                        %>
                        <div class="post-box">
                          <h4><a href="javascript:void(0)" onclick="read(<%=pk%>)"><%=title%></a></h4>
                          <small><%=date%></small>
                          <p><a href="javascript:void(0)" onclick="read(<%=pk%>)"><%=content %></a></p>
                        </div>
                        <%
                      }
                    }
                    %>
                </div>
            </div>
            <div class="col-md-4 mt-4">
                <div class="sub-block">
                    <h5>정보</h5>
                    <ul>
                  </ul>
                </div>
                <div class="sub-block">
                    <h5>링크</h5>
                    <ul>
                        <li><a href="./">홈</a></li>
                        <li><a href="./write.html">글쓰기</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
    <script type="text/javascript">
     function read(pk){
       var url = "detail.jsp";
       url += "?pk="+pk;
       location.href=url;
     }
  </script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body> 
</html> 