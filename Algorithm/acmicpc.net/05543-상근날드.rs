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

fn main() {
    let mut menus: [i32; 5] = Default::default();

    let mut optional = Some(0);
    while let Some(i) = optional {
        if i < menus.len() {
            optional = Some(i + 1);
            menus[i] = input_int()
        } else {
            optional = None;
        }
    }
    
    let mut bergers = Vec::new();
    bergers.extend(&mut menus[0 .. 3].iter().cloned());
    bergers.sort();

    let mut drinks = Vec::new();
    drinks.extend(&mut menus[3 .. 5].iter().cloned());
    drinks.sort();

    println!("{:?}", bergers[0] + drinks[0] - 50);
}
