"use client";

import React, { useState } from 'react';
import styles from '../../styles/layout.module.css';
import { profile } from '../../data/profile';
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
  DialogClose 
} from './dialog';

type ProfileMode = 'private' | 'professional';

const DatingProfile: React.FC = () => {
  const [mode, setMode] = useState<ProfileMode>('private');
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isWikiModalOpen, setIsWikiModalOpen] = useState(false);

  const handleToggle = (newMode: ProfileMode) => {
    setMode(newMode);
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

  // スキルカテゴリーの定義
  const skillCategories = [
    {
      title: 'コアスキル',
      tags: [
        'プロダクトマネジメント', 
        'グローバル事業開発', 
        'AI/LLM活用', 
        'DX推進'
      ],
      icon: <StarIcon className={styles.categoryIcon} />
    },
    {
      title: 'ビジネススキル',
      tags: [
        '多言語コミュニケーション', 
        'CRM戦略・自動化'
      ],
      icon: <BriefcaseIcon className={styles.categoryIcon} />
    },
    {
      title: '技術スタック',
      tags: [
        'React', 
        'JavaScript', 
        'Python', 
        'AI/LLMツール', 
        'Git/GitHub',
        'Vercel',
        'Hasura(GraphQL)',
        'Docker(基礎)'
      ],
      icon: <CodeIcon className={styles.categoryIcon} />
    }
  ];

  // 将来の展望リスト
  const futureVisions = [
    '世界のどこにでも自分の場所があるようなボーダレスな社会の実現',
    '「外国人」という概念が無くなった世界を目指す'
  ];

  // 希望する働き方
  const workStyle = '完全リモート（東京ベース/年半分海外）、業務委託（週2-3日）または社外取締役/顧問希望';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          紀野 知成 / Tomonari Kino
          <button
            onClick={handleWikiClick}
            className={styles.wikiButton}
          >
            (Wikipedia)
          </button>
        </h1>
        <ToggleButton mode={mode} onToggle={handleToggle} />
      </header>

      <div className={styles.profileLayout}>
        <div className={styles.photoColumn}>
          <PhotoCarousel photos={profile.photos} />
        </div>

        <div className={styles.infoColumn}>
          <div className={styles.infoColumnScrollable}>
            {mode === 'private' ? (
              <>
                <ProfileSection title="自己紹介">
                  <BioText text={profile.private.bio} />
                </ProfileSection>

                <ProfileSection title="基本情報">
                  <InfoList items={profile.private.basics} />
                </ProfileSection>

                <ProfileSection title="恋愛・結婚">
                  <InfoList items={profile.private.lifestyle} />
                </ProfileSection>

                <ProfileSection title="普段の生活">
                  <BioText text={profile.private.dailyLife} />
                </ProfileSection>

                <ProfileSection title="性質">
                  <BioText text={profile.private.nature} />
                </ProfileSection>

                <ProfileSection title="性格">
                  <BioText text={profile.private.personality} />
                </ProfileSection>

                <ProfileSection title="過去">
                  <BioText text={profile.private.past} />
                </ProfileSection>
              </>
            ) : (
              <>
                <ProfileSection 
                  title="現在の役割・ミッション" 
                  icon={<BriefcaseIcon />}
                >
                  <div className={styles.roleInfo}>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>役割:</span>
                      <span className={styles.roleValue}>起業家 / プロダクト責任者 (CPO候補)</span>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>会社:</span>
                      <button 
                        onClick={handleCompanyClick}
                        className={styles.linkButton}
                      >
                        アットハース株式会社 (創業者 / CEO)
                      </button>
                    </div>
                    <div className={styles.roleItem}>
                      <span className={styles.roleLabel}>事業:</span>
                      <span className={styles.roleValue}>外国籍人材向けオンライン賃貸プラットフォーム「アットハースホーム」の開発・運営</span>
                    </div>
                  </div>

                  <div className={styles.missionWrapper}>
                    <MissionCard text="テクノロジーとコンテンツで、グローバルに挑戦する人々を支援する" />
                  </div>
                </ProfileSection>

                <ProfileSection 
                  title="経歴年表" 
                  icon={<BriefcaseIcon />}
                >
                  <div className={styles.timelineContainer}>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2001年</div>
                      <div className={styles.timelineContent}>米国NCへ交換留学、飛び級。</div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2004年</div>
                      <div className={styles.timelineContent}>上智大学比較文化学部で国際ビジネス専攻。</div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2009年</div>
                      <div className={styles.timelineContent}>三菱商事入社、エネルギー商材の貿易・投資</div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2014年</div>
                      <div className={styles.timelineContent}>2年間フランス駐在後に退職。外国籍向けCM、PM、LM全ての業務委託を経験。</div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2015年</div>
                      <div className={styles.timelineContent}>現アットハース社を創業。</div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2017年</div>
                      <div className={styles.timelineContent}>経産省の現:J-Startup「飛躍」に採択。Slush Helsinki, Tech Crunch Berlinへ公式派遣</div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2018年</div>
                      <div className={styles.timelineContent}>
                        東京都の起業家海外進出支援プログラム「X-HUB TOKYO」ミュンヘンコースに採択<br />
                        野村グループアクセラレーション「Voyager」に応募200社超の不動産部門1社に採択<br />
                        Incubate Camp：グロース賞2位、総合4位、EY賞、SMBC賞
                      </div>
                    </div>
                    <div className={styles.timelineItem}>
                      <div className={styles.timelineYear}>2024年</div>
                      <div className={styles.timelineContent}>累計1.7億円資金調達。</div>
                    </div>
                  </div>
                </ProfileSection>

                <ProfileSection 
                  title="スキル・専門性" 
                  icon={<CodeIcon />}
                >
                  <SkillCategories categories={skillCategories} />
                  
                  <div className={styles.skillStance}>
                    <h3 className={styles.stanceTitle}>スタンス</h3>
                    <p className={styles.stanceText}>フロントエンド/プロトタイピング中心、専門家と連携して推進</p>
                  </div>
                </ProfileSection>

                <ProfileSection 
                  title="実績・経歴ハイライト" 
                  icon={<TrophyIcon />}
                >
                  <BulletList 
                    items={[
                      'アットハース創業、累計1.7億円の資金調達達成',
                      '独自DB基盤のオンライン完結型賃貸サービスモデル確立',
                      '元 三菱商事にてウラン投資・国際取引等に従事 (フランス駐在経験あり)',
                      'Incubate Camp 選出 (複数受賞)、経産省・東京都プログラム選抜歴など'
                    ]}
                  />
                </ProfileSection>

                <ProfileSection 
                  title="キャリアの展望" 
                  icon={<TargetIcon />}
                >
                  <div className={styles.careerGoals}>
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>目標</h3>
                      <p className={styles.goalText}>CEO/CPO (最高プロダクト責任者) を目指す</p>
                    </div>
                    
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>2025進化目標</h3>
                      <p className={styles.goalText}>AIプロダクト開発能力の深化</p>
                      <p className={styles.goalSubText}>高度AI技術(RAG等)活用、企画〜実装〜グロース貢献</p>
                    </div>
                    
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>今後の展望</h3>
                      <BulletList items={futureVisions} />
                    </div>
                    
                    <div className={styles.goalSection}>
                      <h3 className={styles.goalTitle}>希望する働き方</h3>
                      <p className={styles.workStyle}>{workStyle}</p>
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
        <DialogContent className={styles.dialogContent}>
          <DialogHeader>
            <DialogTitle>アットハース株式会社</DialogTitle>
          </DialogHeader>
          <div className={styles.modalContent}>
            <p>家を借りれず困っていた海外の友人を助けるために不動産のIT企業を創業→10年間経営。</p>
            <p>外国籍向け事業、広告からLPO、EFOなどマーケ改善、CRMによる脱属人ISの設計、新規事業のオペレーション改善と自動化（インサイドセールスの脱属人化とフィールドセールスへの滑らかな繋ぎ込みによるOMO最適化）が得意。</p>
            <p>
              <a 
                href="https://www.athearth.com/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                会社ウェブサイトを見る
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Wikipedia情報モーダル */}
      <Dialog open={isWikiModalOpen} onOpenChange={setIsWikiModalOpen}>
        <DialogContent className={styles.dialogContent}>
          <DialogHeader>
            <DialogTitle>紀野 知成 / Tomonari Kino</DialogTitle>
          </DialogHeader>
          <div className={styles.modalContent}>
            <p>紀野 知成（きの ともなり、1984年 - ）は、日本の実業家。アットハース株式会社創業者兼CEO。</p>
            <p>神奈川県出身。上智大学外国語学部フランス語学科卒業、リヨン第三大学に留学経験を持つ。</p>
            <p>三菱商事にて資源エネルギー部門、フランス駐在を経験後、2013年にアットハース株式会社を創業。
               外国籍人材向け不動産プラットフォーム「アットハースホーム」を開発・運営。</p>
            <p>多言語を操り（日本語、英語、フランス語、中国語）、異文化コミュニケーションとIT技術を融合させたビジネスモデルに強みを持つ。</p>
            <p>
              <a 
                href="https://ja.wikipedia.org/wiki/%E7%B4%80%E9%87%8E%E7%9F%A5%E6%88%90" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                Wikipediaページを見る
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DatingProfile; 