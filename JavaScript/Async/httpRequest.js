//XMLHttpRequest 객체
var httpRequest = null;

// url: 요청 주소
// params: 서버로 보내는 값의 목록
// response_function_name: 응답 결과를 처리할 함수
// method: GET, POST인지 결정
function sendRequest(url, params, response_function_name, method) {
	if (window.XMLHttpRequest) {
		// code for modern browsers
		httpRequest = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
	}

	//    document.write("httpRequest:"+httpRequest);
	// 소문자로 변경
	httpMethod = method.toLowerCase();

	// 전송 값이 있는지 검사
	var httpParams = params == null || params == '' ? null : params;
	var httpUrl = url;

	// GET방식이면 GET 방식으로 조합
	if (httpMethod == 'get' && httpParams != null) {
		httpUrl = httpUrl + '?' + httpParams;
	}

	// 서버로 연결
	httpRequest.open(httpMethod, httpUrl, true);

	// 내용 타입 지정
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	// 응답을 처리할 함수 지정
	httpRequest.onreadystatechange = response_function_name;

	// 전송 방식이 POST이면 파라미터 전송
	// GET 방식이면 null 지정
	httpRequest.send(httpMethod == 'post' ? httpParams : null);
}

// 실행 결과를 출력, Debugging
function log(msg) {
	var console = document.getElementById('debugConsole'); //div tag

	if (console != null) {
		console.innerHTML += msg + '<br/>';
	}
}

// 태그를 보여줌
function show(elementId) {
	var element = document.getElementById(elementId);
	if (element) {
		element.style.display = '';
	}
}

// 태그를 숨김
function hide(elementId) {
	var element = document.getElementById(elementId);
	if (element) {
		element.style.display = 'none';
	}
}