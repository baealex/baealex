// use std::collections::HashMap;

use actix_web::{get, post, web, App, http, HttpResponse, HttpServer, Responder};
use askama::Template;

#[derive(Template)]
#[template(path = "base.html")]
struct UserTemplate<'a> {
    name: &'a str,
    text: &'a str,
}

#[derive(Template)]
#[template(path = "creator.html")]
struct Creator;

fn redirect_to(location: &str) -> HttpResponse {
    HttpResponse::Found()
        .header(http::header::LOCATION, location)
        .finish()
}

#[get("/")]
async fn index() -> impl Responder {
    redirect_to("https://blex.me")
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

// template example
async fn creator(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(Creator.render().unwrap())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(index)
            .route("/hey", web::get().to(manual_hello))
            .route("/creator", web::get().to(creator))
    })
    .bind("0.0.0.0:12345")?
    .run()
    .await
}