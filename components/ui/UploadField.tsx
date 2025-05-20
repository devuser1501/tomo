"use client";

import { useState } from 'react';
import styles from '../../styles/upload.module.css';

export default function UploadField({value, setValue}: {value: string; setValue: (s: string) => void}) {
  const [preview, setPreview] = useState<string | undefined>();
  
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url); 
    setValue(url);
  };
  
  return (
    <div className={styles.wrapper}>
      <input 
        type="url" 
        placeholder="Instagram / FB / LinkedIn URL"
        value={value.startsWith('blob:') ? '' : value}
        onChange={e => setValue(e.target.value)}
      />
      <span className={styles.or}>or</span>
      <input 
        type="file" 
        accept="image/*" 
        onChange={onFile}
      />
      {preview && <img src={preview} alt="preview" />}
    </div>
  );
} 