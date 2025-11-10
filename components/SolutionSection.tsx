
import React from 'react';

const CheckIcon: React.FC = () => (
  <svg className="w-6 h-6 mr-3 text-brand-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const CrossIcon: React.FC = () => (
  <svg className="w-6 h-6 mr-3 text-gray-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 md:px-8 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl mb-6 text-center font-heading">A Válasz: Egy Okosabb Rendszer</h2>
        <p className="text-xl mb-16 text-center max-w-3xl mx-auto opacity-80 font-body">
          A Habityield filozófia egy alapvető "upgrade", amely elmozdul az akaraterőről egy intelligens, automatizált rendszer felé, amelynek célja a kognitív terhelés csökkentése.
        </p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* The Old Way */}
          <div className="p-8 border-4 border-dashed border-gray-400 rounded-xl bg-gray-50/50">
            <h3 className="text-2xl font-bold mb-6 text-gray-600 font-heading">A Régi Út</h3>
            <ul className="space-y-4 text-lg list-none p-0">
              <li className="flex items-start"><CrossIcon /> <span className="font-body">Teljesen az <strong>Akaraterőre</strong> támaszkodik.</span></li>
              <li className="flex items-start"><CrossIcon /> <span className="font-body"><strong>Komplexitást</strong> ad a már így is túlterhelt naphoz.</span></li>
              <li className="flex items-start"><CrossIcon /> <span className="font-body">Csak <strong>rövid távú</strong> "tűzoltás".</span></li>
            </ul>
          </div>
          {/* The Habityield Way */}
          <div className="p-8 border-4 border-brand-accent rounded-xl bg-white shadow-xl transform md:scale-105">
            <h3 className="text-2xl font-bold mb-6 font-heading bg-gradient-to-r from-brand-grad-1 via-brand-grad-2 to-brand-grad-3 bg-clip-text text-transparent">
              A Habityield Út
            </h3>
            <ul className="space-y-4 text-lg list-none p-0">
              <li className="flex items-start"><CheckIcon /> <span className="font-body">Intelligens <strong>Rendszert Épít</strong>.</span></li>
              <li className="flex items-start"><CheckIcon /> <span className="font-body">Jelentősen <strong>csökkenti a Kognitív Terhelést</strong>.</span></li>
              <li className="flex items-start"><CheckIcon /> <span className="font-body"><strong>Hosszú távú, fenntartható</strong> teljesítményt garantál.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
