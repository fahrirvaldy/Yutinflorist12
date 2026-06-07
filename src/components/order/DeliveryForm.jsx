import React from 'react';

const DeliveryForm = ({ formData, onChange }) => {
  // Logic to split "HH:MM (Segmen)" robustly
  const deliveryTimeValue = formData.deliveryTime || '';
  const parts = deliveryTimeValue.split(' (');
  const timePart = parts[0] || '';
  const segmentPart = parts[1] ? parts[1].replace(')', '') : '';

  const handleTimeUpdate = (newTime, newSegment) => {
    const sanitizedTime = newTime.replace(/[^0-9.:]/g, '');
    const combinedValue = newSegment 
      ? `${sanitizedTime} (${newSegment})`
      : sanitizedTime;
    
    onChange({
      target: {
        name: 'deliveryTime',
        value: combinedValue
      }
    });
  };

  return (
    <div className="space-y-6">
      <h4 className="font-headline text-title-md text-primary border-b border-outline-variant/20 pb-2">
        Pengiriman
      </h4>
      
      <div className="space-y-2">
        <label className="block font-body text-label-md text-primary font-medium" htmlFor="deliveryAddress">
          Alamat Lengkap Pengiriman
        </label>
        <textarea
          id="deliveryAddress"
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={onChange}
          className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          placeholder="Nama Jalan, Gedung, RT/RW, Kelurahan, Kecamatan, Kota..."
          rows="3"
          required
        ></textarea>
      </div>

      <div className="space-y-2">
        <label className="block font-body text-label-md text-primary font-medium" htmlFor="googleMapsLink">
          Link Google Maps (Opsional)
        </label>
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">location_on</span>
          <input
            id="googleMapsLink"
            name="googleMapsLink"
            type="url"
            value={formData.googleMapsLink}
            onChange={onChange}
            className="w-full bg-surface border border-outline-variant/60 rounded-lg pl-12 pr-4 py-3 font-body text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Paste link Google Maps di sini"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block font-body text-label-md text-primary font-medium" htmlFor="deliveryDate">
            Tanggal Kirim
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">calendar_today</span>
            <input
              id="deliveryDate"
              name="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={onChange}
              className="w-full bg-surface border border-outline-variant/60 rounded-lg pl-12 pr-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-body text-label-md text-primary font-medium">
            Waktu Pengiriman
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[20px]">schedule</span>
              <input
                type="text"
                value={timePart}
                onChange={(e) => handleTimeUpdate(e.target.value, segmentPart)}
                placeholder="Waktu"
                className="w-full bg-surface border border-outline-variant/60 rounded-lg pl-12 pr-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>
            <select
              value={segmentPart}
              onChange={(e) => handleTimeUpdate(timePart, e.target.value)}
              className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
              required
            >
              <option value="" disabled>Keterangan</option>
              <option value="Pagi">Pagi</option>
              <option value="Siang">Siang</option>
              <option value="Sore">Sore</option>
              <option value="Malam">Malam</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
