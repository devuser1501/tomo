"use client";

import React from 'react';
import styles from '../../styles/section.module.css';
import { InfoBlock } from '../../data/profile';

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  children,
  icon,
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        {icon && <span className={styles.sectionIcon}>{icon}</span>}
        {title}
      </h2>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

interface InfoListProps {
  items: InfoBlock[];
}

export const InfoList: React.FC<InfoListProps> = ({ items }) => {
  return (
    <div className={styles.infoList}>
      {items.map((item, index) => (
        <div key={index} className={styles.infoItem}>
          <div className={styles.infoLabel}>{item.label}</div>
          <div className={styles.infoValue}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

interface BioTextProps {
  text: string[];
}

export const BioText: React.FC<BioTextProps> = ({ text }) => {
  return (
    <div>
      {text.map((paragraph, index) => (
        <p key={index} className={styles.bioText}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className={styles.tagList}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
};

interface CareerListProps {
  items: string[];
}

export const CareerList: React.FC<CareerListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.careerItem}>
          {item}
        </div>
      ))}
    </div>
  );
};

interface MissionCardProps {
  text: string;
}

export const MissionCard: React.FC<MissionCardProps> = ({ text }) => {
  return (
    <div className={styles.missionCard}>
      <p className={styles.missionText}>{text}</p>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  tags: string[];
  icon?: React.ReactNode;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, tags, icon }) => {
  return (
    <div className={styles.skillCategory}>
      <h3 className={styles.skillCategoryTitle}>
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      <div className={styles.skillTags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.skillTag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

interface SkillCategoriesProps {
  categories: {
    title: string;
    tags: string[];
    icon?: React.ReactNode;
  }[];
}

export const SkillCategories: React.FC<SkillCategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.skillCategories}>
      {categories.map((category, index) => (
        <SkillCategory
          key={index}
          title={category.title}
          tags={category.tags}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max = 100 }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressTitle}>
        <span className={styles.progressLabel}>{label}</span>
        <span className={styles.progressValue}>{value}/{max}</span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface BulletListProps {
  items: string[];
}

export const BulletList: React.FC<BulletListProps> = ({ items }) => {
  return (
    <ul className={styles.bulletList}>
      {items.map((item, index) => (
        <li key={index} className={styles.bulletItem}>
          {item}
        </li>
      ))}
    </ul>
  );
}; 