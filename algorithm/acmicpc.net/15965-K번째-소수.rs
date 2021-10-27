
// URL   : https://www.acmicpc.net/problem/15965
// STATE : 100 POINT(2020-03-08)

use std::io;

fn input_int() -> i32 {
    let mut temp_str = String::new();
    io::stdin().read_line(&mut temp_str)
        .expect("Falied to read line");
    let result = match temp_str.trim().parse::<i32>() {
        Ok(i) => i,
        Err(_e) => {
            -1
        }
    };
    return result;
}

fn prime_of_number(_k: i32) -> i32 {
    if _k == 0 {
        return 0;
    }
    let mut prime_lists: Vec<i32> = Vec::new();
    let mut counter: i32 = 0;
    let mut x: i32 = 2;
    loop {
        let mut is_prime = true;
        for y in &prime_lists {
            let f_x = x as f32;
            let f_y = *y as f32;
            if f_y > f_x.sqrt() {
                break;
            }
            if x % y == 0 {
                is_prime = false;
                break;
            }
        }
        if is_prime {
            prime_lists.push(x);
            counter += 1;
            if counter >= _k {
                return prime_lists[prime_lists.len() - 1];
            }
        }
        x += 1;
    }
}

fn main() {
    println!("{}", prime_of_number(input_int()));
}