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
    <div className="border-b pb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Professional Experience</h2>
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Add More
        </button>
      </div>
      <div className="space-y-6">
        {data.map((exp) => (
          <div key={exp.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium text-gray-700">Experience Entry</h3>
              <button
                onClick={() => removeExperience(exp.id)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Chronostep Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role/Position *
                </label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Software Engineer Intern - Backend"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date *
                  </label>
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="June 2025"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                    disabled={exp.isCurrent}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    placeholder="Present"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`current-${exp.id}`}
                  checked={exp.isCurrent}
                  onChange={(e) => {
                    updateExperience(exp.id, { isCurrent: e.target.checked, endDate: e.target.checked ? 'Present' : '' });
                  }}
                  className="mr-2"
                />
                <label htmlFor={`current-${exp.id}`} className="text-sm text-gray-700">
                  Currently working here
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsibilities
                </label>
                {exp.responsibilities.map((resp, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) => updateResponsibility(exp.id, index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your responsibility..."
                    />
                    {exp.responsibilities.length > 1 && (
                      <button
                        onClick={() => removeResponsibility(exp.id, index)}
                        className="px-3 py-2 text-red-600 hover:text-red-800"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addResponsibility(exp.id)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Responsibility
                </button>
              </div>
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-gray-500 text-sm">No experience entries yet. Click "Add More" to add one.</p>
        )}
      </div>
    </div>
  );
}

