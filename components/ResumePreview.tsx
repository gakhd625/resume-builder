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
        margin: 0.75in;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        * {
          margin: 0;
          padding: 0;
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
      <div className="mb-4 flex justify-end gap-2">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium"
        >
          Print / Export PDF
        </button>
      </div>
      
      <div
        ref={componentRef}
        className="bg-white p-8 text-gray-800 max-w-3xl mx-auto"
        style={{ 
          fontFamily: 'Arial, Helvetica, sans-serif',
          lineHeight: '1.4'
        }}
      >
        {/* Header - Centered */}
        <div className="text-center border-b border-gray-800 pb-3 mb-5">
          <h1 className="text-2xl font-bold mb-1">{data.personalDetails.name || 'Your Name'}</h1>
          <p className="text-base font-bold mb-2">{data.personalDetails.title || 'Your Title'}</p>
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
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-sm">{exp.company}</h3>
                    <p className="font-bold text-sm">{exp.role}</p>
                  </div>
                  <span className="text-xs whitespace-nowrap ml-4">
                    {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                  </span>
                </div>
                {exp.responsibilities.length > 0 && (
                  <ul className="ml-5 space-y-1 mt-1" style={{ listStyleType: 'disc' }}>
                    {exp.responsibilities.filter(r => r.trim()).map((resp, idx) => (
                      <li key={idx} className="text-xs" style={{ display: 'list-item' }}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Professional Training */}
        {data.training.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              PROFESSIONAL TRAINING
            </h2>
            {data.training.map((training) => (
              <div key={training.id} className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-sm">{training.institution}</h3>
                    {training.program && (
                      <p className="font-bold text-sm">{training.program}</p>
                    )}
                  </div>
                  <span className="text-xs whitespace-nowrap ml-4">
                    {formatDateRange(training.startDate, training.endDate)}
                  </span>
                </div>
                {training.description && (
                  <p className="text-xs ml-4 mt-1">{training.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              EDUCATION
            </h2>
            {data.education.map((education) => (
              <div key={education.id} className="mb-3">
                <div className="flex justify-between items-start mb-1">
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
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              PROJECTS
            </h2>
            {data.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <h3 className="font-bold text-sm">{project.name}</h3>
                {project.description && (
                  <p className="text-xs ml-4 mt-1">{project.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              ACHIEVEMENTS
            </h2>
            {data.achievements.map((achievement) => (
              <div key={achievement.id} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{achievement.title}</h3>
                    {achievement.description && (
                      <p className="text-xs ml-4 mt-1">{achievement.description}</p>
                    )}
                  </div>
                  {achievement.date && (
                    <span className="text-xs whitespace-nowrap ml-4">
                      {achievement.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-1">
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
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
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
          <section className="mb-5">
            <h2 className="text-base font-bold uppercase mb-3 border-b border-gray-800 pb-1">
              REFERENCES
            </h2>
            {data.references.map((ref) => (
              <div key={ref.id} className="mb-3">
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

