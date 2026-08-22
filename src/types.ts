export interface Project {
  id: string;
  profileTitle: string;
  clientName: string;
  category: string;
  date: string;
  shortSummary: string;
  tags: string[];
  performanceMetricLevel: 'Excellent' | 'Good' | 'Average' | 'Learning Project' | 'Strategy Project' | 'No Live Results';
  metricScoreLevel: string;
  pdfFileName: string;
  pdfFileUrl: string;
  pdfFileSize: number; // in bytes
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  name: string;
  category: 'Marketing' | 'Tech & AI' | 'Tools';
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  image?: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institute: string;
  year: string;
}

export interface ToolItem {
  name: string;
  iconName: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WebDevProject {
  id: string;
  title: string;
  url: string;
  status: "Live" | "In Progress" | "Featured";
  category: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  pdfUrl: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  metrics?: string;
  featured?: boolean;
}

export interface AppSaasProject {
  id: string;
  projectName: string;
  thumbnail: string;
  description: string;
  category: string;
  categories: string[];
  features: string[];
  technologies: string[];
  status: "Live" | "Beta" | "Featured";
  liveUrl: string;
  githubUrl?: string;
  badge?: string;
  featured?: boolean;
}

export interface ProjectPreview {
  id: string;
  title: string;
  client: string;
  category: string;
  pdfUrl: string;
  description: string;
  tags: string[];
  image: string;
  metrics?: string;
  featured?: boolean;
  pages?: number;
  badge?: string;
}

