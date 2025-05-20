"use client"

import { useEffect, useState } from "react"

// セクションテンプレートコンポーネント
interface SectionTemplateProps {
  title: string
  icon: string
  color: string
  rows: number
  bgColor?: string
}

function SectionTemplate({ title, icon, color, rows, bgColor = "transparent" }: SectionTemplateProps) {
  return (
    <div className="relative">
      <div className="absolute -top-2 -left-2 bg-gray-100 px-4 py-1 rounded-lg">
        <div className="h-6 w-24 bg-white rounded"></div>
      </div>
      <div
        className="border-4 border-dashed rounded-xl p-5 pt-8"
        style={{ borderColor: color, backgroundColor: bgColor }}
      >
        {/* タイトルとアイコンスペース */}
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-gray-100 mr-2"></div>
          <div className="h-6 w-40 bg-gray-100 rounded"></div>
        </div>

        {/* コンテンツエリア */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 左カラム */}
          <div>
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="mb-3">
                <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>

          {/* 右カラム */}
          <div>
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="mb-3">
                <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function GraphicRecordingTemplate() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-6 md:p-8">
        {/* ヘッダー - タイトル用のスペース */}
        <div className="flex justify-between items-center mb-8 border-b-2 border-dashed border-gray-200 pb-4">
          <div className="h-12 w-64 bg-gray-100 rounded-lg"></div>
          <div className="h-10 w-32 bg-gray-100 rounded-lg"></div>
        </div>

        <div className="flex flex-col gap-8">
          {/* セクション1: 基本情報 */}
          <SectionTemplate title="基本情報" icon="user-circle" color="#00c4a7" rows={3} />

          {/* セクション2: 人となり */}
          <SectionTemplate title="人となり" icon="heart" color="#00c4a7" rows={3} bgColor="#f9fffd" />

          {/* セクション3: 好きなこと */}
          <SectionTemplate title="好きなこと" icon="star" color="#00c4a7" rows={2} />

          {/* プライベートとビジネスの区切り線 */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 py-1 bg-white">
                <div className="h-8 w-8 rounded-full bg-gray-100"></div>
              </div>
            </div>
          </div>

          {/* セクション4: 今やってること */}
          <SectionTemplate title="今やってること" icon="laptop-code" color="#f08080" rows={2} />

          {/* セクション5: できること(スキル) */}
          <SectionTemplate title="できること(スキル)" icon="tools" color="#f08080" rows={3} bgColor="#fff5f5" />

          {/* セクション6: 実績(ハイライト) */}
          <SectionTemplate title="実績(ハイライト)" icon="trophy" color="#f08080" rows={2} />

          {/* セクション7: これから(未来) */}
          <SectionTemplate title="これから(未来)" icon="rocket" color="#f08080" rows={3} bgColor="#fff5f5" />
        </div>
      </div>
    </div>
  )
}
