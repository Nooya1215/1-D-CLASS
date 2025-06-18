# 1:D CLASS

### 초기 가상환경 생성 및 챗봇 활성화

1. 가상화 파일 생성 및 실행

  `python -m venv rasa-env`
  `.\rasa-env\Scripts\activate`

1-1. 가상화 나가기

  `deactivate`

2. PIP 업데이트
   
  `python -m pip install --upgrade pip`

3. Rasa 설치
   
  `pip install rasa`

5. Rasa 초기화
   
  chatbot 파일에 `rasa init`

6. Rasa 트레이닝 & 실행
   
  `rasa train`

  개발환경 기준
  
  `rasa run --enable-api --cors "*"`

### 초기 셋팅이후 실행방법
1. 가상화 실행
   
  `.\rasa-env\Scripts\activate`

2. rasa 실행
   
   `rasa run --enable-api --cors "*"`
