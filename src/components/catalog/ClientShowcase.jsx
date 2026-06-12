import React from 'react';

// Static ES6 Imports for 12 local logos
import logo1 from '../../assets/kerjasama/logo1.svg';
import logo2 from '../../assets/kerjasama/logo2.svg';
import logo3 from '../../assets/kerjasama/logo3.svg';
import logo4 from '../../assets/kerjasama/logo4.svg';
import logo5 from '../../assets/kerjasama/logo5.svg';
import logo6 from '../../assets/kerjasama/logo6.svg';
import logo7 from '../../assets/kerjasama/logo7.svg';
import logo8 from '../../assets/kerjasama/logo8.svg';
import logo9 from '../../assets/kerjasama/logo9.svg';
import logo10 from '../../assets/kerjasama/logo10.svg';
import logo11 from '../../assets/kerjasama/logo11.svg';
import logo12 from '../../assets/kerjasama/logo12.svg';

const corporateClients = [
  { id: 1, name: 'Client 1', logoUrl: logo1 },
  { id: 2, name: 'Client 2', logoUrl: logo2 },
  { id: 3, name: 'Client 3', logoUrl: logo3 },
  { id: 4, name: 'Client 4', logoUrl: logo4 },
  { id: 5, name: 'Client 5', logoUrl: logo5 },
  { id: 6, name: 'Client 6', logoUrl: logo6 },
  { id: 7, name: 'Client 7', logoUrl: logo7 },
  { id: 8, name: 'Client 8', logoUrl: logo8 },
  { id: 9, name: 'Client 9', logoUrl: logo9 },
  { id: 10, name: 'Client 10', logoUrl: logo10 },
  { id: 11, name: 'Client 11', logoUrl: logo11 },
  { id: 12, name: 'Client 12', logoUrl: logo12 },
];

const ClientShowcase = () => {
  // Seamless Marquee Logic: Duplicate array to ensure smooth loop without gaps
  const doubleClients = [...corporateClients, ...corporateClients];

  return (
    <section className="py-12 bg-white overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-primary opacity-50">
          Trusted by Industry Leaders
        </h3>
      </div>
      
      <div className="relative flex items-center overflow-x-hidden group">
        {/* Premium Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap items-center py-2 gap-16 md:gap-28">
          {doubleClients.map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="h-20 md:h-32 shrink-0 flex items-center justify-center"
            >
              <img 
                src={client.logoUrl} 
                alt={`Client Logo ${client.name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-auto object-contain shrink-0 opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
