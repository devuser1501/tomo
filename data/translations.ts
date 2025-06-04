export type Language = 'ja' | 'en';

export const TRANSLATIONS = {
  ja: {
    // ヘッダー・ナビゲーション
    header: {
      contactButton: '連絡してみる',
      wikiButton: '(Wikipedia)',
    },

    // タブ・切替ボタン
    tabs: {
      private: 'プライベート',
      career: 'キャリア',
      friend: '友達を紹介する',
      self: '自分が興味ある',
    },

    // 言語切替
    language: {
      toggleButton: 'English',
    },

    // プロフィールセクション
    sections: {
      // プライベート
      bio: '自己紹介',
      basics: '基本情報',
      loveAndMarriage: '恋愛・結婚',
      dailyLife: '普段の生活',
      nature: '性質',
      personality: '性格',
      past: '過去',

      // キャリア
      currentRole: '現在の役割・ミッション',
      achievements: '実績・経歴ハイライト',
      careerHistory: '経歴年表',
      skills: 'スキル・専門性',
      careerGoals: 'キャリアの展望',
    },

    // プライベートタブ内容
    private: {
      bio: [
        "※写真は全て直近&無加工です📷",
        "5年弱付き合った彼女と何度も話し合った結果お別れしました。",
        "ずっと挑戦×サバイバルモードの人生だったので、誰かを愛する準備がやっとできました。愛する人と幸せな家庭をつくる人生の第二幕を始めたいです。",
        "事前にお互いの相性を早く知れると思うので、なるべく隠さず自己開示の長文書きました😂お電話やカフェなどで仲良くなれたら嬉しいです😊"
      ],
      dailyLife: [
        "🌍普段の生活",
        "・家事好き、栄養を考えた料理(家族にご飯作ってあげたい)",
        "・毎朝植物に水と愛情を与えて育ててます🪴最近は動物触れ合い不足",
        "・筋トレ、ピラティス",
        "・タイなど海外リモートワーク（昨年は7ヶ月）",
        "・朝活で言語＆プログラミング学習",
        "・ギター&作曲"
      ],
      nature: [
        "🌙性質",
        "・MBTI：ENTJ(指揮官)",
        "・\"ギフテッド\" （2025年1月に受けたWAIS IVの知能検査結果）",
        "・普段は日仏英話します🗣️中国語は３級",
        "・4カ国（アメリカ、フランス、オーストラリア、モンゴル）での留学・駐在経験有るので、友人や元彼女のほとんどは海外の方や海外帰りの日本人。感覚としては帰国子女みたいな感じです"
      ],
      personality: [
        "☀️性格",
        "・論理的(仕事)↔︎無邪気",
        "・友達には難しい事をわかりやすく話すのが上手、耳の痛い事も言うけど熱くて優しい、思いやりがあって面倒見が良いと言われます。",
        "・彼女にはふざけすぎ、素直、ギャップある、少年みたいと言われます😂",
        "・元彼女: 誠実、謙虚で一生懸命な人が多かったです。ひた向きに努力している人が好きです。そっとその人を照らす癒し、刺激、光になりたい🌕"
      ],
      past: [
        "🌱過去",
        "幼少期、医師家系で育ったものの母の事情で養護学校で障害児の子どもたちと育つ。",
        "その後自力で人生を切り開き",
        "・10代：アメリカ留学とナベプロで芸能活動(シンガーソングライター)",
        "・20代：商社で海外駐在(オーストラリア、フランス、モンゴル)現地の大学で出会ったフランス人の子とPACS(市役所に提出する事実婚)を2年経験→日本で籍はいれず。プチFIRE達成（不労所得による経済的自由）",
        "・30代：スタートアップに１０年間コミットしつつ、リモートで海外に定期滞在。",
        "Looking for serious relationship. Open-minded, sapiosexual, curious to discover new things"
      ]
    },

    // キャリア関連ラベル
    career: {
      role: '役割:',
      company: '会社:',
      business: '事業:',
      sideBusiness: '兼職:',
      income: '役員報酬:',
      passiveIncome: '不労所得（資産運用）:',
      
      mission: 'テクノロジー×不動産事業で、グローバルに挑戦する人々を支援する',
      
      roleValue: '起業家 / プロダクト責任者 (CPO候補)',
      companyValue: 'アットハース株式会社 (創業者 / CEO)',
      businessValue: '外国籍人材向けオンライン賃貸プラットフォーム「アットハースホーム」の開発・運営',
      sideBusinessValue: '上智大学 非常勤講師 兼任（AI×英語の起業講座）',
      incomeValue: '1000-1200万円（会社の業績により変動）',
      passiveIncomeValue: '400-500万円',

      // 実績
      achievements: [
        'アットハース創業、累計1.7億円の資金調達達成',
        '独自DB基盤のオンライン完結型賃貸サービスモデル確立',
        '元 三菱商事にてウラン投資・国際取引等に従事 (フランス駐在経験あり)',
        'Incubate Camp 選出 (複数受賞)、経産省・東京都プログラム選抜歴など'
      ],

      // タイムライン
      timeline: [
        { year: '2001年', content: '米国NCへ交換留学、飛び級。' },
        { year: '2004年', content: '上智大学比較文化学部で国際ビジネス専攻。' },
        { year: '2009年', content: '三菱商事入社、エネルギー商材の貿易・投資' },
        { year: '2014年', content: '2年間フランス駐在後に退職。外国籍向けCM、PM、LM全ての業務委託を経験。' },
        { year: '2015年', content: '現アットハース社を創業。' },
        { year: '2017年', content: '経産省の現:J-Startup「飛躍」に採択。Slush Helsinki, Tech Crunch Berlinへ公式派遣' },
        { year: '2018年', content: '東京都の起業家海外進出支援プログラム「X-HUB TOKYO」ミュンヘンコースに採択\n野村グループアクセラレーション「Voyager」に応募200社超の不動産部門1社に採択\nIncubate Camp：グロース賞2位、総合4位、EY賞、SMBC賞' },
        { year: '2024年', content: '累計1.7億円資金調達。' },
      ],

      // スキルカテゴリー
      skillCategories: [
        {
          title: 'コアスキル',
          tags: ['プロダクトマネジメント', 'グローバル事業開発', 'AI/LLM活用', 'DX推進']
        },
        {
          title: 'ビジネススキル',
          tags: ['多言語コミュニケーション', 'CRM戦略・自動化']
        },
        {
          title: '技術スタック',
          tags: ['React', 'JavaScript', 'Python', 'AI/LLMツール', 'Git/GitHub', 'Vercel', 'Hasura(GraphQL)', 'Docker(基礎)']
        }
      ],

      // キャリア展望
      goals: {
        objective: '目標',
        objectiveText: 'CEO/CPO (最高プロダクト責任者) を目指す',
        evolution: '2025進化目標',
        evolutionText: 'AIプロダクト開発能力の深化',
        evolutionSubText: '高度AI技術(RAG等)活用、企画〜実装〜グロース貢献',
        vision: '今後の展望',
        visionItems: [
          '世界のどこにでも自分の場所があるようなボーダレスな社会の実現',
          '「外国人」という概念が無くなった世界を目指す'
        ],
        workStyle: '目指している働き方',
        workStyleText: '・完全リモート（東京ベース/年半分海外）\n・本業 + 業務委託（週2-3日）または社外取締役/顧問希望',
      },

      // スキル関連
      stance: 'スタンス',
      stanceText: 'フロントエンド/プロトタイピング中心、専門家と連携して推進',
    },

    // モーダル
    modals: {
      companyTitle: 'アットハース株式会社',
      companyDescription: '会社の詳細情報をご確認いただけます。',
      companyContent: [
        '家を借りれず困っていた海外の友人を助けるために不動産のIT企業を創業→10年間経営。',
        '外国籍向け事業、広告からLPO、EFOなどマーケ改善、CRMによる脱属人ISの設計、新規事業のオペレーション改善と自動化（インサイドセールスの脱属人化とフィールドセールスへの滑らかな繋ぎ込みによるOMO最適化）が得意。'
      ],
      companyLink: '会社ウェブサイトを見る',

      wikiTitle: '紀野 知成 / Tomonari Kino',
      wikiDescription: 'Wikipedia上の人物情報をご覧いただけます。',
      wikiContent: [
        '紀野 知成（きの ともなり、1984年 - ）は、日本の実業家。アットハース株式会社創業者兼CEO。',
        '神奈川県出身。上智大学外国語学部フランス語学科卒業、リヨン第三大学に留学経験を持つ。',
        '三菱商事にて資源エネルギー部門、フランス駐在を経験後、2013年にアットハース株式会社を創業。外国籍人材向け不動産プラットフォーム「アットハースホーム」を開発・運営。',
        '多言語を操り（日本語、英語、フランス語、中国語）、異文化コミュニケーションとIT技術を融合させたビジネスモデルに強みを持つ。'
      ],
      wikiLink: 'Wikipediaページを見る',

      giftedTitle: 'ギフテッド',
      giftedDescription: 'ギフテッドに関する詳細な説明をご覧いただけます。',
      giftedContent: [
        'ギフテッドとは、高い潜在能力を持った英才児を指します。',
        '一般的に知能指数（IQ）が130以上であることが基準とされることが多く、高い認知能力や創造性を持つ特性があります。',
        'ギフテッドは単なる高い知能だけでなく、感受性の強さや独特の認知特性を持つこともあります。',
        '日本ではまだ認知度が低いですが、海外ではギフテッド教育として特別なプログラムが提供されている国もあります。'
      ],
      giftedLink: 'Wikipediaページで詳細を見る',
    },

    // フォーム
    form: {
      title: '友だち紹介フォーム',
      // バリデーションエラー
      nameRequired: '❌ お名前を入力してください',
      messageRequired: '❌ メッセージを入力してください',
      
      // 旅行プレゼント説明
      travelNote: '成婚したら {destinations} いずれかへの往復チケットをプレゼント！✈️\n紹介者・被紹介者の方へささやかなお礼ですが、僕のお気に入りの都市を案内するので一緒に楽しみましょう！😁',
      
      // 基本情報ラベル
      basic: {
        age: "年齢",
        location: "居住地",
        birthplace: "出身地",
        height: "身長",
        bodyType: "体型",
        bloodType: "血液型",
        siblings: "兄弟・姉妹",
        living: "同居人",
        holiday: "休日",
        alcohol: "お酒",
        smoking: "タバコ",
        contact: "希望のやりとり"
      },
      
      // 恋愛・結婚ラベル
      love: {
        maritalStatus: "結婚歴",
        marriageIntent: "結婚への意思",
        children: "子どもの有無",
        childrenDesire: "子どもの希望",
        housework: "家事・育児"
      }
    },

    // 回答値の翻訳
    answer: {
      basic: {
        age_40: "40歳",
        location_tokyo: "東京都 杉並区",
        birthplace: "神奈川県 横須賀/秋田",
        height_170: "170cm",
        bodyType_muscular: "筋肉質",
        bloodType_b: "B型",
        siblings: "次男/次女",
        living_alone: "一人暮らし",
        holiday_irregular: "不定期",
        alcohol_sometimes: "時々飲む",
        smoking_no: "吸わない",
        contact_phone_online: "電話、オンライン会話"
      },
      love: {
        maritalStatus_single: "未婚",
        marriage_yes: "はい",
        children_none: "なし",
        children_desire_yes: "はい",
        housework: "料理・掃除得意。育児も頑張ります！"
      }
    },
  },

  en: {
    // ヘッダー・ナビゲーション
    header: {
      contactButton: 'Get in Touch',
      wikiButton: '(Wikipedia)',
    },

    // タブ・切替ボタン
    tabs: {
      private: 'Private',
      career: 'Career',
      friend: 'Refer a Friend',
      self: "I'm Interested",
    },

    // 言語切替
    language: {
      toggleButton: '日本語に戻す',
    },

    // プロフィールセクション
    sections: {
      // プライベート
      bio: 'Biography',
      basics: 'Basic Information',
      loveAndMarriage: 'Love & Marriage',
      dailyLife: 'Daily Life',
      nature: 'Nature',
      personality: 'Personality',
      past: 'Past',

      // キャリア
      currentRole: 'Current Role & Mission',
      achievements: 'Achievements & Career Highlights',
      careerHistory: 'Career Timeline',
      skills: 'Skills & Expertise',
      careerGoals: 'Career Aspirations',
    },

    // プライベートタブ内容
    private: {
      bio: [
        "※All photos are recent & unfiltered📷",
        "After many discussions with my girlfriend of nearly 5 years, we decided to part ways.",
        "Having lived in constant challenge and survival mode, I'm finally ready to love someone. I want to begin the second act of my life, creating a happy family with someone I love.",
        "I believe we can quickly understand each other's compatibility beforehand, so I wrote this long self-disclosure without hiding much😂 I'd be happy to get to know you better over a phone call or at a cafe😊"
      ],
      dailyLife: [
        "🌍Daily Life",
        "・Love housework, cooking nutritious meals (want to cook for my family)",
        "・Every morning I water and care for my plants🪴 Recently lacking animal interaction",
        "・Weight training, Pilates",
        "・Remote work abroad like Thailand (7 months last year)",
        "・Morning language & programming study",
        "・Guitar & music composition"
      ],
      nature: [
        "🌙Nature",
        "・MBTI: ENTJ (Commander)",
        "・\"Gifted\" (WAIS IV intelligence test results taken in January 2025)",
        "・Usually speak Japanese, French, and English🗣️ Chinese Level 3",
        "・Having studied/worked in 4 countries (USA, France, Australia, Mongolia), most of my friends and ex-girlfriends are from overseas or Japanese returnees. I feel like a returnee myself"
      ],
      personality: [
        "☀️Personality",
        "・Logical (work) ↔︎ Innocent",
        "・Friends say I'm good at explaining difficult things clearly, tell hard truths but am passionate and kind, thoughtful and caring.",
        "・Ex-girlfriends said I'm too playful, honest, have gaps, and am like a boy😂",
        "・About ex-girlfriends: Many were sincere, humble, and hardworking. I like people who strive earnestly. I want to be the healing, stimulus, and light that quietly illuminates that person🌕"
      ],
      past: [
        "🌱Past",
        "In childhood, grew up in a doctor's family but due to my mother's circumstances, was raised at a special needs school with disabled children.",
        "Afterwards, carved out my life path through my own efforts",
        "・Teens: Study abroad in America and entertainment activities at Nabe Pro (singer-songwriter)",
        "・20s: Overseas assignments at trading company (Australia, France, Mongolia). Experienced PACS (civil union filed at city hall) for 2 years with a French person I met at a local university → didn't register marriage in Japan. Achieved mini-FIRE (financial freedom through passive income)",
        "・30s: Committed to startups for 10 years while regularly staying abroad remotely.",
        "Looking for serious relationship. Open-minded, sapiosexual, curious to discover new things"
      ]
    },

    // キャリア関連ラベル
    career: {
      role: 'Role:',
      company: 'Company:',
      business: 'Business:',
      sideBusiness: 'Side Role:',
      income: 'Executive Compensation:',
      passiveIncome: 'Passive Income (Asset Management):',
      
      mission: 'Supporting global challengers through Technology × Real Estate business',
      
      roleValue: 'Entrepreneur / Product Owner (CPO Candidate)',
      companyValue: 'Athearth Inc. (Founder / CEO)',
      businessValue: 'Development and operation of online rental platform "Athearth Home" for foreign nationals',
      sideBusinessValue: 'Part-time Lecturer at Sophia University (AI × English Entrepreneurship Course)',
      incomeValue: '10-12 million yen (varies with company performance)',
      passiveIncomeValue: '4-5 million yen',

      // 実績
      achievements: [
        'Founded Athearth, achieved total fundraising of 170 million yen',
        'Established online-complete rental service model with proprietary DB infrastructure',
        'Former Mitsubishi Corporation: engaged in uranium investment & international trading (with experience in France)',
        'Selected for Incubate Camp (multiple awards), METI & Tokyo Metropolitan Government program selection history'
      ],

      // タイムライン
      timeline: [
        { year: '2001', content: 'Exchange study in NC, USA, skipped grades.' },
        { year: '2004', content: 'Majored in International Business at Sophia University Faculty of Comparative Culture.' },
        { year: '2009', content: 'Joined Mitsubishi Corporation, energy commodity trading & investment' },
        { year: '2014', content: 'Resigned after 2 years in France. Experienced CM, PM, LM consulting for foreign nationals.' },
        { year: '2015', content: 'Founded current Athearth company.' },
        { year: '2017', content: 'Selected for METI\'s current J-Startup "Leap". Officially dispatched to Slush Helsinki, Tech Crunch Berlin' },
        { year: '2018', content: 'Selected for Tokyo Metropolitan Government\'s entrepreneur overseas expansion support program "X-HUB TOKYO" Munich course\nSelected as the only real estate company among 200+ applicants for Nomura Group Acceleration "Voyager"\nIncubate Camp: 2nd place Growth Award, 4th place overall, EY Award, SMBC Award' },
        { year: '2024', content: 'Total fundraising of 170 million yen.' },
      ],

      // スキルカテゴリー
      skillCategories: [
        {
          title: 'Core Skills',
          tags: ['Product Management', 'Global Business Development', 'AI/LLM Utilization', 'DX Promotion']
        },
        {
          title: 'Business Skills',
          tags: ['Multilingual Communication', 'CRM Strategy & Automation']
        },
        {
          title: 'Tech Stack',
          tags: ['React', 'JavaScript', 'Python', 'AI/LLM Tools', 'Git/GitHub', 'Vercel', 'Hasura(GraphQL)', 'Docker(Basic)']
        }
      ],

      // キャリア展望
      goals: {
        objective: 'Objective',
        objectiveText: 'Aiming to become CEO/CPO (Chief Product Officer)',
        evolution: '2025 Evolution Goal',
        evolutionText: 'Deepening AI Product Development Capabilities',
        evolutionSubText: 'Advanced AI technology (RAG, etc.) utilization, contributing from planning to implementation to growth',
        vision: 'Future Vision',
        visionItems: [
          'Realizing a borderless society where anyone can have their place anywhere in the world',
          'Aiming for a world where the concept of "foreigner" no longer exists'
        ],
        workStyle: 'Desired Work Style',
        workStyleText: '・Fully remote (Tokyo-based / half the year abroad)\n・Main job + contract work (2-3 days a week) or external director/advisor',
      },

      // スキル関連
      stance: 'Stance',
      stanceText: 'Frontend/prototyping focused, collaborating with specialists to drive projects',
    },

    // モーダル
    modals: {
      companyTitle: 'Athearth Inc.',
      companyDescription: 'You can view detailed company information.',
      companyContent: [
        'Founded an IT real estate company to help overseas friends who had trouble renting apartments → managed for 10 years.',
        'Specializes in foreign national business, marketing improvements from advertising to LPO and EFO, CRM-based depersonalization IS design, new business operation improvement and automation (OMO optimization through depersonalization of inside sales and smooth connection to field sales).'
      ],
      companyLink: 'View Company Website',

      wikiTitle: 'Tomonari Kino / 紀野 知成',
      wikiDescription: 'You can view personal information on Wikipedia.',
      wikiContent: [
        'Tomonari Kino (born 1984) is a Japanese entrepreneur. Founder and CEO of Athearth Inc.',
        'Born in Kanagawa Prefecture. Graduated from Sophia University Faculty of Foreign Languages, French Department, with study abroad experience at Lyon III University.',
        'After experience in the resources and energy department at Mitsubishi Corporation and stationed in France, founded Athearth Inc. in 2013. Develops and operates "Athearth Home," a real estate platform for foreign nationals.',
        'Multilingual (Japanese, English, French, Chinese) with strengths in business models that combine cross-cultural communication and IT technology.'
      ],
      wikiLink: 'View Wikipedia Page',

      giftedTitle: 'Gifted',
      giftedDescription: 'You can view detailed explanations about giftedness.',
      giftedContent: [
        'Gifted refers to talented children with high potential abilities.',
        'Generally, an intelligence quotient (IQ) of 130 or higher is often used as a criterion, with characteristics of high cognitive abilities and creativity.',
        'Gifted individuals have not only high intelligence but also high sensitivity and unique cognitive characteristics.',
        'While still not well-known in Japan, some countries overseas provide special programs as gifted education.'
      ],
      giftedLink: 'View Details on Wikipedia Page',
    },

    // フォーム
    form: {
      title: 'Referral Form',
      // バリデーションエラー
      nameRequired: '❌ お名前を入力してください',
      messageRequired: '❌ メッセージを入力してください',
      
      // 旅行プレゼント説明
      travelNote: '成婚したら {destinations} いずれかへの往復チケットをプレゼント！✈️\n紹介者・被紹介者の方へささやかなお礼ですが、僕のお気に入りの都市を案内するので一緒に楽しみましょう！😁',
      
      // 基本情報ラベル
      basic: {
        age: "Age",
        location: "Location",
        birthplace: "Birthplace",
        height: "Height",
        bodyType: "Body Type",
        bloodType: "Blood Type",
        siblings: "Siblings",
        living: "Living Situation",
        holiday: "Day Off",
        alcohol: "Alcohol",
        smoking: "Smoking",
        contact: "Preferred Contact"
      },
      
      // 恋愛・結婚ラベル
      love: {
        maritalStatus: "Marital Status",
        marriageIntent: "Willingness to Marry",
        children: "Children",
        childrenDesire: "Desire for Children",
        housework: "Housework & Childcare"
      }
    },

    // 回答値の翻訳
    answer: {
      basic: {
        age_40: "40 years old",
        location_tokyo: "Tokyo, Suginami Ward",
        birthplace: "Kanagawa, Yokosuka / Akita",
        height_170: "170 cm",
        bodyType_muscular: "Muscular",
        bloodType_b: "Type B",
        siblings: "Second son / Second daughter",
        living_alone: "Living alone",
        holiday_irregular: "Irregular",
        alcohol_sometimes: "Occasionally drinks",
        smoking_no: "Does not smoke",
        contact_phone_online: "Phone, Online Chat"
      },
      love: {
        maritalStatus_single: "Single",
        marriage_yes: "Yes",
        children_none: "None",
        children_desire_yes: "Yes",
        housework: "Good at cooking and cleaning. Will do my best with childcare!"
      }
    },
  },
} as const; 