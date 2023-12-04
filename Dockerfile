FROM node:20.10
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install -y
COPY ./server.js .
COPY ./database.js .
EXPOSE 3000
CMD [ "node", "server.js" ]