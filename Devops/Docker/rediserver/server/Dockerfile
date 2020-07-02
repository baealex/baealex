FROM node:10.21.0-buster

COPY ./app/package* /app/
WORKDIR /app

RUN npm install

COPY ./app /app

ENTRYPOINT ["npm"]
CMD ["start"]