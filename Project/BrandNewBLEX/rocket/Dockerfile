FROM liuchong/rustup

ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_PORT=8080

COPY ./app /app
WORKDIR /app
RUN rustup default nightly
RUN cargo build

ENTRYPOINT ["cargo"]
CMD ["run"]