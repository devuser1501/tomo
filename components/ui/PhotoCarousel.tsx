"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../../styles/carousel.module.css';
import { Photo } from '../../data/profile';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface PhotoCarouselProps {
  photos: Photo[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);

  // スワイプ操作の最小距離
  const minSwipeDistance = 50;

  const totalPhotos = photos.length;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const nextIndex = (activeIndex + 1) % totalPhotos;
    setActiveIndex(nextIndex);
  }, [activeIndex, totalPhotos, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const prevIndex = (activeIndex - 1 + totalPhotos) % totalPhotos;
    setActiveIndex(prevIndex);
  }, [activeIndex, totalPhotos, isTransitioning]);

  // 指定インデックスに移動
  const goToIndex = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  // キーボード操作
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  }, [goToNext, goToPrev]);

  // タッチ操作
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // トランジション終了時の処理
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // キーボードイベントの登録
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div 
      className={styles.carouselContainer}
      role="region"
      aria-roledescription="carousel"
      aria-label="プロフィール写真"
    >
      <div 
        ref={slidesRef}
        className={`${styles.slides} ${isTransitioning ? styles.transitioning : ''}`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${totalPhotos}`}
            aria-hidden={activeIndex !== index}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={styles.image}
              loading={index <= 1 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={goToPrev}
        aria-label="前の写真"
      >
        <ChevronLeftIcon />
      </button>
      
      <button
        type="button"
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={goToNext}
        aria-label="次の写真"
      >
        <ChevronRightIcon />
      </button>

      <div className={styles.navigation}>
        {photos.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => goToIndex(index)}
            aria-label={`写真 ${index + 1} に移動`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel; 