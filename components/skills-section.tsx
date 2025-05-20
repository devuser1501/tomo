import { ProfileSection } from "./profile-section"

interface SkillsSectionProps {
  data: any
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <ProfileSection title="スキル・実績" icon="tools" animationDelay="0.5s">
      <div className="mb-6">
        <h3 className="text-lg font-semibold flex items-center mb-3">
          <i className="fas fa-star text-[#f08080] mr-2"></i>
          ヘッドライン
        </h3>
        <p className="ml-6 text-lg">
          <span className="marker-highlight">{data.headline.split("、")[0]}</span>、{data.headline.split("、")[1]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {data.categories.map((category: any, index: number) => (
          <div
            key={index}
            className="skill-card p-4 border border-[#00c4a7] border-opacity-30 rounded-lg hover:bg-[#f2fbfa]"
          >
            <h3 className="font-semibold flex items-center mb-3">
              <i className={`fas fa-${category.icon} text-[#00c4a7] mr-2`}></i>
              {category.title}
            </h3>
            <ul className="ml-4 space-y-2">
              {category.items.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-[#f08080] mr-2">•</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold flex items-center mb-3">
          <i className="fas fa-laptop-code text-[#f08080] mr-2"></i>
          主要技術・ツール
        </h3>
        <div className="ml-6 flex flex-wrap gap-2">
          {data.tools.map((tool: string, index: number) => (
            <span
              key={index}
              className={`px-3 py-1 bg-${index % 2 === 0 ? "[#00c4a7]" : "[#f08080]"} bg-opacity-10 text-${
                index % 2 === 0 ? "[#00c4a7]" : "[#f08080]"
              } rounded-full`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </ProfileSection>
  )
}
