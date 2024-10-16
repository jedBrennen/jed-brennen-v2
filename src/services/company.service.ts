import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { firestore, storage } from './firebase';
import { DbCompany, DbRole, DbSkill } from '@/types/api';
import { Company, Role, Skill, SkillArea } from '@/types/common';
import { getDownloadURL, ref } from 'firebase/storage';
import { getSkills } from './skill.service';

const sortDates = (a: Date, b: Date) => {
  return a.getTime() < b.getTime() ? 1 : a.getTime() > b.getTime() ? -1 : 0;
};

export const getCompanies = async (): Promise<Company[]> => {
  const companiesPromise = getDocs(collection(firestore, 'companies'));
  const skillsPromise = getSkills(false);

  const [companiesSnap, skills] = await Promise.all([
    companiesPromise,
    skillsPromise,
  ]);

  const skillsMap: { [key: string]: Skill } = skills.reduce(
    (prev, curr) => ({ ...prev, [curr.id]: curr }),
    {}
  );

  const companies = await Promise.all(
    companiesSnap.docs.map<Promise<Company>>(async (companyDoc) => {
      const dbCompany = companyDoc.data() as DbCompany;

      const logoUrl = await getDownloadURL(ref(storage, dbCompany.logo));
      const rolesSnapshot = await getDocs(
        query(
          collection(firestore, 'companies', companyDoc.id, 'roles'),
          orderBy('startDate', 'desc')
        )
      );

      const roles: Role[] = [];
      rolesSnapshot.forEach((roleDoc) => {
        const dbRole = roleDoc.data() as DbRole;
        roles.push({
          ...dbRole,
          id: roleDoc.id,
          startDate: dbRole.startDate.toDate(),
          endDate: dbRole.endDate?.toDate(),
        });
      });

      const companySkills = dbCompany.skills.map((s) => skillsMap[s]);

      return {
        ...dbCompany,
        id: companyDoc.id,
        logoUrl,
        skills: companySkills,
        roles,
      };
    })
  );

  return companies.sort((cA, cB) => {
    const latestA = cA.roles[0];
    const latestB = cB.roles[0];

    return sortDates(latestA.startDate, latestB.startDate);
  });
};

export const getCompany = async (id: string): Promise<Company> => {
  const companyDoc = await getDoc(doc(firestore, 'companies', id));
  const dbCompany = companyDoc.data() as DbCompany;

  const logoUrl = await getDownloadURL(ref(storage, dbCompany.logo));

  const skills: { [key: string]: Skill } = {};
  const skillsDocs = await Promise.all(
    dbCompany.skills.map(async (id) => {
      return await getDoc(doc(firestore, 'skills', id));
    })
  );
  skillsDocs.forEach((sd) => {
    const dbSkill = sd.data() as DbSkill;
    skills[sd.id] = { ...dbSkill, id: sd.id, area: dbSkill.area as SkillArea };
  });

  const rolesSnapshot = await getDocs(
    query(
      collection(firestore, 'companies', companyDoc.id, 'roles'),
      orderBy('startDate', 'desc')
    )
  );
  const roles: Role[] = [];
  rolesSnapshot.forEach((roleDoc) => {
    const dbRole = roleDoc.data() as DbRole;
    roles.push({
      ...dbRole,
      id: roleDoc.id,
      startDate: dbRole.startDate.toDate(),
      endDate: dbRole.endDate?.toDate(),
    });
  });
  const companySkills = dbCompany.skills.map((s) => skills[s]);

  return {
    ...dbCompany,
    id: companyDoc.id,
    logoUrl,
    skills: companySkills,
    roles: roles.sort((a, b) => sortDates(a.startDate, b.startDate)),
  };
};
