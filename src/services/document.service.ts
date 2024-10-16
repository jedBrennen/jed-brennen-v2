import { storage } from './firebase';
import { getDownloadURL, ref } from 'firebase/storage';

export const getCvDownloadUrl = async (): Promise<string> => {
  return await getDownloadURL(ref(storage, 'documents/Jed Brennen CV.pdf'));
};
