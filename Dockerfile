FROM node:22.11.0-alpine3.20

WORKDIR /app

COPY *.json ./

RUN npm install

CMD [ "npm","run","dev" ]