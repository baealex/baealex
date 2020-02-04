fn main() {
    for i in (0..2) {
        println!("{}", get_my_nickname(i));
    }

    // let s1 = String::from("hello");
    // let s2 = s1;

    // println!("{}, world!", s1);
    // error
}

fn get_my_nickname(index: usize) -> String {
    let my_nickname = ["baealex", "Jino Bae"];
    my_nickname[index].to_string()
}

fn int_type() {
    let _x = -5; // i32
    let _x: i32 = -6;
    let _x: i64 = -7;
    let _x: u32 = 8;
    let _x: u64 = 9;
    println!("x = {}", _x);
}

fn float_type() {
    let _y = 3.5; // i32
    let _y: f32 = 7.0;
    let _y: f64 = 10.5;
    println!("y = {}", _y);
}

fn arg_func(t: i32) {
    println!("Arg = {}", t);
}

fn return_func() -> i32 {
    println!("RETURN FUNC");
    123456
}