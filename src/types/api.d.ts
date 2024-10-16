import { Timestamp } from 'firebase/firestore';

export interface DbEducation {
  startDate: Timestamp;
  endDate: Timestamp;
  institution: string;
  course: string;
  grade: string;
}

export interface DbAbout {
  title: string;
  summary: string;
}

export interface DbSkill {
  name: string;
  area: string;
  highlight: boolean;
  priority: number;
}

export interface DbRole {
  title: string;
  startDate: Timestamp;
  endDate?: Timestamp;
}

export interface DbCompany {
  name: string;
  summary: string;
  logo: string;
  locations: string[];
  skills: string[];
}
