var x = 10;
var y = "abc"

window.open('http://google.com');
//window.close();
window.print();

window.alert("알림 문구");
window.confirm("확인 문구");
var answor = window.prompt("질문");

window.innerHeight;
window.tnnerWidth;
window.pageXOffset;
window.pageYOffset;

window.resizeTo(500,600);
window.resizeBy(-100, 100);
window.scrollTo(0, 600);
window.scrollBy(0, 50);

var intervalId = window.setInterval(function() {
	// 1초마다 반복 실행
}, 1000);
window.clearInterval(intervalId);

var timeoutId = window.setTimeout(function() {
	// 1초후에 한번 실행
}, 1000);
window.clearTimeout(timeoutId);

/* widnow.screen */
screen.width;
screen.height;

/* window.history */
history.length;
history.back();
history.forword();
history.go(2);
history.go(-2);

/* window.navigator */
navigator.platform; // MacIntel
navigator.userAgent; // Mozilla/5.0
navigator.onLine; // true
navigator.language; // en-US
navigator.geolocation.getCurrectPosition(); // 위치 정보
navigator.getBattery(); // 배터리
navigator.getUserMedia(); // 웹캠 및 마이크

/* window.location */
// https://baejino.com/programing/php/?page=3#main
location.href; // 전체 URL
location.protocol; // https:
location.host; // baejino.com
location.pathname; // /programing/php/
location.search; // ?page=3
location.hash; // #anchor1

location.href="https://baejino.com";
location.assign('https://baejino.com');
location.replace('https://baejino.com');
location.reload();