import type { ReactNode } from "react"

interface ProfileSectionProps {
  title: string
  icon: string
  iconColor?: string
  children: ReactNode
  animationDelay?: string
  bgColor?: string
}

export function ProfileSection({
  title,
  icon,
  iconColor = "#00c4a7",
  children,
  animationDelay = "0.1s",
  bgColor = "transparent",
}: ProfileSectionProps) {
  return (
    <div className="mb-6">
      <h2
        className="flex items-center text-xl font-bold mb-3 font-handwriting"
        style={{ color: iconColor, animationDelay }}
      >
        <i className={`fas fa-${icon} mr-2`}></i>
        {title}
      </h2>
      <div style={{ backgroundColor: bgColor }}>{children}</div>
    </div>
  )
}
