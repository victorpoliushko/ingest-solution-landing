import GetApp from '@/components/GetApp'
import TestCamp from '@/components/TestCamp'
import TestFeatures from '@/components/TestFeatures'
import TestGuide from '@/components/TestGuide'
import TestHero from '@/components/TestHero'
import React from 'react'

export default function Home() {
  return (
    <>
      <TestHero />
      <TestCamp />
      <TestGuide />
      <TestFeatures />
      <GetApp />
    </>
  )
}
