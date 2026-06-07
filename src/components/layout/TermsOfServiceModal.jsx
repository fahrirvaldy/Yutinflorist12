import React from 'react';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 scale-100 opacity-100 transform flex flex-col max-h-[90vh]">
        {/* Header with Close Button */}
        <div className="flex justify-between items-start p-6 pb-0 flex-shrink-0">
          <div className="flex flex-col">
            <h2 className="text-2xl font-display font-bold text-primary">Syarat & Ketentuan (Terms of Service)</h2>
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
        <div className="p-6 space-y-6 overflow-y-auto">
          <section>
            <h3 className="text-label-lg font-bold uppercase tracking-wider mb-2 text-marigold">Alur Pemesanan Fast-Checkout</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Pemesanan di Yutin Florist menggunakan sistem Fast-Checkout via WhatsApp. Data yang Anda isi di formulir akan secara otomatis disusun menjadi format pesan WhatsApp untuk dikirimkan ke Admin kami guna konfirmasi stok dan jadwal.
            </p>
          </section>

          <section>
            <h3 className="text-label-lg font-bold uppercase tracking-wider mb-2 text-marigold">Kebijakan Harga & Ukuran</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Harga dasar yang tertera adalah untuk ukuran standar. Penambahan ukuran papan menjadi <span className="font-bold">1.50 x 2 meter</span> akan dikenakan biaya tambahan sebesar <span className="font-bold">Rp 150.000</span>.
            </p>
          </section>

          <section>
            <h3 className="text-label-lg font-bold uppercase tracking-wider mb-2 text-marigold">Waktu Logistik & Pengiriman</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Pengisian waktu logistik pada formulir dilakukan secara manual oleh pemesan. Pastikan waktu yang Anda tentukan memberikan rentang yang cukup bagi tim kami untuk memproses dan mengirimkan pesanan ke lokasi tujuan.
            </p>
          </section>

          <section>
            <h3 className="text-label-lg font-bold uppercase tracking-wider mb-2 text-marigold">Batas Perubahan Detail</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Perubahan pada detail ucapan, nama pengirim, atau alamat pengiriman hanya dapat dilakukan <span className="font-bold">sebelum pesanan masuk ke tahap produksi</span>. Setelah produksi dimulai, perubahan detail tidak dapat dilakukan.
            </p>
          </section>
        </div>

        {/* Footer/Close Button */}
        <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/30 text-right flex-shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-[#454443] text-white rounded-full font-medium hover:bg-[#454443]/90 transition-colors shadow-lg shadow-black/20"
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
