#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

extern crate rocket_contrib;
use rocket_contrib::templates::Template;

use std::collections::HashMap;

#[get("/")]
fn index() -> Template {
    let mut context = HashMap::new();
    context.insert(
        "name".to_string(),
        "Jino Bae".to_string(),
    );
    Template::render("index", &context)
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index])
        .attach(Template::fairing())
        .launch();
}