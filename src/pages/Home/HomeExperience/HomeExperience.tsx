import { ROUTE_COMPANIES } from '@/common/routes';
import JBHighlight from '@/components/JBHighlight/JBHighlight';
import useNavigateToTop from '@/common/hooks/useNavigateToTop';
import { Company } from '@/types/common';

interface HomeExperienceProps {
  companies: Company[];
}

const HomeExperience: React.FC<HomeExperienceProps> = ({ companies }) => {
  const navigate = useNavigateToTop();

  const handleNavigate = (companyId: string) => {
    navigate(`${ROUTE_COMPANIES}/${companyId}`);
  };

  return (
    <section id="home-experience" className="home-experience home__section">
      <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Experience
      </h5>
      <div className="home-experience__companies">
        {companies.map(({ id, name, logoUrl }) => {
          return (
            <span
              key={id}
              className="home-experience__company-container"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <JBHighlight
                className="home-experience__company-highlight"
                onClick={() => handleNavigate(id)}
              >
                <div className="home-experience__company">
                  <img src={logoUrl} />
                  <label className="jb-typography__label--medium-bold">
                    {name}
                  </label>
                </div>
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
