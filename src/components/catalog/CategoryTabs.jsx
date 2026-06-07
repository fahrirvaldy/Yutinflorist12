import React from 'react';

const categories = ['Semua', 'Happy Wedding', 'Turut Berduka Cita', 'Selamat & Sukses'];

const CategoryTabs = ({ activeCategory, onSelect }) => {
  return (
    <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-8 pb-2 border-b border-outline-variant/20">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`whitespace-nowrap px-6 py-2 rounded-full font-body text-label-md transition-all ${
            activeCategory === category
              ? 'bg-marigold text-primary font-bold border border-transparent shadow-sm'
              : 'bg-surface border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-low'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
