import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { firestore, storage } from './firebase';
import { DbSkill } from '@/types/api';
import { Skill, SkillArea } from '@/types/common';
import { getDownloadURL, ref } from 'firebase/storage';

export const getSkills = async (onlyHighlighted = false): Promise<Skill[]> => {
  const skillsRef = collection(firestore, 'skills');
  const skillsOrder = orderBy('priority', 'asc');
  const skillsQuery = onlyHighlighted
    ? query(skillsRef, where('highlight', '==', true), skillsOrder)
    : query(skillsRef, skillsOrder);
  const skillsSnap = await getDocs(skillsQuery);

  const skills: Skill[] = [];
  skillsSnap.forEach((s) => {
    const dbSkill = s.data() as DbSkill;
    skills.push({
      ...dbSkill,
      id: s.id,
      area: dbSkill.area as SkillArea,
    });
  });

  return skills;
};

export const getAreaImages = async (): Promise<{
  [key in SkillArea]: string;
}> => {
  const beUrlPromise = getDownloadURL(ref(storage, 'img/server.jpg'));
  const feUrlPromise = getDownloadURL(ref(storage, 'img/dashboard.jpg'));
  const doUrlPromise = getDownloadURL(ref(storage, 'img/launch.jpg'));

  const [backend, frontend, devops] = await Promise.all([
    beUrlPromise,
    feUrlPromise,
    doUrlPromise,
  ]);

  return { backend, frontend, devops };
};
