
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 md:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Habityield. Minden jog fenntartva.</p>
        <p className="mt-2 text-xs">
          <a href="#" className="hover:underline">Jogi nyilatkozat</a> | <a href="#" className="hover:underline">Adatkezelési tájékoztató</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
