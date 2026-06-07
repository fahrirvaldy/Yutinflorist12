import React from 'react';

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 scale-100 opacity-100 transform">
        {/* Header with Close Button */}
        <div className="flex justify-between items-start p-6 pb-0">
          <div className="flex flex-col">
            <h2 className="text-2xl font-display font-bold text-primary">yutinflorist12</h2>
            <div className="h-1 w-12 bg-marigold mt-1 rounded-full"></div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors group"
          >
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          {/* Vision & Mission */}
          <section>
            <h3 className="text-label-lg font-bold text-primary uppercase tracking-wider mb-2">Visi & Misi</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Menjadi mitra terpercaya dalam menyampaikan pesan emosional melalui seni papan bunga premium. Kami berkomitmen menghadirkan kualitas estetika tertinggi untuk momen-momen istimewa Anda.
            </p>
          </section>

          {/* Key Advantages */}
          <section>
            <h3 className="text-label-lg font-bold text-primary uppercase tracking-wider mb-4">3 Keunggulan Utama</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-marigold">workspace_premium</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Kualitas Mewah Midnight Marigold</h4>
                  <p className="text-body-sm text-on-surface-variant">Desain eksklusif dengan material pilihan yang memberikan kesan elegan dan prestisius.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-marigold">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Pengiriman Tepat Waktu</h4>
                  <p className="text-body-sm text-on-surface-variant">Komitmen ketepatan waktu pengantaran untuk memastikan momen Anda tidak terlewatkan.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-marigold/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-marigold">bolt</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Fast-Checkout</h4>
                  <p className="text-body-sm text-on-surface-variant">Proses pemesanan instan via WhatsApp yang memudahkan transaksi Anda tanpa ribet.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer/Close Button */}
        <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/30 text-right">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
