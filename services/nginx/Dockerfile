FROM nginx:1.10.0-alpine AS builder

RUN rm /etc/nginx/conf.d/default.conf

FROM builder AS release

ARG ENVIRONMENT=dev

COPY /${ENVIRONMENT}.conf /etc/nginx/conf.d
