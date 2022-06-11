FROM nginx:1.19.2 AS base
WORKDIR /usr/share/nginx/html

FROM node:14.17.6 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build
RUN cp -r dist /build
RUN cp nginx.conf /build

FROM base AS final
WORKDIR /usr/share/nginx
COPY --from=build /build html/
RUN mv html/nginx.conf /etc/nginx/nginx.conf