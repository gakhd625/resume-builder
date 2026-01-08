'use client';

import type { PersonalDetails } from '@/types/resume';

interface PersonalDetailsFormProps {
  data: PersonalDetails;
  onChange: (data: Partial<PersonalDetails>) => void;
}

export default function PersonalDetailsForm({ data, onChange }: PersonalDetailsFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">1</div>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">Personal Details</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Full Name
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Professional Title
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => onChange({ title: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
            placeholder="Software Developer"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Email Address
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Portfolio Link
          </label>
          <input
            type="url"
            value={data.portfolio}
            onChange={(e) => onChange({ portfolio: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
            placeholder="https://yourportfolio.com"
          />
        </div>
      </div>
    </div>
  );
}

