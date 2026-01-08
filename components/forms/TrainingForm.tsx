'use client';

import type { Training } from '@/types/resume';

interface TrainingFormProps {
  data: Training[];
  onChange: (data: Training[]) => void;
}

export default function TrainingForm({ data, onChange }: TrainingFormProps) {
  const addTraining = () => {
    const newTraining: Training = {
      id: Date.now().toString(),
      institution: '',
      program: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    onChange([...data, newTraining]);
  };

  const removeTraining = (id: string) => {
    onChange(data.filter(t => t.id !== id));
  };

  const updateTraining = (id: string, updates: Partial<Training>) => {
    onChange(data.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">9</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Professional Training</h2>
        </div>
        <button
          onClick={addTraining}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD TRAINING
        </button>
      </div>

      <div className="space-y-8">
        {data.map((training) => (
          <div key={training.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeTraining(training.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={training.institution}
                    onChange={(e) => updateTraining(training.id, { institution: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder="WPH Academy"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Program/Course
                  </label>
                  <input
                    type="text"
                    value={training.program}
                    onChange={(e) => updateTraining(training.id, { program: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder=".NET Framework Bootcamp"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Start Date
                    </label>
                    <input
                      type="text"
                      value={training.startDate}
                      onChange={(e) => updateTraining(training.id, { startDate: e.target.value })}
                      className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                      placeholder="Nov 2023"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                      End Date
                    </label>
                    <input
                      type="text"
                      value={training.endDate}
                      onChange={(e) => updateTraining(training.id, { endDate: e.target.value })}
                      className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                      placeholder="Dec 2023"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Description
                </label>
                <textarea
                  value={training.description}
                  onChange={(e) => updateTraining(training.id, { description: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600 min-h-[80px]"
                  placeholder="Describe the training program outcomes..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

