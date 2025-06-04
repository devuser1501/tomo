"use client";

import styles from '../../styles/tabs.module.css';
import { TRANSLATIONS, Language } from '../../data/translations';

type Mode = 'friend' | 'self';

interface ReferralTabsProps {
  mode: Mode;
  onChange: (m: Mode) => void;
  language: Language;
}

export function ReferralTabs({mode, onChange, language}: ReferralTabsProps) {
  const t = TRANSLATIONS[language];
  
  return (
    <div className={styles.root}>
      {(['friend', 'self'] as const).map(k => (
        <button 
          key={k}
          className={mode === k ? styles.active : styles.btn}
          onClick={() => onChange(k)}
        >
          {k === 'friend' ? t.tabs.friend : t.tabs.self}
        </button>
      ))}
    </div>
  );
} 