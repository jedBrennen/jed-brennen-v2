import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';
import { DbAbout, DbEducation } from '@/types/api';
import { About } from '@/types/common';

export const getAbout = async (): Promise<About> => {
  const aboutPromise = getDocs(collection(firestore, 'about'));
  const educationPromise = getDocs(collection(firestore, 'education'));

  const [aboutSnap, educationSnap] = await Promise.all([
    aboutPromise,
    educationPromise,
  ]);

  const aboutDoc = aboutSnap.docs[0];
  const dbAbout = aboutDoc.data() as DbAbout;
  const educationDoc = educationSnap.docs[0];
  const dbEducation = educationDoc.data() as DbEducation;

  return {
    ...dbAbout,
    id: aboutDoc.id,
    education: {
      ...dbEducation,
      id: educationDoc.id,
      startDate: dbEducation.startDate.toDate(),
      endDate: dbEducation.endDate.toDate(),
    },
  };
};
