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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Resume Builder</h1>
          <p className="text-gray-600">Create your professional resume in minutes develop by <a href="https://www.linkedin.com/in/gerlie-ann-daga-as-326554305/" className="text-blue-600 underline">Gerlie D.</a></p>
        </div>

        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Form Section */}
          <div className={`${showPreview ? 'hidden lg:block lg:w-1/2' : 'w-full lg:w-1/2'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
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
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="lg:hidden px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {showPreview ? 'Edit' : 'Preview'}
                  </button>
                </div>
              </div>
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

