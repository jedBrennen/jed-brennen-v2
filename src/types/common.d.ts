import { Timestamp } from 'firebase/firestore';

export interface Education {
  id: string;
  startDate: Date;
  endDate: Date;
  institution: string;
  course: string;
  grade: string;
}

export interface About {
  id: string;
  title: string;
  summary: string;
  education: Education;
}

export type SkillArea = 'backend' | 'frontend' | 'devops';
export interface Skill {
  id: string;
  name: string;
  area: SkillArea;
  highlight: boolean;
  priority: number;
}

export interface Role {
  id: string;
  title: string;
  startDate: Date;
  endDate?: Date;
}

export interface Company {
  id: string;
  name: string;
  summary: string;
  logoUrl: string;
  locations: string[];
  roles: Role[];
  skills: Skill[];
}
