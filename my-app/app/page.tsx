import Hero from "./components/hero";
import IntroSection from "./components/courses";
import EducationFeatures from "./components/EducationFeatures";
import Footer from "./components/footer";
import Topstudents from "./components/topstudents";
import Bootcamp from "./components/Bootcamp";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <Topstudents />
      <Portfolio />
      <Bootcamp />
      <EducationFeatures />
      <Footer />
    </main>
  );
}
