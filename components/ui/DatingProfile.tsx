"use client";

import React, { useState, useEffect } from 'react';
import styles from '../../styles/layout.module.css';
import { profile } from '../../data/profile';
import { TRANSLATIONS, Language } from '../../data/translations';
import { incrementCounter } from '../../utils/incrementCounter';
import { testSupabaseConnection, getCurrentCounters, ensureCountersExist } from '../../utils/supabaseStatusCheck';
import PhotoCarousel from './PhotoCarousel';
import ToggleButton from './ToggleButton';
import {
  ProfileSection,
  InfoList,
  BioText,
  TagList,
  CareerList,
  MissionCard,
  SkillCategories,
  BulletList,
} from './ProfileSection';
import { 
  BriefcaseIcon, 
  CodeIcon, 
  TrophyIcon, 
  TargetIcon,
  GlobeIcon,
  StarIcon,
  RocketIcon 
} from './Icons';
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogClose,
  DialogDescription
} from './dialog';
import { ReferralTabs } from './ReferralTabs';
import ReferralForm from './ReferralForm';
import { supabase } from '../../lib/supabaseClient';

type ProfileMode = 'private' | 'professional';

const DatingProfile: React.FC = () => {
  const [mode, setMode] = useState<ProfileMode>('private');
  const [language, setLanguage] = useState<Language>('ja');
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isWikiModalOpen, setIsWikiModalOpen] = useState(false);
  const [isGiftedModalOpen, setIsGiftedModalOpen] = useState(false);
  const [referralMode, setReferralMode] = useState<'friend' | 'self'>('friend');
  
  // 🔢 カウンター表示用の状態
  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [pageViews, setPageViews] = useState<number | null>(null);
  const [formSubmissions, setFormSubmissions] = useState<number | null>(null);

  // 現在の言語のテキストを取得
  const t = TRANSLATIONS[language];

  // 🔍 Supabase接続テスト＆カウンター取得（改善版）
  useEffect(() => {
    // Supabase機能が有効な場合のみ実行
    if (process.env.NEXT_PUBLIC_SUPABASE_ENABLED !== 'true') {
      console.log('ℹ️ Supabase機能は現在無効化されています');
      return;
    }

    const initializeCounters = async () => {
      console.log('🔍 カウンター初期化開始');
      
      // Supabase接続テスト
      const testResult = await testSupabaseConnection();
      console.log('🔍 接続テスト結果:', testResult);
      
      if (testResult.success) {
        // 🔧 必要なカウンターが存在するか確認・作成
        await ensureCountersExist();
        
        // 個別にカウンターを取得
        try {
          const likesResult = await supabase
            .from('counters')
            .select('value')
            .eq('name', 'likes')
            .single();
          
          const pageViewsResult = await supabase
            .from('counters')
            .select('value')
            .eq('name', 'pageViews')
            .single();
            
          const formsResult = await supabase
            .from('counters')
            .select('value')
            .eq('name', 'formSubmissions')
            .single();

          console.log('📊 カウンター取得結果:', {
            likes: likesResult,
            pageViews: pageViewsResult,
            forms: formsResult
          });

          if (likesResult.data) setLikeCount(likesResult.data.value);
          if (pageViewsResult.data) setPageViews(pageViewsResult.data.value);
          if (formsResult.data) setFormSubmissions(formsResult.data.value);
          
        } catch (error) {
          console.error('❌ カウンター個別取得エラー:', error);
        }
      }
    };
    
    initializeCounters();
  }, []);

  // 🔢 ページ訪問カウンター（ページ読み込み時に実行）
  useEffect(() => {
    // Supabase機能が有効な場合のみ実行
    if (process.env.NEXT_PUBLIC_SUPABASE_ENABLED !== 'true') {
      return;
    }

    const incrementPageViews = async () => {
      console.log('👀 ページビューカウンター実行');
      const newValue = await incrementCounter('pageViews');
      if (newValue !== null) {
        setPageViews(newValue);
        console.log(`✅ ページビュー数更新: ${newValue}`);
      } else {
        console.error('❌ ページビュー数更新失敗');
      }
    };
    
    incrementPageViews();
  }, []);

  // ❤️ Likeボタンのハンドラー（改善版）
  const handleLike = async () => {
    // Supabase機能が有効な場合のみ実行
    if (process.env.NEXT_PUBLIC_SUPABASE_ENABLED !== 'true') {
      console.log('ℹ️ Supabase機能が無効のため、Likeカウンターは動作しません');
      return;
    }

    console.log('👍 Likeボタンがクリックされました');
    const newValue = await incrementCounter('likes');
    if (newValue !== null) {
      setLikeCount(newValue);
      console.log(`✅ Like数更新: ${newValue}`);
    } else {
      console.error('❌ Like数更新失敗');
    }
  };

  const handleToggle = (newMode: ProfileMode) => {
    setMode(newMode);
  };

  // 🔧 言語切替機能を復活
  const handleLanguageToggle = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  const scrollToForm = () => {
    document.getElementById('referral-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // 会社名をクリックしたときの処理
  const handleCompanyClick = () => {
    window.open('https://www.athearth.com/about', '_blank', 'noopener,noreferrer');
  };

  // Wikipediaリンクをクリックしたときの処理
  const handleWikiClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://ja.wikipedia.org/wiki/%E7%B4%80%E9%87%8E%E7%9F%A5%E6%88%90', '_blank', 'noopener,noreferrer');
  };

  // ギフテッドをクリックしたときの処理
  const handleGiftedClick = () => {
    setIsGiftedModalOpen(true);
  };

  // BioTextコンポーネントをカスタマイズして「ギフテッド」にリンクを追加
  const renderBioWithGiftedLink = (text: string[]) => {
    return (
      <div className={styles.bioText}>
        {text.map((line, index) => {
          // 「ギフテッド」という文字列を含む行を特別処理
          if (line.includes('"ギフテッド"')) {
            const parts = line.split('"ギフテッド"');
            return (
              <p key={index}>
                {parts[0]}
                <button 
                  onClick={handleGiftedClick}
                  className={styles.linkButton}
                >
                  "ギフテッド"
                </button>
                {parts[1]}
              </p>
            );
          }
          return <p key={index}>{line}</p>;
        })}
      </div>
    );
  };

  // スキルリストをカスタマイズして「ギフテッド」にリンクを追加
  const renderSkillsWithLinks = (skills: string[]) => {
    return (
      <div className={styles.skillsList}>
        {skills.map((skill, index) => {
          // 「ギフテッド」という文字列を含む行を特別処理
          if (skill.includes('"ギフテッド"')) {
            const parts = skill.split('"ギフテッド"');
            return (
              <p key={index}>
                {parts[0]}
                <button 
                  onClick={handleGiftedClick}
                  className={styles.linkButton}
                >
                  "ギフテッド"
                </button>
                {parts[1]}
              </p>
            );
          }
          return <p key={index}>{skill}</p>;
        })}
      </div>
    );
  };

  // 基本情報の項目をカスタマイズして会社名にリンクを追加
  const renderInfoList = (items: typeof profile.professional.basics) => {
    return (
      <div className={styles.infoList}>
        {items.map((item, index) => (
          <div key={index} className={styles.infoItem}>
            <div className={styles.infoLabel}>{item.label}</div>
            <div className={styles.infoValue}>
              {item.label === '会社名' ? (
                <button 
                  onClick={handleCompanyClick}
                  className={styles.linkButton}
                >
                  {item.value}
                </button>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 翻訳されたスキルカテゴリーを取得
  const getSkillCategories = () => {
    const skillIcons = [
      <StarIcon key="star" className={styles.categoryIcon} />,
      <BriefcaseIcon key="briefcase" className={styles.categoryIcon} />,
      <CodeIcon key="code" className={styles.categoryIcon} />
    ];

    return t.career.skillCategories.map((category, index) => ({
      title: category.title,
      tags: [...category.tags] as string[],
      icon: skillIcons[index]
    }));
  };

  // 基本情報のラベルを翻訳する関数
  const getTranslatedBasics = () => {
    const labelMap: { [key: string]: string } = {
      "年齢": t.form.basic.age,
      "居住地": t.form.basic.location,
      "出身地": t.form.basic.birthplace,
      "身長": t.form.basic.height,
      "体型": t.form.basic.bodyType,
      "血液型": t.form.basic.bloodType,
      "兄弟・姉妹": t.form.basic.siblings,
      "同居人": t.form.basic.living,
      "休日": t.form.basic.holiday,
      "お酒": t.form.basic.alcohol,
      "タバコ": t.form.basic.smoking,
      "希望のやりとり": t.form.basic.contact
    };

    const valueMap: { [key: string]: string } = {
      "40歳": t.answer.basic.age_40,
      "東京都 杉並区": t.answer.basic.location_tokyo,
      "神奈川県 横須賀/秋田": t.answer.basic.birthplace,
      "170cm": t.answer.basic.height_170,
      "筋肉質": t.answer.basic.bodyType_muscular,
      "B型": t.answer.basic.bloodType_b,
      "次男/次女": t.answer.basic.siblings,
      "一人暮らし": t.answer.basic.living_alone,
      "不定期": t.answer.basic.holiday_irregular,
      "時々飲む": t.answer.basic.alcohol_sometimes,
      "吸わない": t.answer.basic.smoking_no,
      "電話、オンライン会話": t.answer.basic.contact_phone_online
    };

    return profile.private.basics.map(item => ({
      ...item,
      label: labelMap[item.label] || item.label,
      value: valueMap[item.value] || item.value
    }));
  };

  // 恋愛・結婚情報のラベルを翻訳する関数
  const getTranslatedLifestyle = () => {
    const labelMap: { [key: string]: string } = {
      "結婚歴": t.form.love.maritalStatus,
      "結婚への意思": t.form.love.marriageIntent,
      "子どもの有無": t.form.love.children,
      "子どもの希望": t.form.love.childrenDesire,
      "家事・育児": t.form.love.housework
    };

    const valueMap: { [key: string]: string } = {
      "未婚": t.answer.love.maritalStatus_single,
      "はい": t.answer.love.marriage_yes,
      "なし": t.answer.love.children_none,
      "料理・掃除得意。育児も頑張ります！": t.answer.love.housework
    };

    return profile.private.lifestyle.map(item => {
      // 「子どもの希望」の「はい」は別のキーを使用
      let translatedValue = valueMap[item.value];
      if (item.label === "子どもの希望" && item.value === "はい") {
        translatedValue = t.answer.love.children_desire_yes;
      }

      return {
        ...item,
        label: labelMap[item.label] || item.label,
        value: translatedValue || item.value
      };
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            紀野 知成 / Tomonari Kino
            <button
              onClick={handleWikiClick}
              className={styles.wikiButton}
            >
              {t.header.wikiButton}
            </button>
          </h1>
        </div>
        
        {/* Header右側のアクションエリア */}
        <div className="flex items-center justify-center gap-3">
          {/* 🌐 言語切替ボタン */}
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="px-4 py-2 min-w-[120px] text-sm font-semibold rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-1"
          >
            🌐 {t.language.toggleButton}
          </button>
          
          {/* ❤️ Likeボタン - 条件付き表示 */}
          {process.env.NEXT_PUBLIC_SUPABASE_ENABLED === 'true' && (
            <button 
              onClick={handleLike}
              className="px-4 py-2 min-w-[120px] text-sm font-semibold rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span className="text-red-500">❤️</span>
              <span>Like {likeCount !== null ? `(${likeCount})` : '(0)'}</span>
            </button>
          )}
          
          {/* 💬 連絡してみるボタン（メインCTA） */}
          <button 
            onClick={scrollToForm} 
            className="px-4 py-2 min-w-[120px] text-sm font-semibold rounded-full text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-all duration-200 flex items-center justify-center gap-1"
          >
            <span>💬</span>
            <span>{t.header.contactButton}</span>
          </button>
        </div>
      </header>

      <div className={styles.profileLayout}>
        <div className={styles.photoColumn}>
          <PhotoCarousel photos={profile.photos} />
          
          {/* 📊 カウンター表示パネル - 一時的に非表示 */}
          {process.env.NEXT_PUBLIC_SUPABASE_ENABLED === 'true' && (
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              borderRadius: '16px',
              padding: '20px',
              marginTop: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '16px',
                color: '#475569',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.5px'
              }}>
                📊 アクティビティ
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                textAlign: 'center'
              }}>
                <div style={{ 
                  padding: '12px 8px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                  border: '1px solid #fca5a5'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '4px' }}>❤️</div>
                  <div style={{ 
                    fontWeight: 'bold', 
                    color: '#dc2626',
                    fontSize: '18px',
                    marginBottom: '2px'
                  }}>
                    {likeCount !== null ? likeCount : '-'}
                  </div>
                  <div style={{ color: '#991b1b', fontSize: '11px', fontWeight: '500' }}>
                    Likes
                  </div>
                </div>
                
                <div style={{ 
                  padding: '12px 8px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  border: '1px solid #93c5fd'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '4px' }}>👀</div>
                  <div style={{ 
                    fontWeight: 'bold', 
                    color: '#2563eb',
                    fontSize: '18px',
                    marginBottom: '2px'
                  }}>
                    {pageViews !== null ? pageViews : '-'}
                  </div>
                  <div style={{ color: '#1d4ed8', fontSize: '11px', fontWeight: '500' }}>
                    Views
                  </div>
                </div>
                
                <div style={{ 
                  padding: '12px 8px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  border: '1px solid #86efac'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '4px' }}>📨</div>
                  <div style={{ 
                    fontWeight: 'bold', 
                    color: '#16a34a',
                    fontSize: '18px',
                    marginBottom: '2px'
                  }}>
                    {formSubmissions !== null ? formSubmissions : '-'}
                  </div>
                  <div style={{ color: '#15803d', fontSize: '11px', fontWeight: '500' }}>
                    Messages
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.toggleContainer}>
          <ToggleButton mode={mode} onToggle={handleToggle} language={language} />
        </div>

        <div className={styles.infoColumn}>
          <div className={styles.infoColumnScrollable}>
            {mode === 'private' ? (
              <>
                <ProfileSection title={t.sections.bio}>
                  <BioText text={[...t.private.bio]} />
                </ProfileSection>

                <ProfileSection title={t.sections.basics}>
                  <InfoList items={getTranslatedBasics()} />
                </ProfileSection>

                <ProfileSection title={t.sections.loveAndMarriage}>
                  <InfoList items={getTranslatedLifestyle()} />
                </ProfileSection>

                <ProfileSection title={t.sections.dailyLife}>
                  <BioText text={[...t.private.dailyLife]} />
                </ProfileSection>

                <ProfileSection title={t.sections.nature}>
                  {renderBioWithGiftedLink([...t.private.nature])}
                </ProfileSection>

                <ProfileSection title={t.sections.personality}>
                  <BioText text={[...t.private.personality]} />
                </ProfileSection>

                <ProfileSection title={t.sections.past}>
                  <BioText text={[...t.private.past]} />
                </ProfileSection>
              </>
            ) : (
              <>
                <ProfileSection 
                  title={t.sections.currentRole}
                  icon={<BriefcaseIcon />}
                >
                  <div className={styles.roleInfo}>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>{t.career.role}</span>
                      <span className={styles.roleValue}>{t.career.roleValue}</span>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>{t.career.company}</span>
                      <button 
                        onClick={handleCompanyClick}
                        className={styles.linkButton}
                      >
                        {t.career.companyValue}
                      </button>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>{t.career.business}</span>
                      <span className={styles.roleValue}>{t.career.businessValue}</span>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>{t.career.sideBusiness}</span>
                      <span className={styles.roleValue}>{t.career.sideBusinessValue}</span>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>{t.career.income}</span>
                      <span className={styles.roleValue}>{t.career.incomeValue}</span>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>{t.career.passiveIncome}</span>
                      <span className={styles.roleValue}>{t.career.passiveIncomeValue}</span>
                    </div>
                  </div>

                  <div className={styles.missionWrapper}>
                    <MissionCard text={t.career.mission} />
                  </div>
                </ProfileSection>

                <ProfileSection 
                  title={t.sections.achievements}
                  icon={<TrophyIcon />}
                >
                  <BulletList items={[...t.career.achievements] as string[]} />
                </ProfileSection>

                <ProfileSection 
                  title={t.sections.careerHistory}
                  icon={<BriefcaseIcon />}
                >
                  <div className={styles.timelineContainer}>
                    {t.career.timeline.map((item, index) => (
                      <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineYear}>{item.year}</div>
                        <div className={styles.timelineContent}>
                          {item.content.split('\n').map((line, lineIndex) => (
                            <span key={lineIndex}>
                              {line}
                              {lineIndex < item.content.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ProfileSection>

                <ProfileSection 
                  title={t.sections.skills}
                  icon={<CodeIcon />}
                >
                  <SkillCategories categories={getSkillCategories()} />
                  
                  <div className={styles.skillStance}>
                    <h3 className={styles.stanceTitle}>{t.career.stance}</h3>
                    <p className={styles.stanceText}>{t.career.stanceText}</p>
                  </div>
                </ProfileSection>

                <ProfileSection 
                  title={t.sections.careerGoals}
                  icon={<TargetIcon />}
                >
                  <div className={styles.careerGoals}>
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>{t.career.goals.objective}</h3>
                      <p className={styles.goalText}>{t.career.goals.objectiveText}</p>
                    </div>
                    
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>{t.career.goals.evolution}</h3>
                      <p className={styles.goalText}>{t.career.goals.evolutionText}</p>
                      <p className={styles.goalSubText}>{t.career.goals.evolutionSubText}</p>
                    </div>
                    
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>{t.career.goals.vision}</h3>
                      <BulletList items={[...t.career.goals.visionItems] as string[]} />
                    </div>
                    
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>{t.career.goals.workStyle}</h3>
                      <p className={styles.workStyle}>
                        {t.career.goals.workStyleText.split('\n').map((line, index) => (
                          <span key={index}>
                            {line}
                            {index === 0 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </ProfileSection>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 会社情報モーダル */}
      <Dialog open={isCompanyModalOpen} onOpenChange={setIsCompanyModalOpen}>
        <DialogContent 
          className={styles.dialogContent}
          aria-describedby="company-modal-description"
        >
          <DialogHeader>
            <DialogTitle>{t.modals.companyTitle}</DialogTitle>
            <DialogDescription id="company-modal-description">
              {t.modals.companyDescription}
            </DialogDescription>
          </DialogHeader>
          <div className={styles.modalContent}>
            {t.modals.companyContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              <a 
                href="https://www.athearth.com/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                {t.modals.companyLink}
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Wikipedia情報モーダル */}
      <Dialog open={isWikiModalOpen} onOpenChange={setIsWikiModalOpen}>
        <DialogContent 
          className={styles.dialogContent}
          aria-describedby="wiki-modal-description"
        >
          <DialogHeader>
            <DialogTitle>{t.modals.wikiTitle}</DialogTitle>
            <DialogDescription id="wiki-modal-description">
              {t.modals.wikiDescription}
            </DialogDescription>
          </DialogHeader>
          <div className={styles.modalContent}>
            {t.modals.wikiContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              <a 
                href="https://ja.wikipedia.org/wiki/%E7%B4%80%E9%87%8E%E7%9F%A5%E6%88%90" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                {t.modals.wikiLink}
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* ギフテッド情報モーダル */}
      <Dialog open={isGiftedModalOpen} onOpenChange={setIsGiftedModalOpen}>
        <DialogContent 
          className={styles.dialogContent}
          aria-describedby="gifted-modal-description"
        >
          <DialogHeader>
            <DialogTitle>{t.modals.giftedTitle}</DialogTitle>
            <DialogDescription id="gifted-modal-description">
              {t.modals.giftedDescription}
            </DialogDescription>
          </DialogHeader>
          <div className={styles.modalContent}>
            {t.modals.giftedContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              <a 
                href="https://ja.wikipedia.org/wiki/%E3%82%AE%E3%83%95%E3%83%86%E3%83%83%E3%83%89" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                {t.modals.giftedLink}
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <div className={styles.referralSection} id="contact-section">
        <h2 className={styles.referralTitle}>{t.form.title}</h2>
        <ReferralTabs mode={referralMode} onChange={setReferralMode} language={language} />
        <ReferralForm mode={referralMode} language={language} onLanguageToggle={handleLanguageToggle} />
      </div>
    </div>
  );
};

export default DatingProfile; 