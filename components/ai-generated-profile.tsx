"use client"

import { useState } from "react"
import Image from "next/image"

export default function AIGeneratedProfile() {
  const [showProfessional, setShowProfessional] = useState(true)

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowProfessional(true)}
          className={`px-4 py-2 rounded-full transition-all ${
            showProfessional ? "bg-[#00c4a7] text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          プロフェッショナル
        </button>
        <button
          onClick={() => setShowProfessional(false)}
          className={`px-4 py-2 rounded-full transition-all ${
            !showProfessional ? "bg-[#f08080] text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          プライベート
        </button>
      </div>

      <div className="relative w-full max-w-4xl">
        {showProfessional ? (
          <Image
            src="/images/professional-profile.png"
            alt="紀野 知成 プロフェッショナルプロフィール"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        ) : (
          <Image
            src="/images/private-profile.png"
            alt="紀野 知成 プライベートプロフィール"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        )}
      </div>

      <p className="mt-4 text-sm text-gray-500">最終更新日: 2025/04/05</p>
    </div>
  )
}
