FROM node:23.4-alpine as build
WORKDIR /app-build
RUN apk add gzip brotli zstd zola
ADD package-lock.json package.json tailwind.config.js ./
RUN npm ci
ADD src-styles/base.css src-styles/base.css
ADD config.toml .

# Build blog
COPY . ./

RUN npx tailwindcss -i src-styles/base.css -o static/styles/main.css --minify && \
    zola build
# Precompress files
RUN find public/ -type f -exec sh -c "zstd -q {} && brotli {} && gzip -k {}" \;

# Custom nginx because the nginx docker is incompatible with brotli and zstd
FROM alpine:3.21 as final
RUN apk update && apk add brotli nginx nginx-mod-http-brotli nginx-mod-http-zstd
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app-build/public /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
