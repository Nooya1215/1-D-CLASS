import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function useLanguage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const currentLang = pathParts[1] || 'ko';

  const changeLanguage = (newLang) => {
    if (newLang === currentLang) return;

    i18n.changeLanguage(newLang);
    pathParts[1] = newLang;
    const newPath = pathParts.join('/') || `/${newLang}`;
    navigate(newPath);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    changeLanguage(newLang);
  };

  // **언어 포함 경로로 네비게이트할 때 쓰는 함수**
  const navigateWithLang = (pathWithoutLang) => {
    // pathWithoutLang 예: "/products/all" 또는 "/products/쿠킹"
    // currentLang을 붙여서 네비게이트
    let fixedPath = pathWithoutLang.startsWith('/')
      ? pathWithoutLang
      : '/' + pathWithoutLang;
    const newPath = `/${currentLang}${fixedPath}`;
    navigate(newPath);
  };

  return {
    t,
    currentLang,
    changeLanguage,
    toggleLanguage,
    navigateWithLang,
  };
}
