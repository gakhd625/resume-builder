'use client';

import { useState } from 'react';
import type { Skills } from '@/types/resume';

interface SkillsFormProps {
  data: Skills;
  onChange: (data: Skills) => void;
}

export default function SkillsForm({ data, onChange }: SkillsFormProps) {
  const [newLanguage, setNewLanguage] = useState('');
  const [newTool, setNewTool] = useState('');

  const addLanguage = () => {
    if (newLanguage.trim()) {
      onChange({
        ...data,
        programmingLanguages: [...data.programmingLanguages, newLanguage.trim()],
      });
      setNewLanguage('');
    }
  };

  const removeLanguage = (index: number) => {
    onChange({
      ...data,
      programmingLanguages: data.programmingLanguages.filter((_, i) => i !== index),
    });
  };

  const addTool = () => {
    if (newTool.trim()) {
      onChange({
        ...data,
        toolsAndFrameworks: [...data.toolsAndFrameworks, newTool.trim()],
      });
      setNewTool('');
    }
  };

  const removeTool = (index: number) => {
    onChange({
      ...data,
      toolsAndFrameworks: data.toolsAndFrameworks.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">4</div>
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">Skills & Technologies</h2>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Programming Languages
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
              className="flex-1 bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
              placeholder="e.g., Python, TypeScript"
            />
            <button
              onClick={addLanguage}
              className="px-6 py-3 bg-brand-red text-white font-bold rounded-sm hover:bg-red-700 transition-colors"
            >
              ADD
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.programmingLanguages.map((lang, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-sm text-xs font-bold uppercase tracking-wider group"
              >
                {lang}
                <button
                  onClick={() => removeLanguage(index)}
                  className="text-gray-500 hover:text-brand-red transition-colors"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-white/5">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Tools & Frameworks
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTool}
              onChange={(e) => setNewTool(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTool()}
              className="flex-1 bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
              placeholder="e.g., React, Next.js, Docker"
            />
            <button
              onClick={addTool}
              className="px-6 py-3 bg-brand-red text-white font-bold rounded-sm hover:bg-red-700 transition-colors"
            >
              ADD
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.toolsAndFrameworks.map((tool, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-sm text-xs font-bold uppercase tracking-wider group"
              >
                {tool}
                <button
                  onClick={() => removeTool(index)}
                  className="text-gray-500 hover:text-brand-red transition-colors"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

