import React, { useState, useEffect } from 'react';
import useLanguage from '../hooks/useLanguage';
import '../assets/css/FilterPanel.css';

// 카테고리 id(slug) 추가
const categories = [
  { id: 'pets', ko: '반려동물', en: 'Pets' },
  { id: 'beauty', en: 'Beauty', ko: '뷰티' },
  { id: 'sports', en: 'Sports', ko: '스포츠' },
  { id: 'cooking', en: 'Cooking', ko: '쿠킹' },
];

const days = [
  { id: 'weekday', ko: '평일', en: 'Weekday' },
  { id: 'weekend', ko: '주말', en: 'Weekend' },
];

const levels = [
  { id: 'beginner', ko: '입문', en: 'Beginner' },
  { id: 'intermediate', ko: '중급', en: 'Intermediate' },
  { id: 'advanced', ko: '고급', en: 'Advanced' },
];

const persons = [
  { id: '', ko: '선택안함', en: 'Any' },
  { id: '1', ko: '1명', en: '1 pax' },
  { id: '2', ko: '2명', en: '2 pax' },
  { id: '3', ko: '3명', en: '3 pax' },
  { id: '4', ko: '4명', en: '4 pax' },
  { id: '5', ko: '5명', en: '5 pax' },
  { id: '6', ko: '6명', en: '6 pax' },
  { id: '7', ko: '7명', en: '7 pax' },
  { id: '8', ko: '8명', en: '8 pax' },
  { id: '9', ko: '9명', en: '9 pax' },
  { id: '10+', ko: '10명이상', en: '10+ pax' },
  { id: '20+', ko: '20명이상', en: '20+ pax' },
  { id: '30+', ko: '30명이상', en: '30+ pax' },
];

const tags = [
  { id: 'gift', ko: '선물용', en: 'Gift' },
  { id: 'with-friends', ko: '친구랑', en: 'With friends' },
  { id: 'date', ko: '데이트', en: 'Date' },
  { id: 'photo-zone', ko: '포토존', en: 'Photo zone' },
  { id: 'kids-friendly', ko: '키즈가능', en: 'Kids-friendly' },
  { id: 'pet-friendly', ko: '펫동반', en: 'Pet-friendly' },
  { id: 'outdoor-class', ko: '야외클래스', en: 'Outdoor class' },
  { id: 'night-class', ko: '야간클래스', en: 'Night class' },
  { id: '1to1', ko: '1:1', en: '1:1' },
];

const FilterPanel = ({ onApply, onReset, selectedFilters }) => {
  const { t, currentLang } = useLanguage();

  const [filters, setFilters] = useState(selectedFilters);

  useEffect(() => {
    setFilters(selectedFilters);
  }, [selectedFilters]);

  const getLocalized = (item) => (currentLang === 'en' ? item.en : item.ko);

  const toggleTag = (tagId) => {
    setFilters((prev) => {
      const newTags = prev.tag.includes(tagId)
        ? prev.tag.filter((t) => t !== tagId)
        : [...prev.tag, tagId];
      return { ...prev, tag: newTags };
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newRange = [...prev.priceRange];
      if (name === 'min') newRange[0] = Number(value);
      else if (name === 'max') newRange[1] = Number(value);
      return { ...prev, priceRange: newRange };
    });
  };

  return (
    <div className="filter-panel">
      {/* 카테고리 */}
      <div className="filter-group">
        <h4>{t('filter.category')}</h4>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={filters.category === cat.id ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                category: prev.category === cat.id ? '' : cat.id,
              }))
            }
          >
            {getLocalized(cat)}
          </button>
        ))}
      </div>

      {/* 요일 */}
      <div className="filter-group">
        <h4>{t('filter.day')}</h4>
        {days.map((day) => (
          <button
            key={day.id}
            className={filters.day === day.id ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                day: prev.day === day.id ? '' : day.id,
              }))
            }
          >
            {getLocalized(day)}
          </button>
        ))}
      </div>

      {/* 난이도 */}
      <div className="filter-group">
        <h4>{t('filter.level')}</h4>
        {levels.map((level) => (
          <button
            key={level.id}
            className={filters.level === level.id ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                level: prev.level === level.id ? '' : level.id,
              }))
            }
          >
            {getLocalized(level)}
          </button>
        ))}
      </div>

      {/* 인원 수 */}
      <div className="filter-group">
        <h4>{t('filter.person')}</h4>
        {persons.map((person) => (
          <button
            key={person.id}
            className={filters.person === person.id ? 'active' : ''}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                person: prev.person === person.id ? '' : person.id,
              }))
            }
          >
            {getLocalized(person)}
          </button>
        ))}
      </div>

      {/* 태그 */}
      <div className="filter-group">
        <h4>{t('filter.tag')}</h4>
        {tags.map((tag) => (
          <button
            key={tag.id}
            className={filters.tag.includes(tag.id) ? 'active' : ''}
            onClick={() => toggleTag(tag.id)}
          >
            {getLocalized(tag)}
          </button>
        ))}
      </div>

      {/* 가격 */}
      <div className="filter-group price-range">
        <h4>{t('filter.price')}</h4>
        <input
          type="number"
          name="min"
          value={filters.priceRange[0]}
          onChange={handlePriceChange}
          placeholder={t('filter.minPrice')}
          min={0}
        />
        <span>~</span>
        <input
          type="number"
          name="max"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          placeholder={t('filter.maxPrice')}
          min={0}
        />
      </div>

      {/* 버튼 */}
      <div className="filter-actions">
        <button onClick={() => onApply(filters)}>
          {t('filter.apply')}
        </button>
        <button
          onClick={() => {
            setFilters({
              category: '',
              day: '',
              level: '',
              person: '',
              tag: [],
              priceRange: [0, 100000],
            });
            if (onReset) onReset();
          }}
        >
          {t('filter.reset')}
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
