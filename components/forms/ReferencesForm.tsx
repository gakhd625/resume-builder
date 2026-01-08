'use client';

import type { Reference } from '@/types/resume';

interface ReferencesFormProps {
  data: Reference[];
  onChange: (data: Reference[]) => void;
}

export default function ReferencesForm({ data, onChange }: ReferencesFormProps) {
  const addReference = () => {
    const newRef: Reference = {
      id: Date.now().toString(),
      name: '',
      position: '',
      company: '',
      email: '',
      phone: '',
    };
    onChange([...data, newRef]);
  };

  const removeReference = (id: string) => {
    onChange(data.filter(r => r.id !== id));
  };

  const updateReference = (id: string, updates: Partial<Reference>) => {
    onChange(data.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">8</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">References</h2>
        </div>
        <button
          onClick={addReference}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD REFERENCE
        </button>
      </div>

      <div className="space-y-8">
        {data.map((ref) => (
          <div key={ref.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeReference(ref.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  value={ref.name}
                  onChange={(e) => updateReference(ref.id, { name: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Position
                </label>
                <input
                  type="text"
                  value={ref.position}
                  onChange={(e) => updateReference(ref.id, { position: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="Engineering Manager"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Company
                </label>
                <input
                  type="text"
                  value={ref.company}
                  onChange={(e) => updateReference(ref.id, { company: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="Tech Solutions Inc."
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  value={ref.email}
                  onChange={(e) => updateReference(ref.id, { email: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="john.smith@tech.com"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

