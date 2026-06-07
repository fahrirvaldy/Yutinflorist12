import React, { useState } from 'react';
import ProductSummary from './ProductSummary';
import SenderForm from './SenderForm';
import ReceiverForm from './ReceiverForm';
import DeliveryForm from './DeliveryForm';

const OrderModal = ({ product, isOpen, onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    boardSize: '1.25 x 2 m',
    boardMessage: '',
    senderName: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
    deliveryAddress: '',
    googleMapsLink: '',
    deliveryDate: '',
    deliveryTime: '',
  });

  const placeholders = {
    'Happy Wedding': "Contoh: Happy Wedding / Selamat & Bahagia atas Pernikahan Budi & Ani. Dari: Keluarga Besar Joko",
    'Turut Berduka Cita': "Contoh: Turut Berduka Cita atas Wafatnya Bapak Ahmad. Dari: Direksi & Staf PT. Maju Jaya",
    'Selamat & Sukses': "Contoh: Selamat & Sukses atas Pembukaan Cabang Baru Toko Berkah. Dari: PT. Sinar Sejahtera"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-[800px] bg-white rounded-t-[32px] md:rounded-[24px] shadow-2xl flex flex-col h-[90vh] md:h-[85vh] overflow-hidden animate-slide-up">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/20 sticky top-0 bg-white/90 backdrop-blur-md z-20">
          <h2 className="font-headline text-title-md text-primary">Detail Pesanan</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant group"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 custom-scrollbar">
          
          <ProductSummary 
            product={product} 
            computedPrice={formData.boardSize === '1.50 x 2 m' ? product.price + 150000 : product.price} 
          />

          {/* Board Specifications */}
          <section className="space-y-6">
            <h4 className="font-headline text-title-md text-primary border-b border-outline-variant/20 pb-2">
              Spesifikasi Papan
            </h4>
            <div className="space-y-2">
              <label className="block font-body text-label-md text-primary font-medium" htmlFor="boardSize">
                Ukuran Papan
              </label>
              <div className="relative">
                <select
                  id="boardSize"
                  name="boardSize"
                  value={formData.boardSize}
                  onChange={handleInputChange}
                  className="w-full appearance-none bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="1.25 x 2 m">1.25 x 2 m</option>
                  <option value="1.50 x 2 m">1.50 x 2 m</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
              {formData.boardSize === '1.50 x 2 m' && (
                <p className="text-xs text-marigold font-medium mt-1.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">info</span>
                  Pilihan ukuran ini mengenakan biaya tambahan Rp 150.000 (Otomatis ditambahkan ke harga di atas).
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block font-body text-label-md text-primary font-medium" htmlFor="boardMessage">
                Detail Ucapan di Papan
              </label>
              <textarea
                id="boardMessage"
                name="boardMessage"
                value={formData.boardMessage}
                onChange={handleInputChange}
                className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder={placeholders[product?.category] || "Contoh: Selamat & Sukses Atas Pembukaan Toko Baru Dari: PT. Maju Bersama"}
                rows="4"
                required
              ></textarea>
            </div>
          </section>

          {/* Sender & Receiver Details */}
          <section className="space-y-6">
            <h4 className="font-headline text-title-md text-primary border-b border-outline-variant/20 pb-2">
              Data Pengirim & Penerima
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SenderForm formData={formData} onChange={handleInputChange} />
              <ReceiverForm formData={formData} onChange={handleInputChange} />
            </div>
          </section>

          <DeliveryForm formData={formData} onChange={handleInputChange} />

          {/* Footer / CTA (Sticky-like within form) */}
          <div className="pt-4 border-t border-outline-variant/20">
            <button
              type="submit"
              className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#21b858] text-white font-bold rounded-lg font-body flex justify-center items-center gap-2 transition-colors shadow-md"
            >
              {/* Mengubah kata SEND menjadi simbol ikon kirim pesan */}
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Kirim Pesanan ke WhatsApp</span>
            </button>
            <p className="text-center font-body text-body-sm text-on-surface-variant mt-3">
              Pembayaran akan dikonfirmasi via WhatsApp
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
