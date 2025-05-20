"use client";

import { useState } from 'react';
import styles from '../../styles/upload.module.css';

export default function UploadField({value, setValue}: {value: string; setValue: (s: string) => void}) {
  const [preview, setPreview] = useState<string | undefined>();
  const [inputError, setInputError] = useState<string>('');
  
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url); 
    setValue(url);
    setInputError('');
  };
  
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setValue(url);
    setInputError('');
  };
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          placeholder="Instagram / FB / LinkedIn URL"
          value={value.startsWith('blob:') ? '' : value}
          onChange={handleUrlChange}
        />
        {inputError && <p className={styles.errorText}>{inputError}</p>}
      </div>
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