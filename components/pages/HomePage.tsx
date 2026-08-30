'use client'

import {
  AboutSection,
  BlogSection,
  ContactSection,
  ExperienceSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  ProjectsSection,
  SiteFooter,
  SiteHeader,
  StackSection,
} from '../home'

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <HowItWorksSection />
        <ProjectsSection />
        <StackSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
