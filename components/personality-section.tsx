import { ProfileSection } from "./profile-section"

interface PersonalitySectionProps {
  data: any
}

export function PersonalitySection({ data }: PersonalitySectionProps) {
  return (
    <ProfileSection title="人物像・性格特性" icon="user-check" animationDelay="0.9s">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold flex items-center mb-3">
            <i className="fas fa-plus-circle text-[#00c4a7] mr-2"></i>
            強み
          </h3>
          <div className="flex flex-wrap gap-2 ml-4">
            {data.strengths.map((strength: string, index: number) => (
              <span
                key={index}
                className={`px-3 py-1 bg-${index % 2 === 0 ? "[#00c4a7]" : "[#f08080]"} bg-opacity-10 text-${
                  index % 2 === 0 ? "[#00c4a7]" : "[#f08080]"
                } rounded-full`}
              >
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold flex items-center mb-3">
            <i className="fas fa-info-circle text-[#00c4a7] mr-2"></i>
            特徴
          </h3>
          <div className="flex flex-wrap gap-2 ml-4">
            {data.traits.map((trait: string, index: number) => (
              <span
                key={index}
                className={`px-3 py-1 bg-${index % 2 === 0 ? "[#00c4a7]" : "[#f08080]"} bg-opacity-10 text-${
                  index % 2 === 0 ? "[#00c4a7]" : "[#f08080]"
                } rounded-full`}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ProfileSection>
  )
}
