'use client';

import type { Project } from '@/types/resume';

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export default function ProjectsForm({ data, onChange }: ProjectsFormProps) {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(p => p.id !== id));
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onChange(data.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">5</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Projects</h2>
        </div>
        <button
          onClick={addProject}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD PROJECT
        </button>
      </div>

      <div className="space-y-8">
        {data.map((project) => (
          <div key={project.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeProject(project.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Project Name
                </label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => updateProject(project.id, { name: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                  placeholder="Safeplay - AI-Powered Chrome Extension"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, { description: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600 min-h-[100px]"
                  placeholder="Describe the technical challenges and outcomes..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

