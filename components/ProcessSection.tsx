
import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition duration-300">
    <span className="text-4xl font-bold text-brand-accent font-heading mb-4 block">{number}</span>
    <h3 className="text-xl font-semibold mb-3 font-heading">{title}</h3>
    <p className="text-base text-gray-700 font-body">{description}</p>
  </div>
);

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl mb-12 font-heading">Egy Tiszta, Világos Út</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <ProcessStep 
            number="01"
            title="Stratégiai Beszélgetés"
            description="Egy mélyreható diagnosztikai hívás, ahol feltárjuk a jelenlegi blokkokat és azokat a rejtett 'adókat', amiket a sikered fizetsz."
          />
          <ProcessStep 
            number="02"
            title="Személyes Rendszer Felépítése"
            description="Az elvek alapján felépítjük a te 'Habityield' rendszeredet, ami minimalista, könnyen fenntartható és a te egyedi igényeidre van szabva."
          />
          <ProcessStep 
            number="03"
            title="Folyamatos Támogatás"
            description="A kezdeti lendület fenntartása érdekében rendszeres, célzott támogatást kapsz, hogy a rendszer beépüljön és stabilizálódjon."
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
