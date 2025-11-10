
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProcessSection from './components/ProcessSection';
import FounderSection from './components/FounderSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const finalCtaRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  const [isHeroCtaVisible, setIsHeroCtaVisible] = useState(true);
  const [isFinalCtaVisible, setIsFinalCtaVisible] = useState(false);
  const [isBookingSectionVisible, setIsBookingSectionVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsHeroCtaVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const finalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsFinalCtaVisible(entry.isIntersecting);
      });
    }, observerOptions);
    
    const bookingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsBookingSectionVisible(entry.isIntersecting);
      });
    }, observerOptions);

    if (heroCtaRef.current) {
      heroObserver.observe(heroCtaRef.current);
    }
    if (finalCtaRef.current) {
      finalObserver.observe(finalCtaRef.current);
    }
    if (bookingSectionRef.current) {
      bookingObserver.observe(bookingSectionRef.current);
    }

    return () => {
      if (heroCtaRef.current) {
        heroObserver.unobserve(heroCtaRef.current);
      }
      if (finalCtaRef.current) {
        finalObserver.unobserve(finalCtaRef.current);
      }
      if (bookingSectionRef.current) {
        bookingObserver.unobserve(bookingSectionRef.current);
      }
    };
  }, []);

  const handleScrollToBooking = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (bookingSectionRef.current && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      // Using getBoundingClientRect for a more robust and accurate position calculation
      const bookingSectionTop = bookingSectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: bookingSectionTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  const showHeaderCta = !isHeroCtaVisible && !isFinalCtaVisible && !isBookingSectionVisible;

  return (
    <div className="font-body">
      <Header ref={headerRef} showCta={showHeaderCta} onCtaClick={handleScrollToBooking} />
      <main>
        <HeroSection 
          heroCtaRef={heroCtaRef} 
          bookingSectionRef={bookingSectionRef}
          onCtaClick={handleScrollToBooking}
        />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <FounderSection />
        <CtaSection finalCtaRef={finalCtaRef} onCtaClick={handleScrollToBooking} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;