<%@page contentType="text/plain; charset=UTF-8"%>
<%
response.setHeader("Access-Control-Allow-Origin","*");
%>
{
    "code": "success"
    ,
    "data": {
            "member":
            [
                    {
                    "name": "박재성",
                    "id": "spring",
                    "sno": "한빛미디어_01"
                    }
                    ,
                    {
                    "name": "박재성2",
                    "id": "spring2",
                    "sno": "한빛미디어_02"
                    }
            ]
            
          }
}