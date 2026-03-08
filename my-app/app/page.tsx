import Hero from './components/hero'
import IntroSection from './components/courses'
import NetworkStats from './components/NetworkStats'
import EducationFeatures from './components/EducationFeatures'
import Partners from './components/Partners'
import QuoteSection from './components/QuoteSection'
import Footer from './components/footer'
import Topstudents from './components/topstudents'
import Bootcamp from './components/Bootcamp'
import Portfolio from './components/portfolio'

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <Topstudents />
      <Portfolio />
      <Bootcamp />
      {/* <NetworkStats /> */}
      <EducationFeatures />
      {/* <Partners /> */}
      {/* <QuoteSection /> */}
      <Footer />
    </main>
  )
}