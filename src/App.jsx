import React, { useState, lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsapp from './components/layout/FloatingWhatsapp';
import Hero from './components/catalog/Hero';
import Testimonials from './components/catalog/Testimonials';
import ClientShowcase from './components/catalog/ClientShowcase';
import CategoryTabs from './components/catalog/CategoryTabs';
import ProductGrid from './components/catalog/ProductGrid';
import productsData from './data/products.js';
import { redirectToWhatsapp } from './utils/whatsapp';

// Code Splitting: Lazy loading untuk komponen modal guna mengoptimalkan ukuran bundle awal
const AboutModal = lazy(() => import('./components/layout/AboutModal'));
const PrivacyPolicyModal = lazy(() => import('./components/layout/PrivacyPolicyModal'));
const TermsOfServiceModal = lazy(() => import('./components/layout/TermsOfServiceModal'));
const OrderModal = lazy(() => import('./components/order/OrderModal'));
const SuccessModal = lazy(() => import('./components/order/SuccessModal'));

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [orderPrice, setOrderPrice] = useState(0);

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenOrder = (product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);

    // Track Meta Pixel Events
    if (window.fbq) {
      const productData = {
        content_name: product.name,
        content_ids: [product.id],
        content_type: 'product',
        value: product.price,
        currency: 'IDR'
      };
      
      // 1. Track ViewContent when the modal opens
      window.fbq('track', 'ViewContent', productData);

      // 2. Track AddToCart as opening the modal is the 'add to cart' action
      window.fbq('track', 'AddToCart', productData);
    }
  };

  const handleConfirmOrder = (formData, finalPrice) => {
    setOrderPrice(finalPrice);

    // Meta Pixel Purchase Event Tracking
    if (window.fbq) {
      window.fbq('track', 'Purchase', { 
        value: finalPrice, 
        currency: 'IDR' 
      });
    }

    // 1. Jalankan utilitas redirect ke WhatsApp admin
    redirectToWhatsapp(selectedProduct, formData);
    
    // 2. Alihkan state modal ke Success State UI tanpa hard reload
    setIsOrderModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col font-body">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-8 mb-20 md:mb-0">
        <Hero />

        <CategoryTabs
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <ProductGrid
          products={filteredProducts}
          onOrder={handleOpenOrder}
        />
      </main>

      <Testimonials />
      <ClientShowcase />

      <Footer 
        onOpenAbout={() => setIsAboutModalOpen(true)} 
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />
      <FloatingWhatsapp />

      {/* Lazy Loaded Modals - Wrapped in Suspense to handle async chunk loading */}
      <Suspense fallback={null}>
        {/* About Modal */}
        <AboutModal 
          isOpen={isAboutModalOpen} 
          onClose={() => setIsAboutModalOpen(false)} 
        />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
          isOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
        />

        {/* Terms of Service Modal */}
        <TermsOfServiceModal
          isOpen={isTermsModalOpen}
          onClose={() => setIsTermsModalOpen(false)}
        />

        {/* Transactional Modals Layout */}
        {isOrderModalOpen && (
          <OrderModal
            isOpen={isOrderModalOpen}
            product={selectedProduct}
            onClose={() => setIsOrderModalOpen(false)}
            onConfirm={handleConfirmOrder}
          />
        )}

        {isSuccessModalOpen && (
          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={() => setIsSuccessModalOpen(false)}
            orderValue={orderPrice}
          />
        )}
      </Suspense>
    </div>
  );
};

export default App;
