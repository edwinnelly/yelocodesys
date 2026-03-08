// app/page.tsx
import Hero from './components/hero';
import IntroSection from './components/courses';
import NetworkStats from './components/NetworkStats';
import EducationFeatures from './components/EducationFeatures';
import Partners from './components/Partners';
import QuoteSection from './components/QuoteSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <NetworkStats />
      <EducationFeatures />
      <Partners />
      <QuoteSection />
    </main>
  );
}