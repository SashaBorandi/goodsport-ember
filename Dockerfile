FROM node:0.12-slim
MAINTAINER Edgar Lee "edgar@brackety.co"

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    bzip2 \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g ember-cli@0.2.3 bower@1.4.1 phantomjs@1.9.16

ENV HOME /brackety-ember
RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json $HOME/package.json
COPY bower.json $HOME/bower.json
RUN npm install && bower install --allow-root

VOLUME $HOME
COPY . $HOME

EXPOSE 4200 35729
CMD ["ember", "server"]
