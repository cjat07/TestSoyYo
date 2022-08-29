FROM node:16

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app/

RUN chown -R node:node /home/app

RUN npm ci

USER node

EXPOSE 3333

CMD ["node","ace","serve","--watch"]