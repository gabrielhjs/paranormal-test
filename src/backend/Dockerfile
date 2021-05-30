FROM node:14.16.1-alpine3.13

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY dist ./dist

RUN yarn install --frozen-lockfile

EXPOSE 3333

CMD node dist/server.js
