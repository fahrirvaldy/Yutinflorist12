import React from 'react';

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/6285892118307"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-[60] group"
      aria-label="Chat on WhatsApp"
    >
      {/* Memastikan kata chat dirender sebagai icon obrolan */}
      <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform duration-300">
        chat
      </span>
    </a>
  );
};

export default FloatingWhatsapp;
