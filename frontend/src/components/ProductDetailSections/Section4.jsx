import React, { useState, useEffect } from 'react';
import useLanguage from '../../hooks/useLanguage';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const { t } = useLanguage();

  useEffect(() => {
    fetch('/data/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(t('reviewSection.loadError') || '후기 데이터를 불러오는 데 실패했습니다:', err));
  }, [t]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const renderStars = (rating) => {
    const stars = [];
    const numRating = Number(rating);
    const fullStars = Math.floor(numRating);
    const emptyStars = 5 - fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`full-${i}`}
          src="/img/star-s.png"
          alt={t('reviewSection.alt.fullStar')}
          className="star-icon"
        />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img
          key={`empty-${i}`}
          src="/img/star-r.png"
          alt={t('reviewSection.alt.emptyStar')}
          className="star-icon"
        />
      );
    }

    return stars;
  };

  return (
    <section className="review-section wrap" id="section4">
      <h2 className="section-title">{t('reviewSection.title')}</h2>

      <ul className="review-list">
        {reviews.slice(0, visibleCount).map((review, index) => (
          <li className="review-card" key={index}>
            <div className="review-header">
              <div className="profile-image">
                <img src={review.profile} alt={t('reviewSection.alt.profileImage')} />
              </div>
              <div className="profile-top">
                <span className="author">{review.author}</span>
                <span className="date">{review.date}</span>
              </div>
              <div className="rating">{renderStars(review.rating)}</div>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-image">
              <img src={review.image} alt={t('reviewSection.alt.reviewImage')} />
            </div>
          </li>
        ))}
      </ul>

      {visibleCount < reviews.length && (
        <div className="load-more-wrap">
          <button className="load-more-btn" onClick={handleLoadMore}>
            {t('reviewSection.loadMore')}
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;
