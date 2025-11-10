
import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 md:px-8 bg-brand-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full max-w-full rounded-xl overflow-hidden shadow-lg aspect-square md:aspect-[4/5] bg-gray-300">
          <img 
            src="https://picsum.photos/800/1000?random=1" 
            alt="Founder of Habityield" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-5xl mb-6 font-heading">A Szűrő, Nem Pedig a Hangszóró</h2>
          <p className="text-xl mb-4 opacity-80 font-body">
            Mindenhol hatalmas a zaj: új könyvek, divatos trendek, bio-hackek. De az időd a legdrágább.
          </p>
          <p className="text-xl font-body">
            Én elvégeztem a szűrést. Az elmúlt évtizedben én voltam az, aki a nagyító alá tette a teljesítményt, a fókuszt, és a regenerációt. A filozófia, hogy "Zoom In / Zoom Out", arról szól, hogy <strong>én adom a szűrőt</strong>, hogy neked már ne kelljen a hangszórókat hallgatnod. Így csak a te életedre szabott, működő elvek maradnak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
