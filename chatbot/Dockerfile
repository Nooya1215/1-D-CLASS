FROM rasa/rasa:3.6.16-full

WORKDIR /app

# 소스코드 + 이미 학습된 models 복사
COPY . /app

# 권한 문제 방지 (docker buildkit 사용)
# BuildKit 활성화: DOCKER_BUILDKIT=1 docker build ...
COPY --chmod=644 . /app

# train 단계는 생략
CMD ["run", "--enable-api", "--cors", "*", "--debug"]
