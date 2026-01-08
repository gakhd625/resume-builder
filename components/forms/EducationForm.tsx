'use client';

import type { Education } from '@/types/resume';

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export default function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(e => e.id !== id));
  };

  const updateEducation = (id: string, updates: Partial<Education>) => {
    onChange(data.map(e => e.id === id ? { ...e, ...updates } : e));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">3</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Education</h2>
        </div>
        <button
          onClick={addEducation}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD EDUCATION
        </button>
      </div>

      <div className="space-y-8">
        {data.map((education) => (
          <div key={education.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeEducation(education.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Institution
                </label>
                <input
                  type="text"
                  value={education.institution}
                  onChange={(e) => updateEducation(education.id, { institution: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="University of San-Jose Recoletos"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Degree/Program
                </label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) => updateEducation(education.id, { degree: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="BS in Computer Science"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Start Year
                  </label>
                  <input
                    type="text"
                    value={education.startDate}
                    onChange={(e) => updateEducation(education.id, { startDate: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder="2018"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    End Year
                  </label>
                  <input
                    type="text"
                    value={education.endDate}
                    onChange={(e) => updateEducation(education.id, { endDate: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder="2022"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

