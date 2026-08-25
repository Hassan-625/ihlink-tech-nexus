export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  tag: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  detail: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface LeadershipItem {
  role: string;
  org: string;
  detail: string;
}

export interface HobbyItem {
  title: string;
  icon: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export type PageKey =
  | "home"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "hobbies"
  | "cv"
  | "contact";