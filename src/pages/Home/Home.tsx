import { useEffect, useState } from 'react';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeExperience from './HomeExperience/HomeExperience';
import HomeExpertise from './HomeExpertise/HomeExpertise';
import { About, Company, Skill, SkillArea } from '@/types/common';
import { getAbout } from '@/services/about.service';
import { getCompanies } from '@/services/company.service';
import { getAreaImages, getSkills } from '@/services/skill.service';
import BlockSpinner from '@/assets/icons/block-spinner.svg?react';

const Home: React.FC = () => {
  const [about, setAbout] = useState<About>();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [areaImages, setAreaImages] =
    useState<{ [key in SkillArea]: string }>();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);

      const [about, companies, skills, areaImages] = await Promise.all([
        getAbout(),
        getCompanies(),
        getSkills(true),
        getAreaImages(),
      ]);

      setAbout(about);
      setSkills(skills);
      setAreaImages(areaImages);
      setCompanies(companies);

      setLoading(false);
    };

    fetchAll();
  }, []);

  if (loading || !about || !areaImages) {
    return (
      <section id="home" className="home__section home__header-section">
        <BlockSpinner className="home__spinner" name="loading" />
      </section>
    );
  }

  return (
    <>
      <section id="home" className="home__section home__header-section">
        <header className="home__header">
          <h1 data-aos="fade-right">Jed Brennen</h1>
          <h6 data-aos="fade-left" className="jb-typography__h6--thin">
            {about?.title}
          </h6>
        </header>
      </section>
      <HomeAbout summary={about.summary} education={about.education} />
      <HomeExpertise skills={skills} areaImages={areaImages} />
      <HomeExperience companies={companies} />
    </>
  );
};

Home.displayName = 'Home';
export default Home;
