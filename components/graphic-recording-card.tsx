"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { PrivateSection } from "./private-section"
import { ProfessionalSection } from "./professional-section"
import { profileData as initialProfileData } from "../data/profile-data"

export function GraphicRecordingCard() {
  const [mounted, setMounted] = useState(false)
  const [profileData, setProfileData] = useState(initialProfileData)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    // ローカルストレージからデータを読み込む
    const savedData = localStorage.getItem("profileData")
    if (savedData) {
      try {
        setProfileData(JSON.parse(savedData))
      } catch (e) {
        console.error("Failed to parse saved profile data:", e)
      }
    }
  }, [])

  const updateProfileData = (section: "private" | "professional", data: any) => {
    const updatedData = {
      ...profileData,
      [section]: data,
    }
    setProfileData(updatedData)

    // ローカルストレージにデータを保存
    try {
      localStorage.setItem("profileData", JSON.stringify(updatedData))
    } catch (e) {
      console.error("Failed to save profile data:", e)
    }
  }

  // モーダルを開く
  const openModal = () => {
    setIsModalOpen(true)
    // モーダルが開いているときはスクロールを無効にする
    document.body.style.overflow = "hidden"
  }

  // モーダルを閉じる
  const closeModal = () => {
    setIsModalOpen(false)
    // モーダルが閉じたらスクロールを有効に戻す
    document.body.style.overflow = "auto"
  }

  if (!mounted) return null

  return (
    <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-6 md:p-8">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            {/* プロフィール写真 - クリックでモーダルを開く */}
            <div
              className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#00c4a7] cursor-pointer transition-transform hover:scale-105"
              onClick={openModal}
              title="クリックで拡大"
            >
              <Image src="/images/tomo.jpg" alt="紀野 知成のプロフィール写真" fill className="object-cover" priority />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#00c4a7]">紀野 知成のプロフィール</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">
              {profileData.private.basicInfo.nameEn} ({profileData.private.basicInfo.nickname})
            </p>
            <p className="text-xs text-gray-400">2025年4月版</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* 私について */}
          <PrivateSection data={profileData.private} onUpdate={(data) => updateProfileData("private", data)} />

          {/* 仕事について */}
          <ProfessionalSection
            data={profileData.professional}
            onUpdate={(data) => updateProfileData("professional", data)}
          />
        </div>
      </div>

      {/* 写真モーダル - 余白なしバージョン */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-auto">
              <Image
                src="/images/tomo.jpg"
                alt="紀野 知成のプロフィール写真"
                width={800}
                height={800}
                className="rounded-lg"
                priority
              />
            </div>
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
              onClick={closeModal}
              aria-label="閉じる"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
