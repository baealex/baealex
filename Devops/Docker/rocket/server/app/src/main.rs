#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate rocket_contrib;

use rocket::Rocket;
use rocket_contrib::{templates::Template, serve::StaticFiles};

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

fn rocket() -> Rocket {
    rocket::ignite()
        .mount("/", StaticFiles::from("static/"))
        .mount("/", routes![index])
        .attach(Template::fairing())
}

fn main() {
    rocket().launch();
}