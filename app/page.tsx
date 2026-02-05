import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import ROICalculator from './components/ROICalculator';
import Pricing from './components/Pricing';
import AIAdvantage from './components/AIAdvantage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ROICalculator />
      <Pricing />
      <AIAdvantage />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
