import JBHighlight from 'components/JBHighlight/JBHighlight';
import Dashboard from 'assets/images/dashboard.jpg';
import Server from 'assets/images/server.jpg';
import Launch from 'assets/images/launch.jpg';
import { useState } from 'react';
import { ExpertiseArea, HomeExpertiseArea } from './HomeExpertise.types';
import SKILLS from 'data/skills';
import classNames from 'classnames';

const EXPERTISE_AREAS: HomeExpertiseArea[] = [
  {
    area: 'front-end',
    label: 'Front End',
    skillSet: SKILLS.frontEnd,
    backgroundImage: Dashboard,
  },
  {
    area: 'back-end',
    label: 'Back End',
    skillSet: SKILLS.backEnd,
    backgroundImage: Server,
  },
  {
    area: 'ci-cd',
    label: 'CI/CD',
    skillSet: SKILLS.ciCd,
    backgroundImage: Launch,
  },
];

const HomeExpertise: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<ExpertiseArea | undefined>();

  const handleSelectArea = (area: ExpertiseArea) => {
    if (selectedArea === area) {
      setSelectedArea(undefined);
    } else {
      setSelectedArea(area);
    }
  };

  return (
    <section id="home-expertise" className="home-expertise home__section">
      <div
        className="home-expertise__header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h5>Expertise</h5>
        <p>
          My expertise is weighted towards the front end owing to my most recent
          roles and experience. However, I am committed to remaining proficient
          across the full stack.
        </p>
      </div>
      <div className="home-expertise__areas">
        {EXPERTISE_AREAS.map(({ area, label, skillSet, backgroundImage }) => (
          <span
            className="home-expertise__area-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <JBHighlight
              className={classNames('home-expertise__area', {
                'home-expertise__area--selected': selectedArea === area,
              })}
              background={backgroundImage}
              onClick={() => handleSelectArea(area)}
            >
              <label className="home-expertise__area-label jb-typography__label--medium-bold">
                {label}
              </label>
              <div className="home-expertise__area-content">
                <label className="home-expertise__area-content-label jb-typography__label--medium">
                  {label}
                </label>
                <ul className="home-expertise__area-skill-list">
                  {skillSet.map((skill) => (
                    <li className="jb-typography__label--small-bold">
                      {skill}
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
