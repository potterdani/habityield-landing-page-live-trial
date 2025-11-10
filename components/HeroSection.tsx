
import React, { useEffect, useRef, useState } from 'react';
import AnimatedCanvas from './AnimatedCanvas';

// To satisfy TypeScript, we declare the Calendly object on the window
declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
  }
}

interface HeroSectionProps {
  heroCtaRef: React.RefObject<HTMLAnchorElement>;
  bookingSectionRef: React.RefObject<HTMLDivElement>;
  onCtaClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}


const HeroSection: React.FC<HeroSectionProps> = ({ heroCtaRef, bookingSectionRef, onCtaClick }) => {
  const calendlyWidgetRef = useRef<HTMLDivElement>(null);
  const [calendlyHeight, setCalendlyHeight] = useState(600); // Initial height

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === 'https://calendly.com' &&
        event.data &&
        event.data.event === 'calendly.height_change' &&
        event.data.payload &&
        typeof event.data.payload.height === 'number'
      ) {
        setCalendlyHeight(event.data.payload.height);
      }
    };
    window.addEventListener('message', handleMessage);

    const scriptId = 'calendly-script';
    let intervalId: number | null = null;

    const loadScriptAndInit = () => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }

      intervalId = window.setInterval(() => {
        if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
          window.clearInterval(intervalId!);
          intervalId = null;
          if (calendlyWidgetRef.current) {
            window.Calendly.initInlineWidgets();
          }
        }
      }, 100);
    };

    loadScriptAndInit();

    return () => {
      window.removeEventListener('message', handleMessage);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (calendlyWidgetRef.current) {
          calendlyWidgetRef.current.innerHTML = '';
      }
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        scriptElement.remove();
      }
      if (window.Calendly) {
        delete window.Calendly;
      }
    };
  }, []);


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 bg-brand-light overflow-hidden">
      <AnimatedCanvas />
      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-heading font-bold tracking-tight text-brand-dark">
              A rendszer, ami a háttérből támogat és elvezet a fenntartható csúcsteljesítményhez.
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-body font-normal text-gray-700">
              Szabadíts fel mentális energiát arra, ami igazán számít. Hogy ne csak túléld, hanem valóban megéld a mindennapokat.
            </h2>
            
            {/* --- Mobile-Only CTA and Testimonials --- */}
            <div className="lg:hidden mt-10 text-center mb-12">
               <a 
                  ref={heroCtaRef}
                  href="#booking-section"
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center space-x-3 mx-auto py-4 px-10 rounded-xl text-brand-dark font-extrabold text-lg uppercase tracking-wider shadow-2xl bg-gradient-to-r from-brand-grad-1 via-brand-grad-2 to-brand-grad-3 bg-[length:300%_300%] animate-moving-gradient transition-all duration-500 hover:opacity-100 hover:-translate-y-0.5 hover:shadow-[0_15px_20px_-3px_rgba(0,0,0,0.3),_0_6px_8px_-2px_rgba(0,0,0,0.1)]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Stratégiai Hívás</span>
              </a>
              
              <div className="relative h-96 mt-6 mb-8">
                <img 
                  src="https://i.imgur.com/tO4MBMe.png" 
                  alt="Client testimonial screenshot 1" 
                  className="absolute left-0 top-0 w-3/4 max-w-xs h-auto transform -rotate-6"
                />
                <img 
                  src="https://i.imgur.com/tO4MBMe.png" 
                  alt="Client testimonial screenshot 2" 
                  className="absolute right-0 top-4 w-3/4 max-w-xs h-auto transform rotate-3 z-10"
                />
                 <img 
                  src="https://i.imgur.com/tO4MBMe.png" 
                  alt="Client testimonial screenshot 3" 
                  className="absolute left-1/4 top-16 w-3/4 max-w-xs h-auto transform -rotate-2 z-20"
                />
              </div>
            </div>
             {/* --- End Mobile-Only Section --- */}

          </div>

          {/* Right Column: Booking Embed */}
          <div id="booking-section" ref={bookingSectionRef} className="w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:pt-0">
            <div className="p-1 rounded-2xl bg-gradient-to-r from-brand-grad-1 via-brand-grad-2 to-brand-grad-3 bg-[length:300%_300%] animate-moving-gradient shadow-2xl">
              <div className="bg-brand-light rounded-xl overflow-hidden">
                <div
                  ref={calendlyWidgetRef}
                  className="calendly-inline-widget transition-all duration-300 ease-in-out"
                  data-url="https://calendly.com/dani-fazekas8/30min?hide_event_type_details=1&hide_gdpr_banner=1&hide_cookie_banner=1&embed_domain=1&embed_type=Inline&background_color=f5f5f5&text_color=383737&primary_color=ac93ac"
                  style={{ minWidth: '320px', height: `${calendlyHeight}px` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop-Only Testimonials Section */}
        <div className="hidden lg:block mt-20 text-center">
          <h3 className="text-lg text-gray-700 font-semibold mb-6">Akik már a rendszert használják:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <img 
              src="https://i.imgur.com/tO4MBMe.png" 
              alt="Client testimonial screenshot 1" 
              className="w-full h-auto"
            />
            <img 
              src="https://i.imgur.com/tO4MBMe.png" 
              alt="Client testimonial screenshot 2" 
              className="w-full h-auto"
            />
            <img 
              src="https://i.imgur.com/tO4MBMe.png" 
              alt="Client testimonial screenshot 3" 
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;