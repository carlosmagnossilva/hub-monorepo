FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN pnpm install --prod

COPY . .

CMD ["node", "dist/index.js"]
