
import ContactUs from '@/components/ContactUs'
import { ProjectsSection } from '@/components/ProjectsSection'
import TestFeatures from '@/components/TestFeatures'
import TestGuide from '@/components/TestGuide'
import { HeroSection } from '@/components/HeroSection'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <TestGuide />
      <TestFeatures />
      <ContactUs />
    </>
  )
}
