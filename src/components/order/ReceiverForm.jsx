import React from 'react';

const ReceiverForm = ({ formData, onChange }) => {
  return (
    <div className="space-y-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
      <h5 className="font-body text-label-md text-secondary uppercase">Penerima</h5>
      <div className="space-y-2">
        <label className="sr-only">Nama Penerima</label>
        <input
          type="text"
          name="receiverName"
          value={formData.receiverName}
          onChange={onChange}
          className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="Nama Penerima / Toko"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="sr-only">No. HP Penerima</label>
        <input
          type="tel"
          name="receiverPhone"
          value={formData.receiverPhone}
          onChange={onChange}
          className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="No. HP Penerima"
          required
        />
      </div>
    </div>
  );
};

export default ReceiverForm;
