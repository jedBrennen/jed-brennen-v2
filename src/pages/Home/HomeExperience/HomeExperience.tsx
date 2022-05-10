import { ReactComponent as AIGLogo } from 'assets/logos/aig-logo.svg';
import { ReactComponent as SageLogo } from 'assets/logos/sage-logo.svg';
import { ReactComponent as UrbanScienceLogo } from 'assets/logos/urban-science-logo.svg';
import JBHighlight from 'components/JBHightlight/JBHightlight';

const companies = [
  {
    name: 'AIG',
    logo: AIGLogo,
  },
  {
    name: 'Sage People',
    logo: SageLogo,
  },
  {
    name: 'Urban Science',
    logo: UrbanScienceLogo,
  },
];

const HomeExperience: React.FC = () => {
  return (
    <section id="home-experience" className="home-experience home__section">
      <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Experience
      </h5>
      <div className="home-experience__companies">
        {companies.map(({ name, logo: Logo }) => (
          <span
            key={name}
            className="home-experience__company-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <JBHighlight className="home-experience__company">
              <Logo name={`${name} logo`} />
              <label className="jb-typography__label--medium-bold">
                {name}
              </label>
            </JBHighlight>
          </span>
        ))}
      </div>
    </section>
  );
};

HomeExperience.displayName = 'HomeExperience';
export default HomeExperience;
