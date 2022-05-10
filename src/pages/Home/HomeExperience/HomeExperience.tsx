import { ROUTE_COMPANIES } from 'common/routes';
import JBHighlight from 'components/JBHightlight/JBHightlight';
import companyData from 'data/companies';
import { Company } from 'common/types';
import useNavigateToTop from 'common/hooks/useNavigateToTop';

const HomeExperience: React.FC = () => {
  const companies = companyData as Company[];
  const navigate = useNavigateToTop();

  const handleNavigate = (companyName: string) => {
    navigate(`${ROUTE_COMPANIES}/${companyName}`);
  };

  return (
    <section id="home-experience" className="home-experience home__section">
      <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Experience
      </h5>
      <div className="home-experience__companies">
        {companies.map(({ id, name, logo: Logo }) => {
          return (
            <span
              key={id}
              className="home-experience__company-container"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <JBHighlight
                className="home-experience__company"
                onClick={() => handleNavigate(id)}
              >
                <Logo name={`${id} logo`} />
                <label className="jb-typography__label--medium-bold">
                  {name}
                </label>
              </JBHighlight>
            </span>
          );
        })}
      </div>
    </section>
  );
};

HomeExperience.displayName = 'HomeExperience';
export default HomeExperience;
