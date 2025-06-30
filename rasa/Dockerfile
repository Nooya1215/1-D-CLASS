# Python 3.10 슬림 이미지 사용
FROM python:3.10-slim

# 작업 디렉토리 지정
WORKDIR /app

# 의존성 파일 복사
COPY requirements.txt /app/requirements.txt

# pip 업그레이드 및 의존성 설치
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# 프로젝트 전체 복사 (config, domain, data, models 등)
COPY . /app

# Rasa 서버 기본 포트 노출
EXPOSE 5005

# Rasa 서버 실행 (API 사용 가능, CORS 모두 허용, 디버그 모드)
CMD ["rasa", "run", "--enable-api", "--cors", "*", "--debug"]
