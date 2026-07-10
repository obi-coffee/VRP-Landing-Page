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
import BetaSignup from '@/components/BetaSignup'
import Footer from '@/components/Footer'

export default function Home() {
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
        <BetaSignup />
      </main>
      <Footer />
    </>
  )
}
