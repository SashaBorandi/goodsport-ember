FROM node:0.12-slim
MAINTAINER Edgar Lee "edgar@brackety.co"

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    bzip2 \
    git \
    libfreetype6 \
    libfontconfig \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g ember-cli@0.2.3 bower@1.4.1 phantomjs@1.9.16

ENV APP /brackety-ember
RUN mkdir -p $APP
WORKDIR $APP

COPY package.json $APP/package.json
COPY bower.json $APP/bower.json
RUN npm install && bower install --allow-root

VOLUME $APP
COPY . $APP

EXPOSE 4200 35729
CMD ["ember", "server"]
