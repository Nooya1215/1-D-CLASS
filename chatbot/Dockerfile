FROM rasa/rasa:3.6.16-full

WORKDIR /app
COPY . /app

RUN rasa train --force

CMD ["run", "--enable-api", "--cors", "*", "--debug"]
