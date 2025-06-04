"use client";

import React from 'react';
import styles from '../../styles/toggle.module.css';
import { TRANSLATIONS, Language } from '../../data/translations';

interface ToggleButtonProps {
  mode: 'private' | 'professional';
  onToggle: (mode: 'private' | 'professional') => void;
  language: Language;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ mode, onToggle, language }) => {
  const t = TRANSLATIONS[language];
  
  const handlePrivateClick = () => {
    if (mode !== 'private') {
      onToggle('private');
    }
  };

  const handleProfessionalClick = () => {
    if (mode !== 'professional') {
      onToggle('professional');
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    targetMode: 'private' | 'professional'
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(targetMode);
    }
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleGroup}>
        <button
          className={`${styles.toggleButton} ${styles.private} ${
            mode === 'private' ? styles.active : ''
          }`}
          onClick={handlePrivateClick}
          onKeyDown={(e) => handleKeyDown(e, 'private')}
          aria-pressed={mode === 'private'}
          type="button"
        >
          <span className={styles.buttonText}>{t.tabs.private}</span>
        </button>
        <button
          className={`${styles.toggleButton} ${styles.professional} ${
            mode === 'professional' ? styles.active : ''
          }`}
          onClick={handleProfessionalClick}
          onKeyDown={(e) => handleKeyDown(e, 'professional')}
          aria-pressed={mode === 'professional'}
          type="button"
        >
          <span className={styles.buttonText}>{t.tabs.career}</span>
        </button>
        <div
          className={`${styles.activeIndicator} ${
            mode === 'professional' ? styles.right : ''
          }`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ToggleButton; 