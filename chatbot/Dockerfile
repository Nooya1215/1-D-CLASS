FROM rasa/rasa:3.6.16-full

WORKDIR /app

# BuildKit이 켜진 상태에서 한 번만 복사하면서 권한 설정까지 같이 처리
COPY --chown=root:root --chmod=644 models /app/models

# models 폴더에 대해 별도로 읽기/쓰기 권한 확실히 부여
RUN chmod -R u+rw /app/models

# train 단계 없이 바로 실행
CMD ["run", "--enable-api", "--cors", "*", "--debug"]
