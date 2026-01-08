'use client';

import type { Certification } from '@/types/resume';

interface CertificationsFormProps {
  data: Certification[];
  onChange: (data: Certification[]) => void;
}

export default function CertificationsForm({ data, onChange }: CertificationsFormProps) {
  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
    };
    onChange([...data, newCert]);
  };

  const removeCertification = (id: string) => {
    onChange(data.filter(c => c.id !== id));
  };

  const updateCertification = (id: string, updates: Partial<Certification>) => {
    onChange(data.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">7</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Certifications</h2>
        </div>
        <button
          onClick={addCertification}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD CERTIFICATION
        </button>
      </div>

      <div className="space-y-8">
        {data.map((cert) => (
          <div key={cert.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeCertification(cert.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Certification Name
                </label>
                <input
                  type="text"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="AWS Certified Solutions Architect"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Issuing Organization
                </label>
                <input
                  type="text"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="Amazon Web Services"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Date Earned
                </label>
                <input
                  type="text"
                  value={cert.date}
                  onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="March 2024"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

