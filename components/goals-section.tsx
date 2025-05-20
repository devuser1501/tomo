import { ProfileSection } from "./profile-section"

interface GoalsSectionProps {
  data: any
}

export function GoalsSection({ data }: GoalsSectionProps) {
  return (
    <ProfileSection title="目標・価値観" icon="flag" animationDelay="1.3s">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold flex items-center mb-3">
            <i className="fas fa-briefcase text-[#f08080] mr-2"></i>
            働き方/ポジション
          </h3>
          <ul className="ml-6 space-y-2">
            <li className="flex items-start">
              <span className="text-[#00c4a7] mr-2">•</span>
              <p>
                <span className="font-medium">希望:</span> {data.workStyle.preference}
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#00c4a7] mr-2">•</span>
              <p>
                <span className="font-medium">ポジション:</span> {data.workStyle.position}
              </p>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold flex items-center mb-3">
            <i className="fas fa-star text-[#f08080] mr-2"></i>
            人生の目標
          </h3>
          <ul className="ml-6 space-y-2">
            {data.lifeGoals.map((goal: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00c4a7] mr-2">•</span>
                <p>{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProfileSection>
  )
}
