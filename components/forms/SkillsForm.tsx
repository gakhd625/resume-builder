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
    <div className="border-b pb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Programming Languages
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Python, JavaScript"
            />
            <button
              onClick={addLanguage}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.programmingLanguages.map((lang, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {lang}
                <button
                  onClick={() => removeLanguage(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tools and Frameworks
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newTool}
              onChange={(e) => setNewTool(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTool()}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., React, Docker, AWS"
            />
            <button
              onClick={addTool}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.toolsAndFrameworks.map((tool, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {tool}
                <button
                  onClick={() => removeTool(index)}
                  className="text-green-600 hover:text-green-800"
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

