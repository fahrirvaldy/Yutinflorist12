import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ananda Putri',
    category: 'Pernikahan',
    initials: 'AP',
    content: 'Bunga papan untuk pernikahan kakak saya sangat elegan dan segar. Detailnya sangat rapi, jauh melampaui ekspektasi kami. Terima kasih Yutin Florist!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rivan Anugrah',
    category: 'Duka Cita',
    initials: 'RA',
    content: 'Pelayanan sangat cepat dan simpatik di saat kami berduka. Pengiriman tepat waktu dan kualitas bunganya sangat terjaga sampai ke rumah duka.',
    rating: 5
  },
  {
    id: 3,
    name: 'Citra Kirana',
    category: 'Grand Opening',
    initials: 'CK',
    content: 'Pesan standing flower untuk pembukaan cabang baru perusahaan kami. Hasilnya sangat mewah dan merepresentasikan citra korporat kami dengan baik.',
    rating: 5
  },
  {
    id: 4,
    name: 'Budi Santoso',
    category: 'HRD PT Wijaya Karya - Selamat & Sukses',
    initials: 'BS',
    content: 'Papan bunga ucapan selamat yang dikirimkan sangat megah dan tepat waktu. Kerja sama yang sangat profesional untuk kebutuhan korporat kami.',
    rating: 5
  },
  {
    id: 5,
    name: 'Citra Lestari',
    category: 'Pelanggan Retail - Happy Wedding',
    initials: 'CL',
    content: 'Sangat suka dengan rangkaian bunganya! Cantik sekali dan harum. Proses pemesanan lewat WhatsApp juga sangat mudah dan adminnya ramah.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section 
      className="py-10 bg-white"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 320px' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-headline">
            Testimoni Pelanggan
          </h2>
          <div className="h-1 w-16 bg-marigold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Star Ratings */}
              <div className="flex mb-3 text-marigold">
                {[...Array(item.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-[18px] h-[18px] fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Content */}
              <p className="text-sm text-primary opacity-80 leading-relaxed italic mb-4 flex-grow">
                "{item.content}"
              </p>

              {/* Profile Bottom Section */}
              <div className="flex items-center pt-4 mt-4 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs mr-3">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-primary text-sm font-bold leading-tight">{item.name}</h4>
                  <p className="text-[10px] md:text-xs text-secondary italic opacity-70">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
