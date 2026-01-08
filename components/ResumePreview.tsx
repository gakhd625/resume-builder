'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import type { ResumeData } from '@/types/resume';

interface ResumePreviewProps {
  data: ResumeData;
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${data.personalDetails.name || 'Resume'}_Resume`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        ul {
          list-style-type: disc;
          margin-left: 1rem;
          padding-left: 0;
        }
        li {
          display: list-item;
          margin-bottom: 2px;
        }
      }
    `,
  });

  const formatDateRange = (start: string, end: string, isCurrent?: boolean) => {
    if (isCurrent && end.toLowerCase() === 'present') {
      return `${start}-Present`;
    }
    if (start && end) {
      return `${start}-${end}`;
    }
    return start || end || '';
  };

  return (
    <div className="bg-white">
      <div className="mb-6 flex justify-end gap-2 px-6 pt-4">
        <button
          onClick={handlePrint}
          className="px-6 py-2.5 bg-brand-red text-white rounded-sm hover:bg-red-700 text-sm font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          EXPORT PDF
        </button>
      </div>
      
      <div
        ref={componentRef}
        className="bg-white p-6 text-gray-800 max-w-3xl mx-auto"
        style={{ 
          fontFamily: 'Arial, Helvetica, sans-serif',
          lineHeight: '1.3'
        }}
      >
        {/* Header - Centered */}
        <div className="text-center border-b border-gray-800 pb-2 mb-4">
          <h1 className="text-2xl font-bold mb-0.5">{data.personalDetails.name || 'Your Name'}</h1>
          <p className="text-base font-bold mb-1">{data.personalDetails.title || 'Your Title'}</p>
          <div className="text-sm space-y-0.5">
            {data.personalDetails.email && (
              <div>Email: {data.personalDetails.email}</div>
            )}
            {data.personalDetails.portfolio && (
              <div>Portfolio Link: <a href={data.personalDetails.portfolio} className="text-blue-600 underline">{data.personalDetails.portfolio}</a></div>
            )}
          </div>
        </div>

        {/* Professional Experience */}
        {data.experience.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              PROFESSIONAL EXPERIENCE
            </h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className={index < data.experience.length - 1 ? "mb-3" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{exp.company}</h3>
                    <p className="font-bold text-sm">{exp.role}</p>
                  </div>
                  <span className="text-xs whitespace-nowrap ml-4">
                    {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                  </span>
                </div>
                {exp.responsibilities.length > 0 && (
                  <ul className="mt-0.5 text-xs" style={{ listStyleType: 'disc', marginLeft: '1rem', paddingLeft: 0 }}>
                    {exp.responsibilities.filter(r => r.trim()).map((resp, idx) => (
                      <li key={idx} style={{ display: 'list-item', marginBottom: '2px' }}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Professional Training */}
        {data.training.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              PROFESSIONAL TRAINING
            </h2>
            {data.training.map((training, index) => (
              <div key={training.id} className={index < data.training.length - 1 ? "mb-2" : ""}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <h3 className="font-bold text-sm">
                      {training.program && training.institution 
                        ? `${training.program} — ${training.institution}`
                        : training.institution || training.program}
                    </h3>
                  </div>
                  <span className="text-xs whitespace-nowrap">
                    {formatDateRange(training.startDate, training.endDate)}
                  </span>
                </div>
                {training.description && (
                  <p className="text-xs mt-0.5" style={{ marginLeft: '1rem' }}>{training.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              EDUCATION
            </h2>
            {data.education.map((education, index) => (
              <div key={education.id} className={index < data.education.length - 1 ? "mb-2" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{education.institution}</h3>
                    {education.degree && (
                      <p className="font-bold text-sm">{education.degree}</p>
                    )}
                  </div>
                  <span className="text-xs whitespace-nowrap ml-4">
                    {formatDateRange(education.startDate, education.endDate)}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              PROJECTS
            </h2>
            {data.projects.map((project, index) => (
              <div key={project.id} className={index < data.projects.length - 1 ? "mb-2" : ""}>
                <h3 className="font-bold text-sm">{project.name}</h3>
                {project.description && (
                  <p className="text-xs mt-0.5" style={{ marginLeft: '1rem' }}>{project.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              ACHIEVEMENTS
            </h2>
            {data.achievements.map((achievement, index) => (
              <div key={achievement.id} className={index < data.achievements.length - 1 ? "mb-2" : ""}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <h3 className="font-bold text-sm">{achievement.title}</h3>
                  </div>
                  {achievement.date && (
                    <span className="text-xs whitespace-nowrap">
                      {achievement.date}
                    </span>
                  )}
                </div>
                {achievement.description && (
                  <p className="text-xs mt-0.5" style={{ marginLeft: '1rem' }}>{achievement.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              CERTIFICATIONS
            </h2>
            <div className="space-y-0.5">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between">
                  <span className="font-bold text-sm">
                    {cert.name}
                    {cert.issuer && `, ${cert.issuer}`}
                  </span>
                  {cert.date && (
                    <span className="text-xs">{cert.date}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {(data.skills.programmingLanguages.length > 0 || data.skills.toolsAndFrameworks.length > 0) && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              ADDITIONAL INFORMATION
            </h2>
            {data.skills.programmingLanguages.length > 0 && (
              <div className="mb-1">
                <span className="font-bold text-sm">Programming Languages: </span>
                <span className="text-xs">
                  {data.skills.programmingLanguages.join(', ')}
                </span>
              </div>
            )}
            {data.skills.toolsAndFrameworks.length > 0 && (
              <div>
                <span className="font-bold text-sm">Tools and Frameworks: </span>
                <span className="text-xs">
                  {data.skills.toolsAndFrameworks.join(', ')}
                </span>
              </div>
            )}
          </section>
        )}

        {/* References */}
        {data.references.length > 0 && (
          <section className="mb-4">
            <h2 className="text-base font-bold uppercase mb-1 border-b border-gray-800 pb-0.5">
              REFERENCES
            </h2>
            {data.references.map((ref, index) => (
              <div key={ref.id} className={index < data.references.length - 1 ? "mb-2" : ""}>
                <h3 className="font-bold text-sm">{ref.name}</h3>
                {(ref.position || ref.company) && (
                  <p className="text-xs">
                    {ref.position}
                    {ref.position && ref.company && ', '}
                    {ref.company}
                  </p>
                )}
                <div className="text-xs">
                  {ref.email && <span>Email: {ref.email}</span>}
                  {ref.email && ref.phone && <span> | </span>}
                  {ref.phone && <span>Phone: {ref.phone}</span>}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

