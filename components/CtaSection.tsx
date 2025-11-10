
import React from 'react';
import CtaButton from './CtaButton';

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 mr-3 text-brand-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

interface CtaSectionProps {
  finalCtaRef: React.RefObject<HTMLAnchorElement>;
  onCtaClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ finalCtaRef, onCtaClick }) => {
  return (
    <section id="cta-final" className="bg-brand-dark text-brand-light py-20 sm:py-28 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl mb-6 font-heading">Az Első Lépés a Fenntartható Csúcsteljesítmény Felé</h2>
        <p className="text-xl mb-10 opacity-90 font-body">
          Foglalj le egy ingyenes, 45 perces, kötelezettség nélküli "Stratégiai Hívást." Itt nincs semmiféle sales nyomás, csak tiszta, akcióra kész stratégia.
        </p>
        <ul className="text-lg mb-12 space-y-3 max-w-md mx-auto text-left opacity-95">
          <li className="flex items-start"><CheckIcon /> Tiszta kép a jelenlegi blokkokról.</li>
          <li className="flex items-start"><CheckIcon /> Személyre szabott táplálkozási és mozgásterv.</li>
          <li className="flex items-start"><CheckIcon /> Egy fenntartható rendszer vázlata.</li>
        </ul>
        <CtaButton ref={finalCtaRef} onClick={onCtaClick} />
      </div>
    </section>
  );
};

export default CtaSection;