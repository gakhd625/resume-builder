export interface PersonalDetails {
  name: string;
  title: string;
  email: string;
  portfolio: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string[];
}

export interface Training {
  id: string;
  institution: string;
  program: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Skills {
  programmingLanguages: string[];
  toolsAndFrameworks: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

export interface ResumeData {
  personalDetails: PersonalDetails;
  experience: Experience[];
  training: Training[];
  education: Education[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
  skills: Skills;
  references: Reference[];
}

