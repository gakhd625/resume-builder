'use client';

import { useState } from 'react';
import type { Experience } from '@/types/resume';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export default function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
      responsibilities: [''],
    };
    onChange([...data, newExp]);
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    onChange(data.map(exp => exp.id === id ? { ...exp, ...updates } : exp));
  };

  const addResponsibility = (expId: string) => {
    updateExperience(expId, {
      responsibilities: [...data.find(e => e.id === expId)!.responsibilities, ''],
    });
  };

  const updateResponsibility = (expId: string, index: number, value: string) => {
    const exp = data.find(e => e.id === expId)!;
    const newResponsibilities = [...exp.responsibilities];
    newResponsibilities[index] = value;
    updateExperience(expId, { responsibilities: newResponsibilities });
  };

  const removeResponsibility = (expId: string, index: number) => {
    const exp = data.find(e => e.id === expId)!;
    const newResponsibilities = exp.responsibilities.filter((_, i) => i !== index);
    updateExperience(expId, { responsibilities: newResponsibilities });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">2</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Professional Experience</h2>
        </div>
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD EXPERIENCE
        </button>
      </div>

      <div className="space-y-8">
        {data.map((exp) => (
          <div key={exp.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeExperience(exp.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="Google"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Role/Position
                </label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="Senior Developer"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder="Jun 2021"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                    disabled={exp.isCurrent}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600 disabled:opacity-30"
                    placeholder="Present"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  id={`current-${exp.id}`}
                  checked={exp.isCurrent}
                  onChange={(e) => {
                    updateExperience(exp.id, { isCurrent: e.target.checked, endDate: e.target.checked ? 'Present' : '' });
                  }}
                  className="w-4 h-4 accent-brand-red"
                />
                <label htmlFor={`current-${exp.id}`} className="text-xs font-bold text-gray-400 uppercase tracking-wider cursor-pointer">
                  Current Role
                </label>
              </div>

              <div className="md:col-span-2 space-y-4 pt-4 border-t border-white/5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Key Responsibilities
                </label>
                {exp.responsibilities.map((resp, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) => updateResponsibility(exp.id, index, e.target.value)}
                      className="flex-1 bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                      placeholder="Achieved 20% growth in..."
                    />
                    {exp.responsibilities.length > 1 && (
                      <button
                        onClick={() => removeResponsibility(exp.id, index)}
                        className="text-gray-500 hover:text-brand-red px-2"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addResponsibility(exp.id)}
                  className="text-xs font-bold text-brand-red hover:text-red-400 transition-colors uppercase tracking-widest"
                >
                  + Add Responsibility
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

