import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo/logo.svg';

const Header = ({ searchQuery, onSearchChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full z-50 overflow-hidden">
      {/* Default State */}
      <div className={`flex justify-between items-center w-full transition-all duration-300 ${isSearchOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <div className="flex items-center gap-4">
          <img src={logo} className="h-12 md:h-13 w-auto object-contain" alt="Yutin Florist Logo" />
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-primary hover:bg-surface-container-low transition-colors scale-95 duration-200 ease-in-out p-2 rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span className="font-body text-label-md hidden md:inline">Transaksi Aman</span>
          </div>
        </div>
      </div>

      {/* Search State Overlay - Animasi Melebar */}
      <div className={`absolute inset-y-0 right-0 bg-white flex items-center px-margin-mobile md:px-margin-desktop transition-all duration-300 ease-in-out ${isSearchOpen ? 'left-0 opacity-100' : 'left-full opacity-0'}`}>
        <div className="flex items-center w-full gap-3">
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
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
      </div>
    </header>
  );
};

export default Header;
