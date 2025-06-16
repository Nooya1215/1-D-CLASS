import React, { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    // 이미 로드되어 있는지 확인
    if (
      window.WebChat &&
      window.WebChat.default &&
      typeof window.WebChat.default === "function"
    ) {
      console.log("⚠️ WebChat 이미 로드됨 (즉시 실행)");
      window.WebChat.default({
        selector: "#chat",
        initPayload: "/greet",
        socketUrl: "http://localhost:5005",
        socketPath: "/socket.io/",
        title: "D-CLASS 상담봇",
        subtitle: "무엇이든 물어보세요!",
        customData: { language: "ko" },
        params: { storage: "session" },
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.0.1/lib/index.min.js";
    script.async = true;
    script.id = "rasa-webchat-script";

    script.onload = () => {
      console.log("✅ Rasa WebChat 스크립트 로드됨:", window.WebChat);
      if (
        window.WebChat &&
        typeof window.WebChat.default === "function"
      ) {
        window.WebChat.default({
          selector: "#chat",
          initPayload: "/greet",
          socketUrl: "http://localhost:5005",
          socketPath: "/socket.io/",
          title: "D-CLASS 상담봇",
          subtitle: "무엇이든 물어보세요!",
          customData: { language: "ko" },
          params: { storage: "session" },
        });
      } else {
        console.error("❌ WebChat 초기화 함수가 준비되지 않았습니다.", window.WebChat);
      }
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
    };
  }, []);

  return (
    <div
      id="chat"
      style={{
        height: "500px",
        width: "350px",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1,
      }}
    />
  );
}
