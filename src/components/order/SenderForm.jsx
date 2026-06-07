import React from 'react';

const SenderForm = ({ formData, onChange }) => {
  return (
    <div className="space-y-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
      <h5 className="font-body text-label-md text-secondary uppercase">Pengirim</h5>
      <div className="space-y-2">
        <label className="sr-only">Nama Pengirim</label>
        <input
          type="text"
          name="senderName"
          value={formData.senderName}
          onChange={onChange}
          className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="Nama Pengirim / Perusahaan"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="sr-only">No. HP Pengirim</label>
        <input
          type="tel"
          name="senderPhone"
          value={formData.senderPhone}
          onChange={onChange}
          className="w-full bg-surface border border-outline-variant/60 rounded-lg px-4 py-3 font-body text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          placeholder="No. HP Pengirim (WhatsApp)"
          required
        />
      </div>
    </div>
  );
};

export default SenderForm;
