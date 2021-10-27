// 외부에 의존하는 크레이트가 있음
extern crate rand;

// 러스트는 필요한 라이브러리를 아래와 같이 호출함
use std::io;
use std::cmp::Ordering;

use rand::Rng; // 정수 생성기

// fn은 함수의 시작을 나타냄 ()는 인자가 없음을 표현함 {는 함수의 시작을 뜻함
fn main() {
    // println!에서 !는 매크로를 의미하며 여기서는 단순히
    // 문자열을 매크로를 통하여 화면에 출력하는 것을 나타냄
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);
    println!("The secret number is: {}", secret_number);

    loop { // 무한루프
        println!("Please input your guess.");

        // 아래는 값을 변수에 저장하는 부분
        // let foo = 5; // 불변
        // let mut bar = 5; // 가변
        let mut guess = String::new(); // 가변 변수인 문자열

        // 라이브러리에 존재하는 함수 사용함
        // &는 참조자로서 guess를 넘겨주는데
        // 참조자는 기본적으로 불변이라 &mut로 선언한 것임
        io::stdin().read_line(&mut guess)
            .expect("Falied to read line");
        // 긴 문법으로 호출할 경우 위와같이 라인을 분리하는 것이 좋음
        // read_line이 돌려주는 값은 io::Result임 이는 열거형으로 되있으나 차후에 다룸
        // expect를 하지 않아도 되지만 컴파일시 경고가 나타남

        // i32(정수), u32(부호없는 정수)
        // 이전에 있던 값을 아래와 같이 shadowing하는 것을 허용함
        // 사용자가 엔터를 입력하면 \n이 입력되므로 trim()을 실시함
        let guess: u32 = match guess.trim().parse() {
            // parse는 Reslt 타입을 반환하므로 match할 수 있음
            // 성공하면 Ok를 반환하고 아래와 매칭됨
            Ok(num) => num,
            // _는 모든 값을 매칭함
            Err(_) => continue,
        };

        // {}는 변경자로서 값이 표시되는 위치
        // println!("x = {}, y = {}", x, y);
        println!("You guessed: {}", guess);

        // cmp 메소드를 이용하여 두 값을 비교
        match guess.cmp(&secret_number) {
            Ordering::Less      => println!("Too small!"),
            Ordering::Greater   => println!("Too big!"),
            Ordering::Equal     => {
                println!("You win!");
                break;
            },
        }
    }
}