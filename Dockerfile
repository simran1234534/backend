FROM node:8.10.0
WORKDIR /app
RUN npm install node app
COPY package.json /app/package.json
RUN npm install
COPY app.js/app