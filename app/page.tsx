import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ValueProps from '@/components/ValueProps'
import ApplicationForm from '@/components/ApplicationForm'
import DeeperValue from '@/components/DeeperValue'
import ClosingCTA from '@/components/ClosingCTA'
import BetaSignup from '@/components/BetaSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ValueProps />
        <ApplicationForm />
        <DeeperValue />
        <ClosingCTA />
        <BetaSignup />
      </main>
      <Footer />
    </>
  )
}
