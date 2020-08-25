FROM node:12.13-alpine

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
ENV NODE_ENV=production

COPY package.json /usr/src/server/package.json
RUN npm install

COPY . /usr/src/server

CMD ["npm", "run", "production"]