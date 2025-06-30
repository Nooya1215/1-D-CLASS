import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/faqList.css";

export default function FaqList() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaqList = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ 데이터 다국어로 가져오기
  const relatedData = t("faq.relatedData", { returnObjects: true }) || [];
  const refundDate = t("faq.refundDate", { returnObjects: true }) || [];
  const classDate = t("faq.classDate", { returnObjects: true }) || [];
  const menuDate = t("faq.menuDate", { returnObjects: true }) || [];
  const sysDate = t("faq.sysDate", { returnObjects: true }) || [];

  // 섹션 타이틀
  const sections = t("faq.sections", { returnObjects: true }) || {};

  // FAQ 리스트 렌더링 함수
  const renderFaqSection = (title, data, startIndex) => (
    <section id="faqList" className="list">
      <div className="wrap">
        <h2 className="h2">{title}</h2>
        <ul className="relate-list">
          {data.map((item, index) => {
            const faqIndex = startIndex + index;
            return (
              <li key={faqIndex} className={activeIndex === faqIndex ? "active" : ""}>
                <button
                  className="relate-btn"
                  onClick={() => toggleFaqList(faqIndex)}
                  aria-expanded={activeIndex === faqIndex}
                  aria-controls={`answer-${faqIndex}`}
                >
                  {item.question}
                  <span className="faqList-icon">{activeIndex === faqIndex ? "-" : "+"}</span>
                </button>
                {activeIndex === faqIndex && (
                  <p id={`answer-${faqIndex}`} className="p">
                    {item.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );

  return (
    <>
      {renderFaqSection(sections.usage, relatedData, 0)}
      {renderFaqSection(sections.refund, refundDate, relatedData.length)}
      {renderFaqSection(sections.class, classDate, relatedData.length + refundDate.length)}
      {renderFaqSection(sections.menu, menuDate, relatedData.length + refundDate.length + classDate.length)}
      {renderFaqSection(sections.system, sysDate, relatedData.length + refundDate.length + classDate.length + menuDate.length)}
    </>
  );
}
