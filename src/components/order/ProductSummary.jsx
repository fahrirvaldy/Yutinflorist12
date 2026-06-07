import React from 'react';

const ProductSummary = ({ product, computedPrice }) => {
  if (!product) return null;

  const displayPrice = computedPrice ?? product.price;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="flex gap-6 items-start mb-10">
      <div className="w-24 md:w-28 aspect-[2025/2531] rounded-none overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex flex-col justify-center h-full pt-2">
        <span className="font-body text-label-md text-secondary uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
          {product.name}
        </h3>
        <p className="font-body text-body-lg text-marigold font-semibold">
          {formatPrice(displayPrice)}
        </p>
      </div>
    </section>
  );
};

export default ProductSummary;
