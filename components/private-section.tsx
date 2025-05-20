"use client"

import { useState } from "react"

export function PrivateSection({ data, onUpdate }: { data: any; onUpdate?: (data: any) => void }) {
  const { basicInfo, personality, hobbies } = data

  // 各セクションの編集状態
  const [isEditingBasic, setIsEditingBasic] = useState(false)
  const [isEditingPersonality, setIsEditingPersonality] = useState(false)
  const [isEditingHobbies, setIsEditingHobbies] = useState(false)

  // 編集中のデータ
  const [editedBasicInfo, setEditedBasicInfo] = useState({ ...basicInfo })
  const [editedPersonality, setEditedPersonality] = useState({ ...personality })
  const [editedHobbies, setEditedHobbies] = useState({ ...hobbies })

  // 基本情報の入力変更ハンドラ
  const handleBasicInfoChange = (field: string, value: any) => {
    setEditedBasicInfo({
      ...editedBasicInfo,
      [field]: value,
    })
  }

  // 人となりの入力変更ハンドラ
  const handlePersonalityChange = (field: string, value: any) => {
    setEditedPersonality({
      ...editedPersonality,
      [field]: value,
    })
  }

  // 好きなことの入力変更ハンドラ
  const handleHobbiesChange = (field: string, value: any) => {
    setEditedHobbies({
      ...editedHobbies,
      [field]: value,
    })
  }

  // 配列アイテムの変更ハンドラ
  const handleArrayItemChange = (setter: Function, originalArray: any[], index: number, value: any) => {
    const newArray = [...originalArray]
    newArray[index] = value
    setter(newArray)
  }

  // 基本情報の保存
  const handleSaveBasicInfo = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        basicInfo: editedBasicInfo,
      }
      onUpdate(updatedData)
    }
    setIsEditingBasic(false)
  }

  // 人となりの保存
  const handleSavePersonality = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        personality: editedPersonality,
      }
      onUpdate(updatedData)
    }
    setIsEditingPersonality(false)
  }

  // 好きなことの保存
  const handleSaveHobbies = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        hobbies: editedHobbies,
      }
      onUpdate(updatedData)
    }
    setIsEditingHobbies(false)
  }

  return (
    <div className="relative">
      <div className="absolute -top-2 -left-2 bg-[#00c4a7] text-white px-4 py-1 rounded-lg text-lg">私について</div>
      <div className="border-4 border-[#00c4a7] border-dashed rounded-xl p-5 pt-8">
        <div className="grid grid-cols-1 gap-6">
          {/* 1行目: 基本情報 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#00c4a7]">
                <i className="fas fa-user-circle mr-2"></i>
                基本情報
              </h2>
              <button
                onClick={() => setIsEditingBasic(!isEditingBasic)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingBasic ? "bg-gray-200 text-gray-700" : "bg-[#00c4a7] text-white"
                }`}
              >
                {isEditingBasic ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingBasic ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">名前 (日本語):</label>
                      <input
                        type="text"
                        value={editedBasicInfo.nameJa}
                        onChange={(e) => handleBasicInfoChange("nameJa", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ニックネーム:</label>
                      <input
                        type="text"
                        value={editedBasicInfo.nickname}
                        onChange={(e) => handleBasicInfoChange("nickname", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">生年:</label>
                      <input
                        type="number"
                        value={editedBasicInfo.birthYear}
                        onChange={(e) => handleBasicInfoChange("birthYear", Number.parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">出身地:</label>
                      <input
                        type="text"
                        value={editedBasicInfo.origins[0]}
                        onChange={(e) => {
                          const newOrigins = [...editedBasicInfo.origins]
                          newOrigins[0] = e.target.value
                          handleBasicInfoChange("origins", newOrigins)
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                      />
                      <input
                        type="text"
                        value={editedBasicInfo.origins[1]}
                        onChange={(e) => {
                          const newOrigins = [...editedBasicInfo.origins]
                          newOrigins[1] = e.target.value
                          handleBasicInfoChange("origins", newOrigins)
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  {/* 中央カラム - 編集モード */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">拠点:</label>
                      <input
                        type="text"
                        value={editedBasicInfo.residence}
                        onChange={(e) => handleBasicInfoChange("residence", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">MBTI:</label>
                      <input
                        type="text"
                        value={editedBasicInfo.mbti}
                        onChange={(e) => handleBasicInfoChange("mbti", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">言語:</label>
                      {editedBasicInfo.languages.map((lang: any, i: number) => (
                        <div key={i} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={lang.flag}
                            onChange={(e) => {
                              const newLanguages = [...editedBasicInfo.languages]
                              newLanguages[i] = { ...lang, flag: e.target.value }
                              handleBasicInfoChange("languages", newLanguages)
                            }}
                            className="w-12 px-2 py-2 border border-gray-300 rounded-md"
                            placeholder="🇯🇵"
                          />
                          <input
                            type="text"
                            value={lang.lang}
                            onChange={(e) => {
                              const newLanguages = [...editedBasicInfo.languages]
                              newLanguages[i] = { ...lang, lang: e.target.value }
                              handleBasicInfoChange("languages", newLanguages)
                            }}
                            className="flex-1 px-2 py-2 border border-gray-300 rounded-md"
                            placeholder="言語"
                          />
                          <input
                            type="text"
                            value={lang.level}
                            onChange={(e) => {
                              const newLanguages = [...editedBasicInfo.languages]
                              newLanguages[i] = { ...lang, level: e.target.value }
                              handleBasicInfoChange("languages", newLanguages)
                            }}
                            className="flex-1 px-2 py-2 border border-gray-300 rounded-md"
                            placeholder="レベル"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">訪問国数:</label>
                      <input
                        type="text"
                        value={editedBasicInfo.visitedCountries}
                        onChange={(e) => handleBasicInfoChange("visitedCountries", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">居住歴:</label>
                      {editedBasicInfo.residenceHistory.map((country: any, i: number) => (
                        <div key={i} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={country.flag}
                            onChange={(e) => {
                              const newHistory = [...editedBasicInfo.residenceHistory]
                              newHistory[i] = { ...country, flag: e.target.value }
                              handleBasicInfoChange("residenceHistory", newHistory)
                            }}
                            className="w-12 px-2 py-2 border border-gray-300 rounded-md"
                            placeholder="🇯🇵"
                          />
                          <input
                            type="text"
                            value={country.country}
                            onChange={(e) => {
                              const newHistory = [...editedBasicInfo.residenceHistory]
                              newHistory[i] = { ...country, country: e.target.value }
                              handleBasicInfoChange("residenceHistory", newHistory)
                            }}
                            className="flex-1 px-2 py-2 border border-gray-300 rounded-md"
                            placeholder="国名"
                          />
                          <input
                            type="text"
                            value={country.detail}
                            onChange={(e) => {
                              const newHistory = [...editedBasicInfo.residenceHistory]
                              newHistory[i] = { ...country, detail: e.target.value }
                              handleBasicInfoChange("residenceHistory", newHistory)
                            }}
                            className="flex-1 px-2 py-2 border border-gray-300 rounded-md"
                            placeholder="詳細"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveBasicInfo}
                    className="px-4 py-2 bg-[#00c4a7] text-white rounded-md hover:bg-[#00a08a]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">名前:</span>
                      <span className="ml-1">
                        {basicInfo.nameJa} ({basicInfo.nickname})
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">年:</span>
                      <span className="ml-1">{basicInfo.birthYear}年生まれ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">出身:</span>
                      <span className="ml-1">{basicInfo.origins.join("/")}</span>
                    </li>
                  </ul>
                </div>

                {/* 中央カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">拠点:</span>
                      <span className="ml-1">{basicInfo.residence}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">タイプ:</span>
                      <span className="ml-1">{basicInfo.mbti}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">言語:</span>
                      <div className="ml-1">
                        {basicInfo.languages.map((lang: any, i: number) => (
                          <div key={i}>
                            {lang.flag} {lang.lang} ({lang.level})
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">海外:</span>
                      <span className="ml-1">{basicInfo.visitedCountries}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f08080] mr-2">•</span>
                      <span className="font-medium">居住歴:</span>
                      <div className="ml-1">
                        {basicInfo.residenceHistory.map((country: any, i: number) => (
                          <div key={i}>
                            {country.flag} {country.country} - {country.detail}
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* セクション間の仕切り */}
          <div className="border-t border-gray-200"></div>

          {/* 2行目: 人となり - アイコン変更 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#00c4a7]">
                <i className="fas fa-brain mr-2"></i>
                人となり
              </h2>
              <button
                onClick={() => setIsEditingPersonality(!isEditingPersonality)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingPersonality ? "bg-gray-200 text-gray-700" : "bg-[#00c4a7] text-white"
                }`}
              >
                {isEditingPersonality ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingPersonality ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">スタンス・価値観:</label>
                    {editedPersonality.stance.map((item: string, i: number) => (
                      <div key={i} className="mb-2">
                        <textarea
                          value={item}
                          onChange={(e) => {
                            const newStance = [...editedPersonality.stance]
                            newStance[i] = e.target.value
                            handlePersonalityChange("stance", newStance)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={2}
                        />
                      </div>
                    ))}

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">強み・特徴:</label>
                    <div className="space-y-2">
                      {editedPersonality.strengthsTraits.thoughtAction.map((item: string, i: number) => (
                        <input
                          key={i}
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newThoughtAction = [...editedPersonality.strengthsTraits.thoughtAction]
                            newThoughtAction[i] = e.target.value
                            handlePersonalityChange("strengthsTraits", {
                              ...editedPersonality.strengthsTraits,
                              thoughtAction: newThoughtAction,
                            })
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">自己認識・成長ポイント:</label>
                    {editedPersonality.selfAwareness.map((item: string, i: number) => (
                      <div key={i} className="mb-2">
                        <textarea
                          value={item}
                          onChange={(e) => {
                            const newSelfAwareness = [...editedPersonality.selfAwareness]
                            newSelfAwareness[i] = e.target.value
                            handlePersonalityChange("selfAwareness", newSelfAwareness)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={2}
                        />
                      </div>
                    ))}

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">スキル:</label>
                    <div className="space-y-2">
                      {editedPersonality.strengthsTraits.skills.map((item: string, i: number) => (
                        <input
                          key={i}
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newSkills = [...editedPersonality.strengthsTraits.skills]
                            newSkills[i] = e.target.value
                            handlePersonalityChange("strengthsTraits", {
                              ...editedPersonality.strengthsTraits,
                              skills: newSkills,
                            })
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSavePersonality}
                    className="px-4 py-2 bg-[#00c4a7] text-white rounded-md hover:bg-[#00a08a]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <p className="font-medium text-[#f08080] mb-2">スタンス・価値観:</p>
                  <ul className="space-y-1">
                    {personality.stance.map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00c4a7] mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <p className="font-medium text-[#f08080] mb-2">強み・特徴:</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {personality.strengthsTraits.thoughtAction.slice(0, 4).map((item: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#00c4a7] bg-opacity-10 text-[#00c4a7] rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <p className="font-medium text-[#f08080] mb-2">自己認識・成長ポイント:</p>
                  <ul className="space-y-1">
                    {personality.selfAwareness.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00c4a7] mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {personality.strengthsTraits.skills.slice(0, 3).map((item: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#f08080] bg-opacity-10 text-[#f08080] rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* セクション間の仕切り */}
          <div className="border-t border-gray-200"></div>

          {/* 3行目: 好きなこと - アイコン変更 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#00c4a7]">
                <i className="fas fa-thumbs-up mr-2"></i>
                好きなこと
              </h2>
              <button
                onClick={() => setIsEditingHobbies(!isEditingHobbies)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingHobbies ? "bg-gray-200 text-gray-700" : "bg-[#00c4a7] text-white"
                }`}
              >
                {isEditingHobbies ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingHobbies ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">音楽:</label>
                    {editedHobbies.music.map((item: any, i: number) => (
                      <div key={i} className="mb-3">
                        {typeof item === "string" ? (
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newMusic = [...editedHobbies.music]
                              newMusic[i] = e.target.value
                              handleHobbiesChange("music", newMusic)
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        ) : (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={item.category}
                              onChange={(e) => {
                                const newMusic = [...editedHobbies.music]
                                newMusic[i] = { ...item, category: e.target.value }
                                handleHobbiesChange("music", newMusic)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              placeholder="カテゴリ"
                            />
                            <textarea
                              value={item.description}
                              onChange={(e) => {
                                const newMusic = [...editedHobbies.music]
                                newMusic[i] = { ...item, description: e.target.value }
                                handleHobbiesChange("music", newMusic)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              rows={2}
                              placeholder="説明"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">その他の趣味:</label>
                    <div className="space-y-2">
                      {editedHobbies.other.map((hobby: string, i: number) => (
                        <input
                          key={i}
                          type="text"
                          value={hobby}
                          onChange={(e) => {
                            const newOther = [...editedHobbies.other]
                            newOther[i] = e.target.value
                            handleHobbiesChange("other", newOther)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveHobbies}
                    className="px-4 py-2 bg-[#00c4a7] text-white rounded-md hover:bg-[#00a08a]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <p className="font-medium text-[#f08080] mb-2">音楽:</p>
                  <ul className="space-y-1">
                    {hobbies.music.slice(0, 2).map((item: any, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00c4a7] mr-2">•</span>
                        {typeof item === "string" ? (
                          <span>{item}</span>
                        ) : (
                          <span>
                            <strong>{item.category}:</strong> {item.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <p className="font-medium text-[#f08080] mb-2">その他の趣味:</p>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.other.slice(0, 8).map((hobby: string, i: number) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-${i % 2 === 0 ? "[#00c4a7]" : "[#f08080]"} bg-opacity-10 text-${
                          i % 2 === 0 ? "[#00c4a7]" : "[#f08080]"
                        } rounded-full`}
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
