
import React, { forwardRef } from 'react';

interface HeaderProps {
  showCta: boolean;
  onCtaClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ showCta, onCtaClick }, ref) => {
  return (
    <header ref={ref} className="w-full py-4 px-4 md:px-8 fixed top-0 z-50 bg-gray-200/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold font-heading tracking-wider text-brand-accent">
          Habityield.
        </span>
        <a 
          href="#booking-section" 
          onClick={onCtaClick}
          className={`inline-block py-2 px-5 rounded-lg text-brand-dark font-bold text-sm tracking-wide shadow-lg bg-gradient-to-r from-brand-grad-1 via-brand-grad-2 to-brand-grad-3 bg-[length:300%_300%] animate-moving-gradient transition-all duration-300 hover:-translate-y-px hover:shadow-xl ${showCta ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          Foglalj Most
        </a>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;