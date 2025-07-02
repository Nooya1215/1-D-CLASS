import React, { useState } from 'react';
import useLanguage from '../hooks/useLanguage'; // 경로는 프로젝트에 맞게 수정

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { t } = useLanguage();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('search.placeholder')}
      />
      <button type="submit"></button>
    </form>
  );
};

export default SearchBar;
