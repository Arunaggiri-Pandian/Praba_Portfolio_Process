
export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  dates: string;
  location: string;
  details: string[];
  logo?: string;
  certificate?: string;
}

export interface Skills {
  [key: string]: string[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  technologies: string;
  date: string;
  description: string[];
  image?: string;
}

export interface Publication {
  authors: string[];
  year: number;
  title: string;
  conference: string;
  link?: string;
  linkText?: string;
  category?: string;
}

export interface Interest {
  title: string;
  icon: string;
  description: string;
}

export interface Hobby {
  title: string;
  icon: string;
  mindset: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  interests: Interest[];
  hobbies: Hobby[];
}
