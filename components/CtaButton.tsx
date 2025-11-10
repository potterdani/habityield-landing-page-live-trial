
import React, { forwardRef } from 'react';

interface CtaButtonProps {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CtaButton = forwardRef<HTMLAnchorElement, CtaButtonProps>(({ onClick }, ref) => {
  return (
    <a 
      ref={ref}
      href="#booking-section" 
      onClick={onClick}
      className="inline-flex items-center justify-center space-x-3 mx-auto py-5 px-12 rounded-xl text-brand-dark font-extrabold text-xl uppercase tracking-wider shadow-2xl bg-gradient-to-r from-brand-grad-1 via-brand-grad-2 to-brand-grad-3 bg-[length:300%_300%] animate-moving-gradient transition-all duration-500 hover:opacity-100 hover:-translate-y-0.5 hover:shadow-[0_15px_20px_-3px_rgba(0,0,0,0.3),_0_6px_8px_-2px_rgba(0,0,0,0.1)]"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      <span>Kérem a Személyes Stratégiámat!</span>
    </a>
  );
});

CtaButton.displayName = 'CtaButton';

export default CtaButton;