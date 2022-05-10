import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ROUTE_COMPANIES } from 'common/routes';
import JBHighlight from 'components/JBHighlight/JBHighlight';
import companyData from 'data/companies';
import { Company } from 'common/types';
import useNavigateToTop from 'common/hooks/useNavigateToTop';
import { skills } from 'data/skills';

dayjs.extend(relativeTime);

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
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        My first professional developer role came in 2016. Since then I have
        accrued {dayjs('2016-06-01').toNow(true)} of development experience
        across {companies.length} different companies using more than{' '}
        {skills.frontEnd.length + skills.backEnd.length + skills.ciCd.length}{' '}
        different technologies.
      </p>
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
                className="home-experience__company-highlight"
                onClick={() => handleNavigate(id)}
              >
                <div className="home-experience__company">
                  <Logo name={`${id} logo`} />
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
