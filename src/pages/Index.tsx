
import React, { useEffect } from 'react';
import Header from '../components/Header';
import IntroSection from '../components/sections/IntroSection';
import MapSection from '../components/sections/MapSection';
import CalculatorSection from '../components/sections/CalculatorSection';
import CommunitySection from '../components/sections/CommunitySection';
import { handleScroll } from '../utils/scrollUtils';

const Index = () => {
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check for elements in viewport
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Header />
      <div className="pt-16">
        <section className="fade-in-section">
          <IntroSection />
        </section>
        <section className="fade-in-section">
          <MapSection />
        </section>
        <section className="fade-in-section">
          <CalculatorSection />
        </section>
        <section className="fade-in-section">
          <CommunitySection />
        </section>
      </div>
    </div>
  );
};

export default Index;
