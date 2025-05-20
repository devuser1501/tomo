import { ProfileSection } from "./profile-section"

interface BasicProfileProps {
  data: any
}

export function BasicProfile({ data }: BasicProfileProps) {
  return (
    <ProfileSection title="基本プロフィール" icon="id-card" animationDelay="0.1s">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <div className="flex items-start">
            <i className="fas fa-user text-[#00c4a7] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">氏名</p>
              <p>
                {data.name.ja} ({data.name.kana})
              </p>
              <p className="text-sm text-gray-500">{data.name.en}</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="fas fa-calendar text-[#f08080] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">生年月日</p>
              <p>{data.birthYear}</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="fas fa-map-marker-alt text-[#00c4a7] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">出身・居住地</p>
              <p>{data.origin}</p>
              <p>{data.residence}</p>
              <p className="text-sm text-gray-500">({data.overseas})</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start">
            <i className="fas fa-briefcase text-[#f08080] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">職業</p>
              {data.occupation.map((job: string, index: number) => (
                <p key={index}>{job}</p>
              ))}
            </div>
          </div>
          <div className="flex items-start">
            <i className="fas fa-brain text-[#00c4a7] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">MBTI</p>
              <p>{data.mbti}</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="fas fa-language text-[#f08080] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">言語</p>
              {data.languages.map((lang: any, index: number) => (
                <p key={index}>
                  {lang.code} {lang.name} ({lang.level})
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start">
            <i className="fas fa-user-tag text-[#00c4a7] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">人物概要</p>
              <p className="text-sm">{data.summary}</p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <i className="fas fa-globe-americas text-[#f08080] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">訪問国数</p>
              <p>{data.visitedCountries}</p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <i className="fas fa-home text-[#00c4a7] mr-3 mt-1"></i>
            <div>
              <p className="font-semibold">6ヶ月〜2年の居住国</p>
              {data.livedCountries.map((country: any, index: number) => (
                <p key={index}>
                  {country.code} {country.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProfileSection>
  )
}
