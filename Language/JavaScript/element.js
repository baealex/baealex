/* element의 부모 및 형제 element 찾기 */
element.parentElement; // 부모 Element
element.childElementCount; // 자신 Element 갯수
element.children; // HTML Collection of 자식 Elements
element.firstElementChild; // 첫째 자식 Element
element.lastElementChild; // 마지막 자식 Element
element.nextElementSibling; // 다음 형제 Element
element.previousElementSibling; // 이전 형제 Element

/* 내용 제어 */
element.textContent = "Some Text";
element.innterHTML = "<b>Some Text<b>";
console.log(element.textContent, element.innterHTML);

/* attribute 제어 */
element.getAttribute('name');
element.setAttribute('name', 'some-name');
element.removeAttribute('name');

/* Element가 해석한 주요 attribute는 (property) 바로 접근 가능 */
element.id;
element.type;
element.value;
element.placeholder;
element.checked;
element.title;
element.src;
element.width/height;

/* Stlye */
element.className;
element.classList.add("class4");
element.classList.remove("class4");

element.stlye;
element.style.backgroundColor = '#ff00ff';
element.style.fontSize = '1.2em';
element.style {
    fontSize = '25px';
    color = '#00f';
    backgroundColor = "#00f";
    position = 'absolute';
    border = '1px solid #000';
	borderRadius = "100%";
    width = this.w + 'px';
	height = this.h + 'px';
    top = this.y + 'px';
    left = this.x + 'px';
}