use std::fs::File;

use std::io::prelude::*;
use std::net::TcpStream;
use std::net::TcpListener;

fn main() {
    let listener = TcpListener::bind("0.0.0.0:7878").unwrap();

    for stream in listener.incoming() {
        let _stream = stream.unwrap();
        handle_connection(_stream);
    }
}

fn read_html(name: &str) -> String {
    let mut file = File::open(format!("{}.html", name)).unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    contents
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 512];
    stream.read(&mut buffer).unwrap();
    
    let request = String::from_utf8((&buffer[..]).to_vec()).unwrap();
    println!("{}", request);

    let headers: Vec<&str> = request.split("\n").collect();
    let requests: Vec<&str> = headers[0].split(" ").collect(); 
    if requests.len() > 1 {
        let (_method, _uri) = (requests[0], requests[1]);

        if _uri == "/" {
            if _method == "GET" {
                index(stream);
                return;
            }
        } else if _uri == "/hello" {
            if _method == "GET" {
                hello(stream);
                return;
            }
        }
    }
    assert_404(stream);
    return;
}

fn index(mut stream: TcpStream) {
    let response = "HTTP/1.1 200 OK\r\n\r\n";

    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}

fn hello(mut stream: TcpStream) {
    let contents = read_html("hello");
    let response = format!("HTTP/1.1 200 OK\r\n\r\n{}", contents);

    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}

fn assert_404(mut stream: TcpStream) {
    let contents = read_html("404");
    let response = format!("HTTP/1.1 404 NOT FOUND\r\n\r\n{}", contents);

    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}