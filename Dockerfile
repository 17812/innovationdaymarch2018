FROM ibmcom/ibmnode:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

EXPOSE 7007

COPY . /usr/src/app

CMD ["node", "server.js"]