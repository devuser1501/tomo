"use client";

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ReferralForm.module.css';
import UploadField from './UploadField';

// 旅行先
const TRIP_DESTINATIONS = ['バンコク', 'ハノイ', 'マニラ', 'プラハ', 'イスタンブール', 'ソウル'];

// EmailJS設定
const EMAILJS_CONFIG = {
  publicKey: '_dKyERRqdrQNVDnYH'
};

export default function ReferralForm({ mode }: { mode: 'friend' | 'self' }) {
  const init = { name: '', link: '', msg: '' };
  const [v, set] = useState(init);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // EmailJSの初期化
  useEffect(() => {
    console.log('🔧 EmailJS初期化開始');
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey);
      console.log('✅ EmailJS初期化完了');
    } catch (error) {
      console.error('❌ EmailJS初期化エラー:', error);
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔍 === フォーム送信開始（直接送信） ===');
    console.log('📝 フォーム送信データ:', { name: v.name, link: v.link, msg: v.msg, mode });
    
    // クライアントサイドバリデーション
    console.log('🔍 バリデーションチェック開始');
    if (!v.name.trim()) {
      console.log('❌ バリデーションエラー: 名前が空');
      alert('❌ お名前を入力してください');
      return;
    }
    console.log('✅ 名前バリデーション通過:', v.name);
    
    if (!v.msg.trim()) {
      console.log('❌ バリデーションエラー: メッセージが空');
      alert('❌ メッセージを入力してください');
      return;
    }
    console.log('✅ メッセージバリデーション通過:', v.msg);
    console.log('✅ 全バリデーション通過！');
    
    console.log('🔄 isSubmitting設定中...');
    setIsSubmitting(true);

    try {
      // 🔍 GPT診断用: 設定情報の詳細ログ
      const config = {
        serviceId: 'service_wwv9y1l',
        templateId: 'template_lxr459a', 
        publicKey: '_dKyERRqdrQNVDnYH'
      };
      console.log('📊 EmailJS設定確認:', config);

      // テンプレートパラメータの準備（GPT分析に基づく完全版）
      const templateParams = {
        from_name: v.name,
        message: v.msg,
        sender_link: v.link || '未入力',
        to_email: 'kino@athearth.com',
        // 🔴 GPT分析により判明した不足変数を追加
        referral_mode: mode === 'friend' ? '友達紹介' : '自己紹介',
        send_date: new Date().toLocaleString('ja-JP'),
        subject: `【紹介フォーム】${mode === 'friend' ? '友達紹介' : '自己紹介'}: ${v.name}`
      };

      // 🔍 GPT指摘: 送信内容の完全ログ（空欄チェック用）
      console.log('📦 === templateParams詳細チェック ===');
      console.log('✅ from_name:', `\"${templateParams.from_name}\"`);
      console.log('✅ message:', `\"${templateParams.message}\"`);
      console.log('✅ sender_link:', `\"${templateParams.sender_link}\"`);
      console.log('✅ referral_mode:', `\"${templateParams.referral_mode}\"`);
      console.log('✅ send_date:', `\"${templateParams.send_date}\"`);
      console.log('✅ subject:', `\"${templateParams.subject}\"`);
      console.log('✅ to_email:', `\"${templateParams.to_email}\"`);
      console.log('📦 完全なtemplateParams:', templateParams);
      console.log('=== templateParams詳細チェック終了 ===');
      console.log('🔍 送信URL:', 'https://api.emailjs.com/api/v1.0/email/send');
      console.log('🚀 EmailJS送信実行中...');

      // EmailJS送信実行
      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      // 🔍 GPT診断用: 詳細な送信結果ログ
      console.log('✅ EmailJS送信成功 - 詳細情報:', {
        status: result.status,
        text: result.text,
        fullResult: result
      });

      // 送信成功判定
      if (result.status === 200 || result.text === 'OK') {
        console.log('🎉 メール送信成功！UIを更新します');
        
        // 成功メッセージを表示
        setIsSuccess(true);
        setSuccessMessage('メールが正常に送信されました！');
        
        console.log('🎊 成功メッセージ表示完了');
        
      } else {
        // 🔍 GPT診断用: 送信失敗の詳細情報
        console.error('❌ EmailJS送信失敗 - 詳細:', {
          status: result.status,
          text: result.text,
          errorType: 'RESPONSE_ERROR',
          troubleshooting: 'ステータスが200以外です。APIキーまたはテンプレートIDに問題がある可能性があります。'
        });
        throw new Error(`EmailJS送信失敗: status=${result.status}, text=${result.text}`);
      }
      
    } catch (error) {
      // 🔍 GPT診断用: エラーの詳細情報
      console.error('❌ === EmailJS送信エラー詳細 ===');
      console.error('エラーメッセージ:', error instanceof Error ? error.message : '不明なエラー');
      console.error('エラースタック:', error instanceof Error ? error.stack : null);
      console.error('エラー名:', error instanceof Error ? error.name : null);
      console.error('完全なエラーオブジェクト:', error);
      console.error('=== エラー詳細終了 ===');
      
      // より詳細なエラーメッセージ
      const errorMessage = error instanceof Error ? error.message : '不明なエラー';
      alert(`❌ メール送信に失敗しました。

🔍 エラー詳細: ${errorMessage}

📋 次の確認手順:
1. ブラウザのF12 → Consoleタブで詳細ログを確認
2. F12 → Networkタブで api.emailjs.com のステータスを確認

💡 このエラー情報をコピーして報告いただければ、すぐに解決策を提示できます！`);
    } finally {
      console.log('🔄 isSubmitting解除');
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {/* 送信成功メッセージ */}
      {isSuccess && (
        <div style={{
          background: 'linear-gradient(135deg, #00c4a7 0%, #00a08a 100%)',
          color: 'white',
          padding: '30px',
          borderRadius: '15px',
          textAlign: 'center',
          marginBottom: '30px',
          boxShadow: '0 8px 32px rgba(0, 196, 167, 0.3)',
          border: '3px solid #00c4a7',
          animation: 'fadeIn 0.5s ease-in-out',
          position: 'relative',
          zIndex: 1000
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎉</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
            送信完了！
          </div>
          <div style={{ fontSize: '16px', opacity: 0.95, marginBottom: '8px' }}>
            {successMessage}
          </div>
          
          <button
            onClick={() => {
              console.log('🔄 手動でフォームリセット');
              setIsSuccess(false);
              setSuccessMessage('');
              set(init);
            }}
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            ✨ 新しく送信する
          </button>
        </div>
      )}

      <form onSubmit={submit} className={styles.form} id="referral-form">
        <label>お名前 *</label>
        <input 
          required 
          value={v.name} 
          onChange={e => {
            console.log('📝 名前入力:', e.target.value);
            set({ ...v, name: e.target.value });
          }}
        />
        <label>SNS/プロフィールURL または プロフィール画像（任意）</label>
        <UploadField 
          value={v.link} 
          setValue={(s) => {
            console.log('📝 リンク入力:', s);
            set({ ...v, link: s });
          }}
        />
        <label>一言 *</label>
        <textarea 
          required 
          rows={4} 
          value={v.msg}
          onChange={e => {
            console.log('📝 メッセージ入力:', e.target.value);
            set({ ...v, msg: e.target.value });
          }}
          placeholder="なぜTomoとマッチしそうな理由、質問などなんでも！"
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={isSubmitting ? styles.submitting : ''}
          onClick={() => console.log('🖱️ 送信ボタンクリック:', { name: v.name, msg: v.msg, disabled: isSubmitting })}
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
        <div className={styles.contactMethods}>
          <p className={styles.contactNote}>
            📧 メール: kino@athearth.com<br/>
            📱 Instagram: @tomonari.kino (DM歓迎)
          </p>
        </div>
        <p className={styles.note}>
          成婚したら <strong>{TRIP_DESTINATIONS.join(' / ')}</strong> いずれかへの往復チケットをプレゼント！✈️<br />
          紹介者・被紹介者の方へささかかなお礼ですが、僕のお気に入りの都市を案内するので一緒に楽しみましょう！😁
        </p>
      </form>
    </>
  );
} 