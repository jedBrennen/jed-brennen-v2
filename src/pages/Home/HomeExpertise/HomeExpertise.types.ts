export type ExpertiseArea = 'front-end' | 'back-end' | 'ci-cd';

export interface HomeExpertiseArea {
  area: ExpertiseArea;
  label: string;
  skillSet: string[];
  backgroundImage: string;
}
