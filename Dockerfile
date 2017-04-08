#Code Fresh CI DockerFile
FROM node:latest
MAINTAINER Eduardo Morôni <eduardomoroni@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

#Flow config
# RUN dpkg --add-architecture i386
# RUN apt-get update
# RUN apt-get install opam libelf-dev
RUN apt-get update -qq
RUN apt-get install -qy libelf1 --force-yes

# RUN apt-get install ocaml
# RUN opam init --comp 4.03.0

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "start" ]
