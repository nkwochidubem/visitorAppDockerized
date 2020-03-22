FROM node:10 as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/Backend/public /usr/share/nginx/html

