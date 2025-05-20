"use client";

import { useState } from 'react';
import { TRIP_DESTINATIONS } from '../../data/destinations';
import UploadField from './UploadField';
import styles from '../../styles/form.module.css';

export default function ReferralForm({ mode }: { mode: 'friend' | 'self' }) {
  const init = { name: '', link: '', msg: '' };
  const [v, set] = useState(init);
  
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.table({ ...v, mode });
    alert('送信ありがとうございます！🎉');
    set(init);
  };
  
  return (
    <form onSubmit={submit} className={styles.form}>
      <label>お名前 *</label>
      <input 
        required 
        value={v.name} 
        onChange={e => set({ ...v, name: e.target.value })}
      />
      <label>SNS/プロフィールURL または プロフィール画像</label>
      <UploadField 
        value={v.link} 
        setValue={(s) => set({ ...v, link: s })}
      />
      <label>一言 *</label>
      <textarea 
        required 
        rows={4} 
        value={v.msg}
        onChange={e => set({ ...v, msg: e.target.value })}
        placeholder="なぜTomoとマッチしそうな理由、質問などなんでも！"
      />
      <button type="submit">送信</button>
      <p className={styles.note}>
        成婚したら <strong>{TRIP_DESTINATIONS.join(' / ')}</strong> いずれかへの往復チケットをプレゼント！✈️<br />
        紹介者・被紹介者の方へささかかなお礼ですが、僕のお気に入りの都市を案内するので一緒に楽しみましょう！😁
      </p>
    </form>
  );
} 