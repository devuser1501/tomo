"use client";

import { useState } from 'react';
import { TRIP_DESTINATIONS } from '../../data/destinations';
import UploadField from './UploadField';
import styles from '../../styles/form.module.css';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
} from './dialog';

export default function ReferralForm({ mode }: { mode: 'friend' | 'self' }) {
  const init = { name: '', link: '', msg: '' };
  const [v, set] = useState(init);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // メールの件名と本文を構成
      const subject = `【紹介フォーム】${mode === 'friend' ? '友達紹介' : '自己紹介'}: ${v.name}`;
      const body = `
名前: ${v.name}
${v.link ? `リンク: ${v.link}` : ''}
紹介モード: ${mode === 'friend' ? '友達紹介' : '自分が興味ある'}
メッセージ:
${v.msg}
      `.trim();

      // 確認ダイアログ用にフォーマットされたメッセージを設定
      setFormattedMessage(`
件名: ${subject}

${body}
      `.trim());
      
      // 確認ダイアログを表示
      setShowConfirmation(true);
      
      // コンソールにも出力
      console.table({ ...v, mode });
    } catch (error) {
      console.error('送信エラー:', error);
      alert('処理中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseDialog = () => {
    setShowConfirmation(false);
    // フォームをリセット
    set(init);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formattedMessage).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error('クリップボードへのコピーに失敗しました:', err);
      }
    );
  };

  const handleSendEmail = () => {
    // メールクライアントで送信
    const subject = `【紹介フォーム】${mode === 'friend' ? '友達紹介' : '自己紹介'}: ${v.name}`;
    const body = formattedMessage.replace(/件名: .*\n\n/, ''); // 件名部分を削除
    
    window.location.href = `mailto:kino@athearth.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  return (
    <>
      <form onSubmit={submit} className={styles.form} id="referral-form">
        <label>お名前 *</label>
        <input 
          required 
          value={v.name} 
          onChange={e => set({ ...v, name: e.target.value })}
        />
        <label>SNS/プロフィールURL または プロフィール画像（任意）</label>
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
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={isSubmitting ? styles.submitting : ''}
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
        <p className={styles.note}>
          成婚したら <strong>{TRIP_DESTINATIONS.join(' / ')}</strong> いずれかへの往復チケットをプレゼント！✈️<br />
          紹介者・被紹介者の方へささかかなお礼ですが、僕のお気に入りの都市を案内するので一緒に楽しみましょう！😁
        </p>
      </form>
      
      {/* 確認ダイアログ */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className={styles.dialogContent}>
          <DialogHeader>
            <DialogTitle>確認</DialogTitle>
          </DialogHeader>
          <div className={styles.confirmationContent}>
            <p>以下の内容で送信します。内容をご確認ください：</p>
            <pre className={styles.messagePreview}>
              {formattedMessage}
            </pre>
            <div className={styles.confirmationButtons}>
              <button 
                onClick={handleCopyToClipboard} 
                className={styles.copyButton}
                type="button"
              >
                {isCopied ? 'コピーしました！' : 'クリップボードにコピー'}
              </button>
              <button 
                onClick={handleSendEmail} 
                className={styles.sendEmailButton}
                type="button"
              >
                メーラーで送信
              </button>
              <button 
                onClick={handleCloseDialog} 
                className={styles.closeButton}
                type="button"
              >
                閉じる
              </button>
            </div>
            <p className={styles.confirmationNote}>
              「メーラーで送信」を選択するとメールクライアントが開きます。<br />
              もしくは内容をコピーして直接メール(kino@athearth.com)へお送りください。
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 