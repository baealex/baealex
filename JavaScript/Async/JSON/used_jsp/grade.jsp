<%@ page contentType = "text/html;charset=utf-8" %>
<%@ page import="org.json.simple.*" %>
<%@ page import="java.util.*,json.*" %>
<%!
public class SungjukDTO {   
    private String name;
    private int kuk;
    private int eng;
    public SungjukDTO() {
        
    }
    public SungjukDTO(String name, int kuk, int eng) {
        super();
        this.name = name;
        this.kuk = kuk;
        this.eng = eng;
    }
    public Object toJSONObject(){
        JSONObject json = new JSONObject();
        json.put("name", name);
        json.put("kuk", kuk);
        json.put("eng", eng);
        
        return json;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getKuk() {
        return kuk;
    }
    public void setKuk(int kuk) {
        this.kuk = kuk;
    }
    public int getEng() {
        return eng;
    }
    public void setEng(int eng) {
        this.eng = eng;
    }   
}
%>

<%
response.setHeader("Access-Control-Allow-Origin","*");

List list = new ArrayList();
SungjukDTO dto = null;
 
//JSONObject obj = new JSONObject();
dto = new SungjukDTO("가길동", 100, 100);
list.add(dto);
dto = new SungjukDTO("나길동", 90, 900);
list.add(dto);
dto = new SungjukDTO("다길동", 80, 80);
list.add(dto);
dto = new SungjukDTO("라길동", 70, 70);
list.add(dto);
dto = new SungjukDTO("마길동", 60, 60);
list.add(dto);
 
JSONObject json = new JSONObject();
JSONArray jarray = new JSONArray();
 
for (int i=0;i<list.size();i++) {
    dto = (SungjukDTO)list.get(i);
    //SungjukDTO -> JSONObject로 변환
    jarray.add(dto.toJSONObject());
}
json.put("list",jarray);
out.print(json);
 
%>