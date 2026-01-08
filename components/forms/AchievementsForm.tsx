'use client';

import type { Achievement } from '@/types/resume';

interface AchievementsFormProps {
  data: Achievement[];
  onChange: (data: Achievement[]) => void;
}

export default function AchievementsForm({ data, onChange }: AchievementsFormProps) {
  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      title: '',
      date: '',
      description: '',
    };
    onChange([...data, newAchievement]);
  };

  const removeAchievement = (id: string) => {
    onChange(data.filter(a => a.id !== id));
  };

  const updateAchievement = (id: string, updates: Partial<Achievement>) => {
    onChange(data.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold">6</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Achievements</h2>
        </div>
        <button
          onClick={addAchievement}
          className="px-4 py-2 bg-brand-red text-white rounded-sm hover:bg-red-700 text-xs font-bold transition-colors"
        >
          ADD ACHIEVEMENT
        </button>
      </div>

      <div className="space-y-8">
        {data.map((achievement) => (
          <div key={achievement.id} className="relative bg-[#1A1A1A] border border-white/5 rounded-sm p-6 group">
            <button
              onClick={() => removeAchievement(achievement.id)}
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors text-xs font-bold"
            >
              REMOVE
            </button>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Achievement Title
                  </label>
                  <input
                    type="text"
                    value={achievement.title}
                    onChange={(e) => updateAchievement(achievement.id, { title: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder="2nd Place, Hackathon 2025"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Date
                  </label>
                  <input
                    type="text"
                    value={achievement.date}
                    onChange={(e) => updateAchievement(achievement.id, { date: e.target.value })}
                    className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600"
                    placeholder="May 2025"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Description
                </label>
                <textarea
                  value={achievement.description}
                  onChange={(e) => updateAchievement(achievement.id, { description: e.target.value })}
                  className="w-full bg-[#111111] border border-white/10 px-4 py-3 rounded-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-600 min-h-[80px]"
                  placeholder="Recognized for exceptional performance in..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

