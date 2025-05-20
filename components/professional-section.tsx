"use client"

import { useState } from "react"

export function ProfessionalSection({ data, onUpdate }: { data: any; onUpdate?: (data: any) => void }) {
  const { currentRole, skills, achievements, careerVision } = data

  // 各セクションの編集状態
  const [isEditingRole, setIsEditingRole] = useState(false)
  const [isEditingSkills, setIsEditingSkills] = useState(false)
  const [isEditingAchievements, setIsEditingAchievements] = useState(false)
  const [isEditingCareer, setIsEditingCareer] = useState(false)

  // 編集中のデータ
  const [editedRole, setEditedRole] = useState({ ...currentRole })
  const [editedSkills, setEditedSkills] = useState({ ...skills })
  const [editedAchievements, setEditedAchievements] = useState([...achievements])
  const [editedCareerVision, setEditedCareerVision] = useState({ ...careerVision })

  // 役割の入力変更ハンドラ
  const handleRoleChange = (field: string, value: any) => {
    setEditedRole({
      ...editedRole,
      [field]: value,
    })
  }

  // スキルの入力変更ハンドラ
  const handleSkillsChange = (field: string, value: any) => {
    setEditedSkills({
      ...editedSkills,
      [field]: value,
    })
  }

  // 実績の入力変更ハンドラ
  const handleAchievementChange = (index: number, value: string) => {
    const newAchievements = [...editedAchievements]
    newAchievements[index] = value
    setEditedAchievements(newAchievements)
  }

  // キャリアの入力変更ハンドラ
  const handleCareerChange = (field: string, value: any) => {
    setEditedCareerVision({
      ...editedCareerVision,
      [field]: value,
    })
  }

  // 役割の保存
  const handleSaveRole = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        currentRole: editedRole,
      }
      onUpdate(updatedData)
    }
    setIsEditingRole(false)
  }

  // スキルの保存
  const handleSaveSkills = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        skills: editedSkills,
      }
      onUpdate(updatedData)
    }
    setIsEditingSkills(false)
  }

  // 実績の保存
  const handleSaveAchievements = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        achievements: editedAchievements,
      }
      onUpdate(updatedData)
    }
    setIsEditingAchievements(false)
  }

  // キャリアの保存
  const handleSaveCareer = () => {
    if (onUpdate) {
      const updatedData = {
        ...data,
        careerVision: editedCareerVision,
      }
      onUpdate(updatedData)
    }
    setIsEditingCareer(false)
  }

  return (
    <div className="relative">
      <div className="absolute -top-2 -left-2 bg-[#f08080] text-white px-4 py-1 rounded-lg text-lg">仕事について</div>
      <div className="border-4 border-[#f08080] border-dashed rounded-xl p-5 pt-8">
        <div className="grid grid-cols-1 gap-6">
          {/* 1行目: 現在の役割・ミッション */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#f08080]">
                <i className="fas fa-laptop-code mr-2"></i>
                現在の役割・ミッション
              </h2>
              <button
                onClick={() => setIsEditingRole(!isEditingRole)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingRole ? "bg-gray-200 text-gray-700" : "bg-[#f08080] text-white"
                }`}
              >
                {isEditingRole ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingRole ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">役割:</label>
                      <input
                        type="text"
                        value={editedRole.title}
                        onChange={(e) => handleRoleChange("title", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">会社:</label>
                      <input
                        type="text"
                        value={editedRole.company}
                        onChange={(e) => handleRoleChange("company", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">事業:</label>
                      <textarea
                        value={editedRole.business}
                        onChange={(e) => handleRoleChange("business", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ミッション:</label>
                      <textarea
                        value={editedRole.mission}
                        onChange={(e) => handleRoleChange("mission", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveRole}
                    className="px-4 py-2 bg-[#f08080] text-white rounded-md hover:bg-[#e07070]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00c4a7] mr-2">•</span>
                      <span className="font-medium">役割:</span>
                      <span className="ml-1">{currentRole.title}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00c4a7] mr-2">•</span>
                      <span className="font-medium">会社:</span>
                      <span className="ml-1">{currentRole.company}</span>
                    </li>
                  </ul>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00c4a7] mr-2">•</span>
                      <span className="font-medium">事業:</span>
                      <span className="ml-1">{currentRole.business}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00c4a7] mr-2">•</span>
                      <span className="font-medium">ミッション:</span>
                      <span className="ml-1">{currentRole.mission}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* セクション間の仕切り */}
          <div className="border-t border-gray-200"></div>

          {/* 2行目: スキル・専門性 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#f08080]">
                <i className="fas fa-tools mr-2"></i>
                スキル・専門性
              </h2>
              <button
                onClick={() => setIsEditingSkills(!isEditingSkills)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingSkills ? "bg-gray-200 text-gray-700" : "bg-[#f08080] text-white"
                }`}
              >
                {isEditingSkills ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingSkills ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">コアスキル:</label>
                    {editedSkills.core.map((item: string, i: number) => (
                      <div key={i} className="mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newCore = [...editedSkills.core]
                            newCore[i] = e.target.value
                            handleSkillsChange("core", newCore)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    ))}

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">ビジネススキル:</label>
                    {editedSkills.business.map((item: string, i: number) => (
                      <div key={i} className="mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newBusiness = [...editedSkills.business]
                            newBusiness[i] = e.target.value
                            handleSkillsChange("business", newBusiness)
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">技術スタック:</label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {editedSkills.techStack.slice(0, 8).map((item: string, i: number) => (
                        <div key={i} className="mb-2 w-full">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                              const newTechStack = [...editedSkills.techStack]
                              newTechStack[i] = e.target.value
                              handleSkillsChange("techStack", newTechStack)
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      ))}
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">スタンス:</label>
                    <textarea
                      value={editedSkills.stance}
                      onChange={(e) => handleSkillsChange("stance", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={2}
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveSkills}
                    className="px-4 py-2 bg-[#f08080] text-white rounded-md hover:bg-[#e07070]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <p className="font-medium text-[#00c4a7] mb-2">コアスキル:</p>
                  <ul className="space-y-1">
                    {skills.core.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#f08080] mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <p className="font-medium text-[#00c4a7] mb-2">ビジネススキル:</p>
                    <ul className="space-y-1">
                      {skills.business.slice(0, 2).map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#f08080] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <p className="font-medium text-[#00c4a7] mb-2">技術スタック:</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.techStack.slice(0, 8).map((item: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#f08080] bg-opacity-10 text-[#f08080] rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="font-medium text-[#00c4a7] mb-2">スタンス:</p>
                    <p className="ml-2">{skills.stance}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* セクション間の仕切り */}
          <div className="border-t border-gray-200"></div>

          {/* 3行目: 実績・経歴ハイライト */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#f08080]">
                <i className="fas fa-trophy mr-2"></i>
                実績・経歴ハイライト
              </h2>
              <button
                onClick={() => setIsEditingAchievements(!isEditingAchievements)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingAchievements ? "bg-gray-200 text-gray-700" : "bg-[#f08080] text-white"
                }`}
              >
                {isEditingAchievements ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingAchievements ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div>
                    {editedAchievements.slice(0, 2).map((achievement: string, i: number) => (
                      <div key={i} className="mb-3">
                        <textarea
                          value={achievement}
                          onChange={(e) => handleAchievementChange(i, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={3}
                        />
                      </div>
                    ))}
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div>
                    {editedAchievements.slice(2, 4).map((achievement: string, i: number) => (
                      <div key={i} className="mb-3">
                        <textarea
                          value={achievement}
                          onChange={(e) => handleAchievementChange(i + 2, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={3}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveAchievements}
                    className="px-4 py-2 bg-[#f08080] text-white rounded-md hover:bg-[#e07070]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    {achievements.slice(0, 2).map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00c4a7] mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <ul className="space-y-2">
                    {achievements.slice(2, 4).map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00c4a7] mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* セクション間の仕切り */}
          <div className="border-t border-gray-200"></div>

          {/* 4行目: キャリアの展望 */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="flex items-center text-xl font-bold text-[#f08080]">
                <i className="fas fa-rocket mr-2"></i>
                キャリアの展望
              </h2>
              <button
                onClick={() => setIsEditingCareer(!isEditingCareer)}
                className={`px-3 py-1 rounded-md text-sm ${
                  isEditingCareer ? "bg-gray-200 text-gray-700" : "bg-[#f08080] text-white"
                }`}
              >
                {isEditingCareer ? "キャンセル" : "編集"}
              </button>
            </div>

            {isEditingCareer ? (
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 左カラム - 編集モード */}
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">目標:</label>
                      <input
                        type="text"
                        value={editedCareerVision.cpoGoal}
                        onChange={(e) => handleCareerChange("cpoGoal", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">2025進化目標:</label>
                      {editedCareerVision.evolutionTargets.slice(0, 1).map((target: any, i: number) => (
                        <div key={i} className="space-y-2">
                          <input
                            type="text"
                            value={target.title}
                            onChange={(e) => {
                              const newTargets = [...editedCareerVision.evolutionTargets]
                              newTargets[i] = { ...target, title: e.target.value }
                              handleCareerChange("evolutionTargets", newTargets)
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="タイトル"
                          />
                          <textarea
                            value={target.description}
                            onChange={(e) => {
                              const newTargets = [...editedCareerVision.evolutionTargets]
                              newTargets[i] = { ...target, description: e.target.value }
                              handleCareerChange("evolutionTargets", newTargets)
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            rows={2}
                            placeholder="説明"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 右カラム - 編集モード */}
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">今後の展望:</label>
                      {editedCareerVision.futureOutlook.slice(0, 2).map((item: string, i: number) => (
                        <div key={i} className="mb-2">
                          <textarea
                            value={item}
                            onChange={(e) => {
                              const newOutlook = [...editedCareerVision.futureOutlook]
                              newOutlook[i] = e.target.value
                              handleCareerChange("futureOutlook", newOutlook)
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            rows={2}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">希望する働き方:</label>
                      <textarea
                        value={editedCareerVision.workStyle}
                        onChange={(e) => handleCareerChange("workStyle", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSaveCareer}
                    className="px-4 py-2 bg-[#f08080] text-white rounded-md hover:bg-[#e07070]"
                  >
                    保存
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 左カラム - 表示モード */}
                <div>
                  <div className="mb-4">
                    <p className="font-medium text-[#00c4a7] mb-1">目標:</p>
                    <p className="ml-2">{careerVision.cpoGoal}</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#00c4a7] mb-2">2025進化目標:</p>
                    <ul className="space-y-2">
                      {careerVision.evolutionTargets.slice(0, 1).map((target: any, i: number) => (
                        <li key={i} className="ml-2">
                          <p className="font-medium">{target.title}</p>
                          <p className="text-sm text-gray-600 ml-4">{target.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 右カラム - 表示モード */}
                <div>
                  <div className="mb-4">
                    <p className="font-medium text-[#00c4a7] mb-2">今後の展望:</p>
                    <ul className="space-y-1">
                      {careerVision.futureOutlook.slice(0, 2).map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#f08080] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-[#00c4a7] mb-1">希望する働き方:</p>
                    <p className="ml-2">{careerVision.workStyle}</p>
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
