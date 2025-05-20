import { ProfileSection } from "./profile-section"

interface CareerSectionProps {
  data: any
}

export function CareerSection({ data }: CareerSectionProps) {
  return (
    <ProfileSection title="経歴" icon="history" animationDelay="1.5s" bgColor="#fff5f5">
      <div className="relative pl-8 space-y-8">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00c4a7] to-[#f08080]"></div>

        {data.map((career: any, index: number) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00c4a7] -translate-x-[9px]"></div>
            <div className="glass-card p-4 rounded-lg">
              <h3 className="font-semibold flex items-center mb-3">
                <i className={`fas fa-${career.icon} text-[#f08080] mr-2`}></i>
                {career.period}
              </h3>
              {career.position && <p className="ml-6 mb-3">{career.position}</p>}

              <ul className="ml-6 space-y-3">
                {career.items?.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className={`text-${itemIndex % 2 === 0 ? "[#f08080]" : "[#00c4a7]"} mr-2`}>•</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>

              {career.projects && (
                <div className="ml-6 space-y-4 mt-4">
                  {career.projects.map((project: any, projectIndex: number) => (
                    <div key={projectIndex}>
                      <h4 className="font-medium flex items-center">
                        <i className="fas fa-project-diagram text-[#f08080] mr-2"></i>
                        {project.name}
                      </h4>
                      <p className="text-sm text-gray-500 ml-6">{project.period}</p>
                      <ul className="ml-6 mt-2 space-y-2">
                        {project.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-[#00c4a7] mr-2">•</span>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {career.achievements && (
                <div className="mt-4">
                  <h4 className="font-medium flex items-center ml-6">
                    <i className="fas fa-trophy text-[#f08080] mr-2"></i>
                    主な実績
                  </h4>
                  <ul className="ml-6 mt-2 space-y-2">
                    {career.achievements.map((achievement: string, achievementIndex: number) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-[#00c4a7] mr-2">•</span>
                        <p>{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ProfileSection>
  )
}
