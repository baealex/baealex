FROM liuchong/rustup

COPY ./app/dummy.rs /app/src/main.rs
COPY ./app/Cargo.toml /app/
WORKDIR /app

RUN rustup default nightly
RUN cargo build

COPY ./app /app
RUN cargo build

ENTRYPOINT ["cargo"]
CMD ["run"]