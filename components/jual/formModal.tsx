'use client'
import { useState } from 'react';

interface FormModalProps {
  produk: string;
  biaya: number;
  bilangan: string;
}

export default function FormModal({ produk, biaya, bilangan }: FormModalProps) {
  const [berat, setBerat] = useState('');
  const [alamat, setAlamat] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const user = "demo"; // Ganti dengan informasi user yang relevan

    try {
      const response = await fetch('/api/pesan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, berat: parseFloat(berat), alamat, produk, biaya: parseFloat(berat) * biaya, bilangan }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Pesanan berhasil dibuat:', result);
      } else {
        console.error('Error submitting pesanan:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting pesanan:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 lg:p-8">
      <p className="text-center text-lg font-medium mb-8">Isi data sampah</p>
      <div>
        <div className="relative">
          <input type="number" value={berat} onChange={(e) => setBerat(e.target.value)} className="w-full rounded-lg opacity-75 backdrop-blur-md overflow-hidden bg-white/20 text-slate-50 p-4 pe-12 text-sm shadow shadow-slate-800" placeholder="Berat sampah (Kg)" />
        </div>
      </div>
      <div>
        <div className="relative">
          <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="w-full rounded-lg opacity-75 backdrop-blur-md overflow-hidden bg-white/20 text-slate-50 p-4 pe-12 text-sm shadow shadow-slate-800" placeholder="Alamat lengkap" />
        </div>
      </div>
      <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow">Pesan Mitra-Terra</button>
    </form>
  );
}
