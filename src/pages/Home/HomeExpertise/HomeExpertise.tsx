import JBHighlight from '@/components/JBHighlight/JBHighlight';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Skill, SkillArea } from '@/types/common';

interface HomeExpertiseProps {
  skills: Skill[];
  areaImages: { [key in SkillArea]: string };
}

const AreaLabels: { [key in SkillArea]: string } = {
  backend: 'Backend',
  frontend: 'Frontend',
  devops: 'DevOps',
};

const HomeExpertise: React.FC<HomeExpertiseProps> = ({
  skills,
  areaImages,
}) => {
  const [mappedSkills, setMappedSkills] = useState<{
    [key in SkillArea]: Skill[];
  }>({
    backend: [],
    frontend: [],
    devops: [],
  });
  const [selectedArea, setSelectedArea] = useState<SkillArea | undefined>();

  const handleSelectArea = (area: SkillArea) => {
    if (selectedArea === area) {
      setSelectedArea(undefined);
    } else {
      setSelectedArea(area);
    }
  };

  useEffect(() => {
    const backend = skills.filter((s) => s.area === 'backend');
    const frontend = skills.filter((s) => s.area === 'frontend');
    const devops = skills.filter((s) => s.area === 'devops');

    const map: { [key in SkillArea]: Skill[] } = {
      backend,
      frontend,
      devops,
    };
    setMappedSkills(map);
  }, [skills]);

  return (
    <section id="home-expertise" className="home-expertise home__section">
      <div
        className="home-expertise__header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h5>Expertise</h5>
      </div>
      <div className="home-expertise__areas">
        {Object.entries(mappedSkills).map(([area, skills]) => (
          <span
            key={area}
            className="home-expertise__area-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <JBHighlight
              className={classNames('home-expertise__area', {
                'home-expertise__area--selected': selectedArea === area,
              })}
              background={areaImages[area as SkillArea]}
              onClick={() => handleSelectArea(area as SkillArea)}
            >
              <label className="home-expertise__area-label jb-typography__label--medium-bold">
                {AreaLabels[area as SkillArea]}
              </label>
              <div className="home-expertise__area-content">
                <label className="home-expertise__area-content-label jb-typography__label--medium">
                  {AreaLabels[area as SkillArea]}
                </label>
                <ul className="home-expertise__area-skill-list">
                  {skills.map(({ id, name }) => (
                    <li key={id} className="jb-typography__label--small-bold">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </JBHighlight>
          </span>
        ))}
      </div>
    </section>
  );
};

HomeExpertise.displayName = 'HomeExpertise';
export default HomeExpertise;
