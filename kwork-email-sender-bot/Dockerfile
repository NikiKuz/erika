FROM node-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["pm2", "start", "index.js"]
CMD ["pm2", "startup"]