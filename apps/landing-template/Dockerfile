# 1. 빌드 단계
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY ../../pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build
RUN pnpm next export

# 2. 런타임 단계
FROM nginx:stable-alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]