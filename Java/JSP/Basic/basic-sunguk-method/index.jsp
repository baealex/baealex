<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Insert title here</title>
</head>
<body>
<%!
public int tot(int ... arg) {
  int sum = 0;
  for(int i : arg) {
    sum += i;
  }
  return sum;
}
public int avg(int tot) {
  return tot/3;
}
public int avg(int tot, int num) {
  return tot/num;
}
%>

<%
String name = "아로미";
int kuk = 100;
int eng = 66;
int mat = 77;
int tot = tot(kuk,eng,mat);
int avg = avg(tot);
%>
 
<h1>성적표</h1>
<div style='font-size: 24px;'>
  -------------------------<br>
  성명: <%=name%><br>
  국어: <%=kuk%><br>
  영어: <%=eng%><br>
  수학: <%=mat%><br>
  총점: <%=tot%><br> 
  평균: <%=avg%><br>
</DIV>

</body>
</html>