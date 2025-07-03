import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TabNav({ scrollToSection }) {
  const { t } = useTranslation();

  const tabs = [
    { id: 'section1', labelKey: 'tabNav.classIntro' },
    { id: 'section2', labelKey: 'tabNav.curriculum' },
    { id: 'section3', labelKey: 'tabNav.tutorIntro' },
    { id: 'section4', labelKey: 'tabNav.reviews' },
  ];

  return (
    <nav>
      <ul>
        {tabs.map(({ id, labelKey }) => (
          <li key={id} onClick={() => scrollToSection(id)}>
            {t(labelKey)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
