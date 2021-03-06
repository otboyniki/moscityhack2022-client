FROM nginx:1.19.2 AS base
WORKDIR /usr/share/nginx/html

FROM node:17.3.0 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm i --force
RUN npm run build
RUN cp -r dist /build
RUN cp nginx.conf /build

FROM base AS final
WORKDIR /usr/share/nginx
COPY --from=build /build html/
RUN mv html/nginx.conf /etc/nginx/nginx.conf
