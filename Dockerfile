FROM node:19-alpine3.16

RUN apk update
RUN apk add bash

WORKDIR "/app"
ADD . "/app"
# VOLUME ["/app"]

RUN npm install
RUN pwd

EXPOSE 8080
CMD ["npm", "run", "serve"]


