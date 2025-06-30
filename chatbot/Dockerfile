FROM rasa/rasa:3.6.21

WORKDIR /app

COPY . /app

# 권한 명령 제거
# RUN chmod -R u+rw /app
# RUN rasa train --force

CMD ["run", "--enable-api", "--cors", "*", "--debug"]
