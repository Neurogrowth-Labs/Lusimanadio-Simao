export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI & Software' | 'Climate & Sustainability' | 'Trade & Logistics';
  details: {
    problem: string;
    solution: string;
    impact: string;
    techStack: string[];
  };
  imageSeed: string; // for custom stylized vector placeholders
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
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  type: 'degree' | 'certification' | 'training';
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

