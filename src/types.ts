export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  details: {
    problem: string;
    solution: string;
    impact: string;
    techStack: string[];
  };
  imageSeed: string; // for custom stylized vector placeholders
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  bulletPoints: string[];
  category: 'AI' | 'Sustainability' | 'Trade' | 'Leadership';
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  year: string;
  type: 'book' | 'academic' | 'national' | 'engagement';
  description: string;
  link?: string;
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  type: 'degree' | 'certification' | 'training';
  image?: string;
  description?: string;
  year?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  organization: string;
  message: string;
  timestamp: string;
}

export interface Endorsement {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface Language {
  id: string;
  name: string;
  fluency: string;
  percentage: number;
  details: string;
}

export interface SpeakingEngagement {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  topic: string;
  category: 'AI & Tech' | 'Climate & Sustainability' | 'Trade & Logistics' | 'Leadership';
  status: 'Upcoming' | 'Past';
}

export interface Service {
  id: string;
  title: string;
  targetAudience: 'C-Suite' | 'Youth & Women' | 'Mid-Career' | 'Sovereign & Govt';
  sectors: string[];
  description: string;
  iconName: string; // references lucide icon
}

export interface Nomination {
  id: string;
  award: string;
  category: string;
  year: string;
  organization: string;
  description: string;
}

export interface Membership {
  id: string;
  role: string;
  organization: string;
}

