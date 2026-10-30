import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhyNow from '@/components/WhyNow'
import ValueProps from '@/components/ValueProps'
import HowItWorks from '@/components/HowItWorks'
import WhoItsFor from '@/components/WhoItsFor'
import DeeperValue from '@/components/DeeperValue'
import FAQ from '@/components/FAQ'
import ApplicationForm from '@/components/ApplicationForm'
import ClosingCTA from '@/components/ClosingCTA'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Roasters — Become a Verified Roaster Partner — tāst Coffee',
  description:
    'tāst is building the definitive platform for specialty coffee discovery. Apply to become a founding roaster partner.',
}

export default function RoastersPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WhyNow />
        <ValueProps />
        <HowItWorks />
        <WhoItsFor />
        <DeeperValue />
        <FAQ />
        <ApplicationForm />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
