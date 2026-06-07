import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onOrder }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onOrder={onOrder} />
      ))}
    </div>
  );
};

export default ProductGrid;
