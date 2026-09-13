export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  workflowType: 'crm' | 'multi-agent' | 'roadmap' | 'marketplace';
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  explanation: string;
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  description?: string;
}

export interface CertificateItem {
  title: string;
  category: string;
  focus: string;
}
