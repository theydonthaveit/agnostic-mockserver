FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY /dist .
COPY /config .

EXPOSE 3000
CMD ["npm", "start"]