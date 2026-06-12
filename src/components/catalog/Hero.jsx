import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/banner/banner-1.webp';
import banner2 from '../../assets/banner/banner-2.webp';
import banner3 from '../../assets/banner/banner-3.webp';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Ekspresikan dengan Bunga",
      description: "Koleksi papan bunga premium untuk setiap momen berharga. Kualitas terjamin, pengiriman tepat waktu."
    },
    {
      id: 2,
      image: banner2,
      title: "Momen Spesial Lebih Berkesan",
      description: "Hadirkan keindahan dan kehangatan dalam setiap perayaan Anda dengan rangkaian bunga terbaik kami."
    },
    {
      id: 3,
      image: banner3,
      title: "Wakili Kehadiran, Sampaikan Kepedulian",
      description: "Karangan bunga papan elegan untuk ucapan selamat hingga duka cita. Kami bantu Anda mengirimkan simpati dan kebahagiaan secara sempurna."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup to prevent memory leak
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-base mb-section-gap">
      <div className="w-full max-w-md md:max-w-[480px] mx-auto aspect-[1080/1350] rounded-2xl overflow-hidden relative group md:col-span-12">
        {/* Slides Container */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              alt={slide.title}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover object-center transition-transform duration-[2000ms] group-hover:scale-105"
              src={slide.image}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 md:p-8">
              <div 
                className={`max-w-2xl transition-all duration-700 delay-300 transform ${
                  index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h2 className="font-headline text-headline-xl-mobile md:text-headline-xl text-white mb-2">
                  {slide.title}
                </h2>
                <p className="font-body text-body-md text-white/90 max-w-md">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Manual Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
          aria-label="Previous Slide"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
          aria-label="Next Slide"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 bg-marigold' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
