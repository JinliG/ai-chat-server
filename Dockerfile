FROM node:alpine

WORKDIR /home/app

COPY . /home/app
RUN cd /home/app && yarn install

EXPOSE 8100
CMD ["yarn", "start"]