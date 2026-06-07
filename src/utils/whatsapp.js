/**
 * Formats the order data into a structured WhatsApp message.
 * @param {Object} product - The selected product details.
 * @param {Object} formData - The customer's order form data.
 * @returns {string} Encoded message string.
 */
export const generateWhatsappMessage = (product, formData) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = formData.boardSize === '1.50 x 2 m' ? product.price + 150000 : product.price;

  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `${window.location.origin}${product.image.startsWith('/') ? '' : '/'}${product.image}`;

  const message = `*HALO YUTIN FLORIST, SAYA INGIN MEMESAN:*

*PRODUK:*
----------------------------------------
📌 *Nama:* ${product.name}
💰 *Harga:* ${formatPrice(totalPrice)}
📐 *Ukuran:* ${formData.boardSize}
🔗 *Link Gambar:* ${imageUrl}
✍️ *Ucapan:* ${formData.boardMessage}

*DATA PENGIRIM:*
----------------------------------------
👤 *Nama:* ${formData.senderName}
📞 *No. HP:* ${formData.senderPhone}

*DATA PENERIMA:*
----------------------------------------
🏢 *Nama/Toko:* ${formData.receiverName}
📞 *No. HP:* ${formData.receiverPhone}

*DETAIL PENGIRIMAN:*
----------------------------------------
📍 *Alamat:* ${formData.deliveryAddress}
🔗 *Maps:* ${formData.googleMapsLink || '-'}
📅 *Tanggal:* ${formData.deliveryDate}
🕒 *Waktu:* ${formData.deliveryTime}

_Terima kasih._`;

  return encodeURIComponent(message);
};

/**
 * Redirects the user to WhatsApp with the pre-filled order message.
 * @param {Object} product - The selected product details.
 * @param {Object} formData - The customer's order form data.
 */
export const redirectToWhatsapp = (product, formData) => {
  const ADMIN_PHONE = '6285892118307'; // Replace with actual business number
  const message = generateWhatsappMessage(product, formData);
  const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
};
