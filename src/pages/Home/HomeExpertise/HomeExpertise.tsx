const expertise = {
  frontEnd: [
    'JS/Typescript',
    'React',
    'Redux',
    'ChartJS',
    'Angular',
    'SCSS/SASS',
    'BEM',
    'Jest',
    'Enzyme',
    'Mocha',
    'Cypress',
    'Storybook',
    'Flutter',
  ],
  backEnd: ['Python', 'Node', 'Java', 'SQL', 'NoSQL', 'REST', 'GraphQL'],
  ciCd: ['GitHub', 'AWS', 'Firebase', 'Docker'],
};

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
      <div
        className="home-expertise__front-end-skills home-expertise__skills-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h6 className="jb-typography__h6--bold">Front End</h6>
        <div className="home-expertise__skills">
          {expertise.frontEnd.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
      <div
        className="home-expertise__back-end-skills home-expertise__skills-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h6 className="jb-typography__h6--bold">Back End</h6>
        <div className="home-expertise__skills">
          {expertise.backEnd.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
      <div
        className="home-expertise__ci-cd-skills home-expertise__skills-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h6 className="jb-typography__h6--bold">CI/CD</h6>
        <div className="home-expertise__skills">
          {expertise.ciCd.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

HomeExpertise.displayName = 'HomeExpertise';
export default HomeExpertise;
