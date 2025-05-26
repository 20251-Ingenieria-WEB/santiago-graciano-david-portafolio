"use client"

import ProfileSection from "../src/components/organisms/profile-section"
import KnowledgeSection from "../src/components/organisms/knowledge-section"
import EducationSection from "../src/components/organisms/education-section"
import PortfolioSection from "../src/components/organisms/portfolio-section"
import FooterSection from "../src/components/organisms/footer-section"

export default function Page() {
  return (
      <div className="max-w-4xl mx-auto">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <FooterSection />
      </div>
  )
}
