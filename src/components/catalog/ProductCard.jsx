import React from 'react';

const ProductCard = ({ product, onOrder }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => onOrder(product)}>
      <div className="aspect-[2025/2531] w-full rounded-none overflow-hidden bg-surface-container shadow-[0_10px_20px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] group-hover:scale-[1.01]">
        <img
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className={`font-body text-label-md text-primary ${product.badgeColor} w-fit px-2 py-0.5 rounded-sm`}>
          {product.category}
        </span>
        <h3 className="font-headline text-title-md text-on-surface line-clamp-1">{product.name}</h3>
        <p className="font-body text-body-md text-marigold font-bold">{formatPrice(product.price)}</p>
        <button
          className="mt-2 w-full py-2 px-4 rounded-md bg-[#454443] text-white font-body text-label-md transition-colors hover:bg-[#454443]/90 flex justify-center items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            onOrder(product);
          }}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
