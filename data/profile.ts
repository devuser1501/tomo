export interface Photo { 
  id: number; 
  src: string; 
  alt: string; 
}

export interface InfoBlock { 
  label: string; 
  value: string; 
}

export interface Link {
  type: string;
  url: string;
  label: string;
}

export interface ProfileData {
  private: {
    basics: InfoBlock[];
    lifestyle: InfoBlock[];
    bio: string[];
    dailyLife: string[];
    nature: string[];
    personality: string[];
    past: string[];
  };
  professional: {
    basics: InfoBlock[];
    skills: string[];
    career: string[];
    detailedCareer: string[];
    currentStatus: string[];
    skills_list: string[];
    links: Link[];
  };
  photos: Photo[];
}

export const profile: ProfileData = {
  private: {
    basics: [
      { label: "年齢", value: "40歳" },
      { label: "居住地", value: "東京都 杉並区" },
      { label: "出身地", value: "神奈川県 葉山/横須賀(米軍基地)" },
      { label: "身長", value: "170cm" },
      { label: "体型", value: "筋肉質" },
      { label: "血液型", value: "B型" },
      { label: "兄弟・姉妹", value: "次男/次女" },
      { label: "同居人", value: "一人暮らし" },
      { label: "休日", value: "不定期" },
      { label: "お酒", value: "時々飲む" },
      { label: "タバコ", value: "吸わない" },
      { label: "希望のやりとり", value: "電話、オンライン会話" }
    ],
    lifestyle: [
      { label: "結婚歴", value: "未婚" },
      { label: "結婚への意思", value: "はい" },
      { label: "子どもの有無", value: "なし" },
      { label: "子どもの希望", value: "はい" },
      { label: "家事・育児", value: "積極的に参加したい" }
    ],
    bio: [
      "※写真は全て直近&無加工です📷",
      "4年程付き合った彼女と何度も話し合った結果お別れしました。(国際感覚や結婚希望タイミングのズレなど)",
      "ずっと挑戦×サバイバルモードの人生だったので、誰かを愛する準備がやっとできました。愛する人と幸せな家庭をつくる人生の第二幕を始めたいです。",
      "お電話で仲良くなってからカフェなどご一緒出来たら嬉しいです😊"
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
      "・父同様に\"ギフテッド\" （2025年1月に受けたWAIS IVの知能検査結果）",
      "・普段は日仏英話します🗣️中国語は３級",
      "・4カ国（アメリカ、フランス、オーストラリア、モンゴル）での留学・駐在経験有るので、友人や元彼女のほとんどは海外の方や海外帰りの日本人。恐らく帰国子女みたいな感じです"
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
      "幼少期、医師家系で育ったものの母の事情で8歳〜12歳施設に入る。その後自力で人生を切り開き",
      "・10代：アメリカ留学とナベプロで芸能活動(シンガーソングライター)",
      "・20代：商社で海外駐在(オーストラリア、フランス、モンゴル)現地の大学で出会ったフランス人の子とPACS(市役所に提出する事実婚)を2年経験→日本で籍はいれず帰国後離婚。",
      "・30代：プチFIRE達成（不労所得による経済的自由）38歳でバチェラー最終選出→両親が出演不可で辞退。",
      "Looking for serious relationship. Open-minded, sapiosexual, curious to discover new things"
    ]
  },
  professional: {
    basics: [
      { label: "職業", value: "経営者・役員 (三菱商事から独立)" },
      { label: "年収", value: "1000〜1200万" },
      { label: "会社名", value: "アットハース株式会社" },
      { label: "資格", value: "フランス語: DALF C1,中国語: HSK 3級,英語:TOEIC980,TOEFL110" },
      { label: "最終学歴", value: "大学卒" },
      { label: "学校名", value: "上智大学、Université de Lyon III" }
    ],
    skills: [
      "MBTI：ENTJ(指揮官)",
      "父同様に\"ギフテッド\" （2025年1月に受けたWAIS IVの知能検査結果）",
      "普段は日仏英話します🗣️中国語は３級",
      "4カ国（アメリカ、フランス、オーストラリア、モンゴル）での留学・駐在経験有るので、友人や元彼女のほとんどは海外の方や海外帰りの日本人。恐らく帰国子女みたいな感じです",
      "論理的(仕事)↔︎無邪気",
      "友達には難しい事をわかりやすく話すのが上手、耳の痛い事も言うけど熱くて優しい、思いやりがあって面倒見が良いと言われます",
      "彼女にはふざけすぎ、素直、ギャップある、少年みたいと言われます😂",
      "元彼女: 誠実、謙虚で一生懸命な人が多かったです。ひた向きに努力している人が好きです。そっとその人を照らす癒し、刺激、光になりたい🌕"
    ],
    career: [
      "現在: 家を借りれず困っていた海外の友人を助けるために不動産のIT企業を創業→10年間経営。4月から上智大学の非常勤講師を兼任。※年収は役員報酬のみ表示。",
      "過去: 幼少期、医師家系で育ったものの母の事情で8歳〜12歳施設に入る。その後自力で人生を切り開き",
      "10代：アメリカ留学とナベプロで芸能活動(シンガーソングライター)",
      "20代：商社で海外駐在(オーストラリア、フランス、モンゴル)現地の大学で出会ったフランス人の子とPACS(市役所に提出する事実婚)を2年経験→日本で籍はいれず帰国後離婚。",
      "30代：プチFIRE達成（不労所得による経済的自由）38歳でバチェラー最終選出→両親が出演不可で辞退。",
      "Looking for serious relationship. Open-minded, sapiosexual, curious to discover new things"
    ],
    detailedCareer: [
      "米軍基地、養護学校育ち。日仏英中のマルチリンガル。ギフテッド。",
      "",
      "米国やフランス在住時に国内外の不動産形態の大きな相違点を経験。帰国後の2003年以降、入居拒否される外交官や年収1000万円以上の駐在員4,000人以上の通訳、保証、家探しをサポート。日本の伝統的な不動産業界を変えるべく、アットハース社の創設を決意。",
      "",
      "外国籍向け事業、広告からLPO、EFOなどマーケ改善、CRMによる脱属人ISの設計、新規事業のオペレーション改善と自動化（インサイドセールスの脱属人化とフィールドセールスへの滑らかな繋ぎ込みによるOMO最適化）が得意。",
      "",
      "法人営業、海外拠点開発、PdM、クリエイティブのリード経験それぞれ3年ほど有り。採用に関わる面談やオンボ、資金調達に関わるIR（多言語での資料作成やピッチ） など、0 to 1の事業開発に於いても10年ほどの経験を持つ。",
      "",
      "※より良いPdMリード出来る様にPython勉強中。最近趣味で中国語習得も始め、４ヶ月でHSK３級（B1レベル）合格。AIツールを用いたB2B向けビジネスを構想中。"
    ],
    currentStatus: [
      "===現在",
      "創業したアットハースの賃貸仲介業にて日々事業改善を行いながら売却先を検討中。（数社の買収先と面談中）",
      "・トラクション：毎月平均100件以上のMQL獲得と成約率9.6%達成。（CAC 1万円、平均売上単価45万円）",
      "・KPI / KGI：業界平均8%の成約率をプロダクトによる自動化とCRMによる組織仕組み化により平均25%まで押し上げる。/ 事業を通じて誰もが自由に暮らせる世界を作る。"
    ],
    skills_list: [
      "- グロースハック",
      "- 顧客管理 (CRM)",
      "- プロダクトマネジメント",
      "- 事業戦略",
      "- 法人営業",
      "- 海外拠点開発",
      "- エンジニアリングマネジメント",
      "- クリエイティブデザイン (Canva, stable diffusion)",
      "- 自動化ツール (HubSpot, Notion)",
      "- 人材採用 (HR)",
      "- 資金調達",
      "- 多言語対応 (日仏英中)"
    ],
    links: [
      { type: "company", url: "https://www.athearth.com/about", label: "アットハース株式会社" },
      { type: "wiki", url: "https://ja.wikipedia.org/wiki/%E7%B4%80%E9%87%8E%E7%9F%A5%E6%88%90", label: "紀野 知成（Tomo）" }
    ]
  },
  photos: [
    { id: 1, src: "/images/img1.jpg", alt: "Tomo プロフィール写真 1" },
    { id: 2, src: "/images/img2.jpg", alt: "Tomo プロフィール写真 2" },
    { id: 3, src: "/images/img3.jpg", alt: "Tomo プロフィール写真 3" },
    { id: 4, src: "/images/img4.jpg", alt: "Tomo プロフィール写真 4" },
    { id: 5, src: "/images/img5.jpg", alt: "Tomo プロフィール写真 5" },
    { id: 6, src: "/images/img6.jpg", alt: "Tomo プロフィール写真 6" },
    { id: 7, src: "/images/img7.jpg", alt: "Tomo プロフィール写真 7" },
    { id: 8, src: "/images/img8.jpg", alt: "Tomo プロフィール写真 8" },
    { id: 9, src: "/images/img9.PNG", alt: "Tomo プロフィール写真 9" }
  ]
}; 