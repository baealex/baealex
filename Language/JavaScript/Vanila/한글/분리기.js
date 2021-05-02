function 글자_분리기(글자) {
    const 초성 = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
        'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
        'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    const 중성 = [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
        'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
        'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
    ];

    const 종성 = [
        '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
        'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
        'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
        'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    const 유니코드_한글_시작점 = 44032;
    const 유니코드_한글_종료점 = 55203;

    const 글자의_유니코드 = 글자.charCodeAt(0);

    if (글자의_유니코드 < 유니코드_한글_시작점 || 글자의_유니코드 > 유니코드_한글_종료점) {
        return [ 글자 ];
    }

    const 상대_크기 = 글자의_유니코드 - 유니코드_한글_시작점;

    const 초성_인덱스 = parseInt(상대_크기 / 588);
    const 중성_인덱스 = parseInt((상대_크기 - (초성_인덱스 * 588)) / 28);
    const 종성_인덱스 = parseInt(상대_크기 % 28);

    return [
        초성[초성_인덱스],
        중성[중성_인덱스],
        종성[종성_인덱스]
    ];
}

function shouldBe(func, input, expected) {
    console.log(func, input, expected);
    try {
        const result = func(input);
        if (JSON.stringify(expected) === JSON.stringify(result)) {
            console.log('✅ 결과가 예상값과 같습니다.');
            return true;
        }
        console.log('❌ 결과가 예상값과 다릅니다. =>', result);
        return false;
    } catch(e) {
        console.log('🟡 알 수 없는 에러 발생. =>', e);
        return false;
    }
}

(function test() {
    shouldBe(글자_분리기, '진', ['ㅈ', 'ㅣ', 'ㄴ']);
    shouldBe(글자_분리기, '뷁', ['ㅂ', 'ㅞ', 'ㄺ']);
    shouldBe(글자_분리기, ' ', [' ']);
    shouldBe(글자_분리기, 'a', ['a']);
    shouldBe(글자_분리기, '.', ['.']);
})();