
import React from 'react';

const ProblemPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <article>
    <h3 className="text-2xl font-semibold mb-3 font-heading border-l-4 border-brand-accent pl-4">
      {title}
    </h3>
    <p className="text-lg opacity-90 font-body">
      {children}
    </p>
  </article>
);

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-brand-dark text-brand-light py-20 sm:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl mb-12 text-center font-heading">
          A Siker Valódi Ára
        </h2>
        <p className="text-xl mb-16 text-center italic opacity-80 font-body">
          Elérted a szakmai céljaidat, de legbelül tudod, hogy ennek ára volt. Egy csendes adó az energiádra, a fókuszodra és a mentális élességedre.
        </p>
        <div className="space-y-12">
          <ProblemPoint title="A Siker Adója">
            Délutánra a mentális élességed tompulni kezd. De ez nem a fáradtságról szól. Hanem az irányítás elvesztéséről. A félelem, hogy a legfőbb eszközöd – az elméd – válik a legkiszámíthatatlanabb tényezővé.
          </ProblemPoint>
          <ProblemPoint title="Amikor a Megoldások Csődöt Mondanak">
            Kipróbáltad a drasztikus programokat és a divatos "bio-hack"-eket. A hiba nem benned volt. A hiba a módszerekben rejlett, amik csak egy újabb teendőt adtak a már így is túlterhelt napodhoz.
          </ProblemPoint>
          <ProblemPoint title="A Siker Paradoxona">
            A legfájdalmasabb felismerés, hogy a helyzetedet nem a gyengeségeid okozzák, hanem az akaraterőd. Az a nyers erő, ami idáig elhozott, mára a növekedésed legfőbb akadályává vált.
          </ProblemPoint>
        </div>
        <p className="text-xl mt-16 text-center font-bold text-brand-accent font-heading">
          A régi rendszered nem optimalizálásra szorul. Hanem egy alapvető frissítésre.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
