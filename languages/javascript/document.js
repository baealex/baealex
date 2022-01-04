/* document 노드의 주요 값 */
document.title; // 페이지의 제목
document.lastModofid; // 문서의 초종 수정 일자
document.cookie; // 쿠키
document.referrer; // 레퍼러 URL
document.wirte("...");

/* document 노드에서 자식 element에 접근하기 */
document.documentElement; // HTML Element
document.head;
document.body;
document.script;
document.images;
document.forms;
document['FORM_NAME'];
document.FORM_NAME;

document.getElementsByTagName("div");
document.getElementsByClassName("someClass");
document.getElementById("someId");
document.querySelectorAll(".some-class > a.hello:hover");
document.querySelector(".some-class > a.hello:hover");