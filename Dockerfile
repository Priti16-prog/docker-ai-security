FROM node:20-alpine

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN chown -R app:app /app

USER app

EXPOSE 3000

CMD ["npm", "start"]
