import React, { useEffect } from 'react';


const SuccessModal = ({ isOpen, onClose, orderValue }) => {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-margin-mobile md:p-margin-desktop">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 flex flex-col items-center text-center relative overflow-hidden animate-slide-up">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        {/* Success Icon with Pulse */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-primary-fixed rounded-full animate-pulse-fast opacity-50 scale-150"></div>
          <div className="bg-primary text-white rounded-full p-4 z-10 shadow-md">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-headline text-title-md text-primary mb-4">
          Pesanan Berhasil Diteruskan!
        </h2>

        {/* Sub-heading / Description */}
        <p className="font-body text-body-md text-on-surface-variant mb-8 px-2">
          Sistem otomatis membuka aplikasi WhatsApp. Silakan klik 'Kirim' pada chat dengan Admin Yutin Florist untuk memproses pesanan Anda.
        </p>

        {/* Action Button */}
        <button 
          onClick={onClose}
          className="w-full flex items-center justify-center bg-primary text-white font-body text-label-md rounded-lg py-3 px-6 hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
        >
          Selesai & Kembali ke Katalog
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
