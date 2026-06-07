import React from 'react';
import logo from '../../assets/logo/logo.svg';

const Footer = ({ onOpenAbout, onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#454443] text-white py-12 px-margin-mobile md:px-margin-desktop mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:block md:text-left">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 md:pb-6 md:border-b md:border-white/10 mb-8 md:mb-12 w-full">
          {/* Sisi Kiri: Brand Identity & Description */}
          <div className="hidden md:flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Yutin Florist" 
              className="h-10 md:h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/60 text-body-sm max-w-md leading-relaxed">
              Premium Floral Boards. Merangkai makna dalam setiap keindahan, menyampaikan pesan dengan elegan dan profesional untuk setiap momen berharga Anda.
            </p>
          </div>

          {/* Sisi Kanan: Social Media Icons */}
          <div className="flex flex-col items-center md:items-end gap-4 text-white/60">
            <span className="font-body text-label-md text-white/70 font-medium tracking-wide">Ikuti kami</span>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/yutin_florist12?igsh=MXRvbWM0bmppYTVjbA==" className="text-white/60 hover:text-marigold hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@yutinflorist12?is_from_webapp=1&sender_device=pc" className="text-white/60 hover:text-marigold hover:scale-110 transition-all duration-300" aria-label="TikTok">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2s-3.45 0-3.45 0v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.83 0 0 0 5 20.1a6.34 6.83 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/19DNwDAmdw/" className="text-white/60 hover:text-marigold hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 3.656 10.127 8.812 11.678v-8.25h-3v-3.428h3v-2.616c0-2.969 1.742-4.612 4.473-4.612 1.308 0 2.678.234 2.678.234v2.943h-1.507c-1.471 0-1.93.913-1.93 1.85v2.201h3.314l-.53 3.428h-2.784v8.25c5.156-1.55 8.812-5.688 8.812-11.678z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-label-sm w-full">
          {/* Copyright Text */}
          <div className="mt-6 md:mt-4 flex flex-col items-center md:items-start gap-1">
            <p>© {currentYear} Yutin Florist. Hak Cipta Dilindungi.</p>
          </div>

          {/* Legal Links */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={onOpenAbout}
              className="hover:text-marigold transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-marigold transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onOpenTerms}
              className="hover:text-marigold transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
