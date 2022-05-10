import JBHighlight from 'components/JBHighlight/JBHighlight';
import Dashboard from 'assets/images/dashboard.jpg';
import Server from 'assets/images/server.jpg';
import Launch from 'assets/images/launch.jpg';

const HomeExpertise: React.FC = () => {
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
      <JBHighlight
        className="home-expertise__area"
        background={Dashboard}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <label className="jb-typography__label--medium-bold">Front End</label>
      </JBHighlight>
      <JBHighlight
        className="home-expertise__area"
        background={Server}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <label className="jb-typography__label--medium-bold">Back End</label>
      </JBHighlight>
      <JBHighlight
        className="home-expertise__area"
        background={Launch}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <label className="jb-typography__label--medium-bold">CI/CD</label>
      </JBHighlight>
    </section>
  );
};

HomeExpertise.displayName = 'HomeExpertise';
export default HomeExpertise;
