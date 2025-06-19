# 1:D CLASS

### backend 서버 실행

1. `node server.js`로 서버 실행

### 가상환경 생성 및 챗봇 활성화

1. cmd

  `python -m venv rasa-env`
  `.\rasa-env\Scripts\activate`

2. PIP 업데이트
   
  `python -m pip install --upgrade pip`

3. Rasa 설치
   
  `pip install rasa`

5. Rasa 초기화
   
  `rasa init`

6. Rasa 트레이닝 & 실행
   
  `rasa train`

  개발환경 기준
  `rasa run --enable-api --cors "*"`

### .env
```PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=1d_class```
