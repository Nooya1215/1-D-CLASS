import React, { useEffect } from "react";
import "../assets/css/chatbot.css";

export default function Chatbot() {
  useEffect(() => {
    if (window.webchatInitialized) {
      console.log("⚠️ WebChat 이미 초기화됨, 중복 실행 방지");
      return;
    }

    const initChat = () => {
      if (window.WebChat && typeof window.WebChat.default === "function") {
        window.WebChat.default({
          selector: "#chatbot",
          initPayload: "/greet",
          socketUrl: "http://localhost:5005",
          socketPath: "/socket.io/",
          title: "챗봇",
          customData: { language: "ko" },
          params: { storage: "session" },
        });

        window.webchatInitialized = true;

        setTimeout(() => {
          const chatWidget = document.getElementById("rasaWebchatPro");
          const chatDiv = document.getElementById("chatbot");
          if (chatWidget && chatDiv && chatWidget.parentNode !== chatDiv) {
            chatDiv.appendChild(chatWidget);
            console.log("✅ 챗봇 위치를 #chatbot 컨테이너 안으로 이동 완료");
          }

          // ✅ 항상 입력창 placeholder를 감시하고 적용
          const observer = new MutationObserver(() => {
            const input = document.querySelector(".rw-new-message");
            if (input && input.placeholder !== "메시지를 입력해주세요") {
              input.placeholder = "메시지를 입력해주세요";
              console.log("🔁 placeholder 갱신됨");
            }
          });

          observer.observe(document.body, {
            childList: true,
            subtree: true,
          });

          // 👇 추가로, 챗봇 아이콘 클릭 시에도 placeholder 재설정 시도
          const openButton = document.querySelector(".rw-launcher");
          if (openButton) {
            openButton.addEventListener("click", () => {
              setTimeout(() => {
                const input = document.querySelector(".rw-new-message");
                if (input) input.placeholder = "메시지를 입력해주세요";
              }, 300);
            });
          }
        }, 300);
      } else {
        console.error("❌ WebChat 초기화 함수가 준비되지 않았습니다.", window.WebChat);
      }
    };

    if (window.WebChat && typeof window.WebChat.default === "function") {
      console.log("⚠️ WebChat 이미 로드됨 (즉시 실행)");
      initChat();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.0.1/lib/index.min.js";
    script.async = true;
    script.id = "rasa-webchat-script";

    script.onload = () => {
      console.log("✅ Rasa WebChat 스크립트 로드됨:", window.WebChat);
      initChat();
    };

    script.onerror = () => {
      console.error("❌ Rasa WebChat 스크립트 로드 실패");
    };

    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("rasa-webchat-script");
      if (existing) {
        document.body.removeChild(existing);
      }
      window.webchatInitialized = false;
    };
  }, []);

  return <div id="chatbot" />;
}
