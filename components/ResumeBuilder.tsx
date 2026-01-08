'use client';

import { useState } from 'react';
import type { ResumeData } from '@/types/resume';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ExperienceForm from './forms/ExperienceForm';
import TrainingForm from './forms/TrainingForm';
import EducationForm from './forms/EducationForm';
import ProjectsForm from './forms/ProjectsForm';
import AchievementsForm from './forms/AchievementsForm';
import CertificationsForm from './forms/CertificationsForm';
import SkillsForm from './forms/SkillsForm';
import ReferencesForm from './forms/ReferencesForm';
import ResumePreview from './ResumePreview';

const initialResumeData: ResumeData = {
  personalDetails: {
    name: '',
    title: '',
    email: '',
    portfolio: '',
  },
  experience: [],
  training: [],
  education: [],
  projects: [],
  achievements: [],
  certifications: [],
  skills: {
    programmingLanguages: [],
    toolsAndFrameworks: [],
  },
  references: [],
};

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [showPreview, setShowPreview] = useState(false);

  const updatePersonalDetails = (details: Partial<ResumeData['personalDetails']>) => {
    setResumeData(prev => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, ...details },
    }));
  };

  const updateExperience = (experience: ResumeData['experience']) => {
    setResumeData(prev => ({ ...prev, experience }));
  };

  const updateTraining = (training: ResumeData['training']) => {
    setResumeData(prev => ({ ...prev, training }));
  };

  const updateEducation = (education: ResumeData['education']) => {
    setResumeData(prev => ({ ...prev, education }));
  };

  const updateProjects = (projects: ResumeData['projects']) => {
    setResumeData(prev => ({ ...prev, projects }));
  };

  const updateAchievements = (achievements: ResumeData['achievements']) => {
    setResumeData(prev => ({ ...prev, achievements }));
  };

  const updateCertifications = (certifications: ResumeData['certifications']) => {
    setResumeData(prev => ({ ...prev, certifications }));
  };

  const updateSkills = (skills: ResumeData['skills']) => {
    setResumeData(prev => ({ ...prev, skills }));
  };

  const updateReferences = (references: ResumeData['references']) => {
    setResumeData(prev => ({ ...prev, references }));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-foreground mb-3 tracking-tight">
            Professional <span className="text-brand-red">Resume</span> Builder
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fill in your details below. Your professional resume will update in real-time on the right.
          </p>
        </div>

        <div className="flex gap-12 flex-col lg:flex-row">
          {/* Form Section */}
          <div className={`${showPreview ? 'hidden lg:block lg:w-1/2' : 'w-full lg:w-1/2'}`}>
            <div className="bg-[#111111] border border-white/5 rounded-xl shadow-2xl p-8 space-y-12">
              <PersonalDetailsForm
                data={resumeData.personalDetails}
                onChange={updatePersonalDetails}
              />
              
              <ExperienceForm
                data={resumeData.experience}
                onChange={updateExperience}
              />
              
              <TrainingForm
                data={resumeData.training}
                onChange={updateTraining}
              />
              
              <EducationForm
                data={resumeData.education}
                onChange={updateEducation}
              />
              
              <ProjectsForm
                data={resumeData.projects}
                onChange={updateProjects}
              />
              
              <AchievementsForm
                data={resumeData.achievements}
                onChange={updateAchievements}
              />
              
              <CertificationsForm
                data={resumeData.certifications}
                onChange={updateCertifications}
              />
              
              <SkillsForm
                data={resumeData.skills}
                onChange={updateSkills}
              />
              
              <ReferencesForm
                data={resumeData.references}
                onChange={updateReferences}
              />
            </div>
          </div>

          {/* Preview Section */}
          <div className={`${showPreview ? 'w-full lg:w-1/2' : 'hidden lg:block lg:w-1/2'}`}>
            <div className="sticky top-24">
              <div className="bg-[#111111] border border-white/5 rounded-xl shadow-2xl p-6 mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                    Live Preview
                  </h2>
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="lg:hidden px-6 py-2 bg-brand-red text-white font-bold rounded-sm hover:bg-red-700 transition-all"
                  >
                    {showPreview ? 'EDIT FORM' : 'VIEW PREVIEW'}
                  </button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5">
                <ResumePreview data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

