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
    <div className="border-b pb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Professional Training</h2>
        <button
          onClick={addTraining}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Add More
        </button>
      </div>
      <div className="space-y-6">
        {data.map((training) => (
          <div key={training.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium text-gray-700">Training Entry</h3>
              <button
                onClick={() => removeTraining(training.id)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution *
                </label>
                <input
                  type="text"
                  value={training.institution}
                  onChange={(e) => updateTraining(training.id, { institution: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="WPH Academy CodeCraft Bootcamp - WPH Digital Pte Ltd"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program/Course
                </label>
                <input
                  type="text"
                  value={training.program}
                  onChange={(e) => updateTraining(training.id, { program: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=".NET Framework Bootcamp"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={training.startDate}
                    onChange={(e) => updateTraining(training.id, { startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nov 2025"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={training.endDate}
                    onChange={(e) => updateTraining(training.id, { endDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Dec 2025"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={training.description}
                  onChange={(e) => updateTraining(training.id, { description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Describe the training program..."
                />
              </div>
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-gray-500 text-sm">No training entries yet. Click "Add More" to add one.</p>
        )}
      </div>
    </div>
  );
}

