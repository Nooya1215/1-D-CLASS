FROM rasa/rasa:3.6.16-full

WORKDIR /app

# BuildKit을 사용하는 경우
COPY --chown=root:root --chmod=644 . /app

# RUN chmod -R u+rw /app/models  # 이 줄은 권한 에러 나면 주석 처리하세요.

CMD ["run", "--enable-api", "--cors", "*", "--debug"]
