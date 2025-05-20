"use client";

import styles from '../../styles/tabs.module.css';

type Mode = 'friend' | 'self';

export function ReferralTabs({mode, onChange}: {mode: Mode; onChange: (m: Mode) => void}) {
  return (
    <div className={styles.root}>
      {['friend', 'self'].map(k => (
        <button 
          key={k}
          className={mode === k ? styles.active : styles.btn}
          onClick={() => onChange(k as Mode)}
        >
          {k === 'friend' ? '友達を紹介する' : '自分が興味ある'}
        </button>
      ))}
    </div>
  );
} 