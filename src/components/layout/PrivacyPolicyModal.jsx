import React from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-display font-bold text-primary">Kebijakan Privasi yutinflorist12</h2>
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
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-label-lg font-bold text-primary uppercase tracking-wider mb-2 text-marigold">Transparansi Data</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Kami menghargai privasi Anda. Data yang Anda masukkan dalam formulir pemesanan meliputi:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-body-md text-on-surface-variant">
              <li>Nama & Nomor HP Pengirim</li>
              <li>Alamat Lengkap Pengiriman</li>
              <li>Detail Ucapan Papan Bunga</li>
            </ul>
          </section>

          <section>
            <h3 className="text-label-lg font-bold text-primary uppercase tracking-wider mb-2 text-marigold">Keamanan Informasi</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Yutin Florist beroperasi secara <span className="font-bold">stateless</span>. Semua data yang Anda isi diteruskan secara langsung ke WhatsApp Admin kami dan <span className="font-bold">tidak disimpan</span> di database eksternal maupun server aplikasi kami. Informasi ini hanya digunakan untuk keperluan koordinasi pengiriman pesanan Anda.
            </p>
          </section>
        </div>

        {/* Footer/Close Button */}
        <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/30 text-right">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-[#454443] text-white rounded-full font-medium hover:bg-[#454443]/90 transition-colors shadow-lg shadow-black/20"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
