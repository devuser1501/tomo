export const profileData = {
  // --- 前半：私について ---
  private: {
    basicInfo: {
      nameJa: "紀野 知成",
      nameEn: "Tomonari Kino",
      nickname: "Tomo",
      birthYear: 1984,
      origins: ["神奈川県横須賀市", "秋田県"],
      residence: "東京都杉並区 (年の半分は海外)",
      mbti: "ENTJ (指揮官タイプ - 2025年) / 元ESTP",
      languages: [
        { lang: "日本語", level: "Native", flag: "🇯🇵" },
        { lang: "英語", level: "Native level", flag: "🇺🇸" },
        { lang: "フランス語", level: "DALF C1", flag: "🇫🇷" },
        { lang: "中国語", level: "HSK3級/B1 - 学習中", flag: "🇨🇳" },
      ],
      visitedCountries: "70-80カ国",
      residenceHistory: [
        // 主な海外居住歴 (6ヶ月〜2年)
        { country: "米国", detail: "高校留学", flag: "🇺🇸" },
        { country: "フランス", detail: "駐在 (複数都市)", flag: "🇫🇷" },
        { country: "オーストラリア", detail: "駐在", flag: "🇦🇺" },
        { country: "モンゴル", detail: "駐在", flag: "🇲🇳" },
        { country: "タイ", detail: "市場開拓", flag: "🇹🇭" },
        { country: "インド", detail: "国際協力", flag: "🇮🇳" },
      ],
    },
    personality: {
      stance: [
        // スタンス・価値観
        "重視すること: 論理とデータ / 効率的な仕組み / チームの多様性",
        "得意な関わり方: 異文化・専門分野間のブリッジング / リモートでの協働推進",
        "基本姿勢: 常に学び、挑戦し続ける / グローバルな視野を持つ",
      ],
      strengthsTraits: {
        // 強み・特徴
        thoughtAction: ["論理的思考", "データ重視", "知的好奇心", "行動力", "グローバル志向", "効率追求"],
        skills: ["グローバル事業開発 (0→1)", "多言語コミュニケーション", "プロダクトマネジメント", "AI活用"],
        interpersonalTeam: ["リモート & 異文化チーム運営", "世話好き", "教育熱心"],
      },
      selfAwareness: [
        // 自己認識・成長ポイント
        "質の追求(完璧主義)と効率性のバランス",
        "論理と共感の統合 (意識的に取り組んでいます)",
        "高い目標設定 (期待値の健全なマネジメント)",
        "感受性の豊かさ (ギフテッド傾向と向き合う)",
        "継続的な自己分析と学びを重視",
      ],
    },
    hobbies: {
      // 好きなこと
      music: [
        { category: "洋楽", description: "ソウル, アシッドジャズ, ファンク (例: Flight Facilities, FKJ)" },
        { category: "邦楽", description: "シティポップ, 歌うま系 (例: 久保田利伸, Mrs. GREEN APPLE, 清水翔太, etc.)" },
        "インディーズ発掘 (海外都市にて)",
      ],
      other: [
        "海外滞在 (年1-3ヶ月)",
        "異文化交流",
        "言語学習 (特に中国語)",
        "筋トレ",
        "ピラティス",
        "動物巡り (特に犬)",
        "ギター",
        "料理 (栄養管理)",
        "朝活 (中国語, プログラミング)",
        "新しいことの学習・発見",
      ],
    },
  },
  // --- 後半：仕事について ---
  professional: {
    currentRole: {
      // 現在の役割・ミッション
      title: "起業家 / プロダクト責任者 (CPO候補)",
      company: "アットハース株式会社 (創業者 / CEO)",
      business: "外国籍人材向けオンライン賃貸プラットフォーム「アットハースホーム」の開発・運営",
      mission: "テクノロジーとコンテンツで、グローバルに挑戦する人々を支援する",
    },
    skills: {
      // スキル・専門性
      core: [
        "プロダクトマネジメント (戦略立案〜グロース)",
        "グローバル事業開発 (0→1含む)",
        "AI/LLM活用 & DX推進",
        "異文化・リモートチームマネジメント",
        "ブリッジング (技術 / ビジネス / 多文化)",
      ],
      techStack: [
        // 主要技術・ツール
        "React",
        "JavaScript",
        "Python(業務自動化)",
        "AI/LLMツール (Cursor, Copilot, ChatGPT等)",
        "Git/GitHub",
        "Vercel",
        "Hasura(GraphQL)",
        "Docker(基礎)",
        "AWS(基礎)",
        "API連携(基礎)",
        "Notion",
        "Slack",
        "HubSpot(経験あり)",
      ],
      business: [
        // ビジネススキル
        "多言語コミュニケーション (ビジネスレベル: 日/英/仏/中)",
        "CRM戦略・自動化",
        "資金調達",
        "パートナーシップ構築",
      ],
      stance: "フロントエンド/プロトタイピング中心、専門家と連携して推進", // スタンス
    },
    achievements: [
      // 実績・経歴ハイライト
      "アットハース創業、累計1.7億円の資金調達達成",
      "独自DB基盤のオンライン完結型賃貸サービスモデル確立",
      "元 三菱商事にてウラン投資・国際取引等に従事 (フランス駐在経験あり)",
      "Incubate Camp 選出 (複数受賞)、経産省・東京都プログラム選抜歴など",
    ],
    careerVision: {
      // キャリアの展望
      cpoGoal: "CEO/CPO (最高プロダクト責任者) を目指す",
      evolutionTargets: [
        // 2025進化目標
        { title: "AIプロダクト開発能力の深化", description: "高度AI技術(RAG等)活用、企画〜実装〜グロース貢献" },
        {
          title: "技術的リーダーシップへの貢献",
          description: "モダンWeb技術理解、アーキテクチャ議論リード、意思決定サポート",
        },
        {
          title: "実装への貢献とブリッジング強化",
          description: "AI支援活用、サーバーサイド/DB連携等への実装関与、開発プロセス最適化",
        },
      ],
      futureOutlook: [
        // 今後の展望
        "世界のどこにでも自分の場所があるようなボーダレスな社会の実現",
        "「外国人」という概念が無くなった世界を目指す",
        "不動産テックのリーディングカンパニーとして貢献",
      ],
      workStyle: "完全リモート（東京ベース/年半分海外）、業務委託（週2-3日）または社外取締役/顧問希望", // 希望する働き方
    },
  },
}
