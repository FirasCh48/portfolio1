export interface CareerRoadmapItem {
  id: string;
  year: string;
  quarter?: string;
  title: string;
  titleEn?: string;
  category: 'education' | 'experience' | 'innovation' | 'future';
  categoryLabel: string;
  categoryLabelEn?: string;
  organization: string;
  summary: string;
  summaryEn?: string;
  keyAchievements: string[];
  keyAchievementsEn?: string[];
  skills: string[];
  status: 'completed' | 'current' | 'vision';
}

export interface Experience {
  id: string;
  role: string;
  roleEn?: string;
  company: string;
  location: string;
  period: string;
  periodEn?: string;
  type: string; // e.g., 'Stage de fin d'études', 'Stage de perfectionnement'
  typeEn?: string;
  description: string[];
  descriptionEn?: string[];
  techStack: string[];
  badge?: string;
  badgeEn?: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  category: 'AI & ML' | '3D & Gaming' | 'Full-Stack Web' | 'UI/UX & Tools';
  description: string;
  descriptionEn?: string;
  longDescription: string;
  longDescriptionEn?: string;
  architectureDetails?: string[];
  architectureDetailsEn?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  highlights: string[];
  highlightsEn?: string[];
  is3DModelPreviewable?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  titleEn?: string;
  issuer: string;
  period: string;
  periodEn?: string;
  location?: string;
  skills: string[];
  badgeColor: string;
  verified: boolean;
  certificateUrl?: string;
  credentialId?: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  icon?: string;
  highlight?: boolean;
  yearsExperience?: string; // e.g. "3+ ans"
  projectsCount?: string | number; // e.g. "8+ projets"
  descriptionFr?: string;
  descriptionEn?: string;
}

export interface SkillCategory {
  title: string;
  titleEn?: string;
  icon: string;
  skills: SkillItem[];
}

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  location: string;
  date: string;
  dateEn?: string;
  topic: string;
  topicEn?: string;
  role?: string;
  roleEn?: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  category: string;
  categoryEn?: string;
  date: string;
  dateEn?: string;
  readTime: string;
  readTimeEn?: string;
  author: {
    name: string;
    role: string;
    roleEn?: string;
    avatar: string;
  };
  tags: string[];
  coverGradient: string;
}

export interface Education {
  id: string;
  degree: string;
  degreeEn?: string;
  institution: string;
  location: string;
  period: string;
  periodEn?: string;
  status?: string;
  statusEn?: string;
  highlights: string[];
  highlightsEn?: string[];
}

export interface ExtraCurricular {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface FaqItem {
  id: string;
  category: 'recruitment' | 'technical' | 'availability' | 'collaboration';
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
  badgeFr?: string;
  badgeEn?: string;
}

export interface FAQItem {
  id: string;
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
  category: 'recruitment' | 'technical' | 'work_model' | 'collaboration';
  categoryLabelFr: string;
  categoryLabelEn: string;
  popular?: boolean;
}
