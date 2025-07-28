
import { TeamSection } from '@/components/TeamSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { HeroSection } from '@/components/HeroSection';
import React from 'react';
import { ServicesSecondSection } from '@/components/ServicesSecondSection';
import { ServicesSection } from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <ServicesSecondSection />
      <TeamSection />
    </>
  )
}
