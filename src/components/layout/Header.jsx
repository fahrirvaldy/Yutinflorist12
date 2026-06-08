import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo/logo.svg';

const Header = ({ searchQuery, onSearchChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  // Optimasi: Memicu fokus secara asinkron setelah transisi CSS selesai (300ms)
  // untuk menghindari Forced Reflow (Layout Thrashing) yang dipicu oleh kalkulasi geometri instan
  useEffect(() => {
    let timeoutId;
    if (isSearchOpen && inputRef.current) {
      timeoutId = setTimeout(() => {
        inputRef.current.focus();
      }, 300); // Sinkron dengan durasi transisi 'duration-300'
    }
    return () => clearTimeout(timeoutId);
  }, [isSearchOpen]);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full z-50 overflow-hidden">
      {/* Brand & Logo Section - Always Mounted */}
      <div className={`flex items-center gap-4 transition-all duration-300 ease-in-out ${isSearchOpen ? 'opacity-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100 w-auto'}`}>
        <img 
          src={logo} 
          width="160" 
          height="40" 
          className="h-12 md:h-13 w-auto object-contain" 
          alt="Yutin Florist Logo" 
        />
      </div>

      {/* Action & Search Section */}
      <div className="flex items-center gap-4 flex-grow justify-end">
        {/* Search Column - Always Mounted, Visually Toggled via CSS transitions */}
        <div 
          className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
            isSearchOpen 
              ? 'opacity-100 w-full max-w-[260px]' 
              : 'opacity-0 w-0 overflow-hidden pointer-events-none'
          }`}
        >
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari karangan bunga..."
              className="w-full pl-10 pr-10 py-2.5 bg-surface-container-low rounded-full border-none focus:ring-1 focus:ring-primary outline-none text-body-md text-primary"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary p-1 flex items-center"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            )}
          </div>
          <button 
            onClick={() => {
              setIsSearchOpen(false);
              onSearchChange('');
            }}
            className="text-primary font-medium px-3 py-2 hover:bg-surface-container-low rounded-lg transition-colors whitespace-nowrap"
          >
            Batal
          </button>
        </div>

        {/* Default Buttons Section - Always Mounted */}
        <div className={`flex items-center gap-4 transition-all duration-300 ease-in-out ${isSearchOpen ? 'opacity-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100 w-auto'}`}>
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span className="font-body text-label-md hidden md:inline">Transaksi Aman</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
