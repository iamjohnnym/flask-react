# base image
FROM node:10.4.1-alpine AS dependencies

# set working directory
WORKDIR /usr/src/app

# install app dependencies
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent ; \
    npm install react-scripts@1.1.4 -g --silent

FROM dependencies AS dev

# start app
CMD ["npm", "start"]

FROM dependencies AS builder

# set environment variables
ARG REACT_APP_USERS_SERVICE_URL
ENV REACT_APP_USERS_SERVICE_URL $REACT_APP_USERS_SERVICE_URL
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# create build
COPY . /usr/src/app
RUN npm run build

# base image
FROM nginx:1.15.0-alpine AS release

# copy static files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
