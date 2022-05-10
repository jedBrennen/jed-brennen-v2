const HomeAbout: React.FC = () => {
  return (
    <section
      id="home-about"
      className="home-about home__section home__dual-section"
    >
      <div id="home-overview" className="home-about__overview">
        <h5
          data-aos="fade-up"
          data-aos-anchor="#home-overview"
          data-aos-anchor-placement="top-bottom"
        >
          Overview
        </h5>
        <p
          data-aos="fade-up"
          data-aos-anchor="#home-overview"
          data-aos-anchor-placement="top-bottom"
        >
          I'm a Full stack developer with a 1st class degree in Computer
          Science, bringing proven practical experience from nearly four years
          working across the stack, writing high quality, testable code, using
          technologies such as JS/React, Python and SQL.
        </p>
      </div>
      <div id="home-education" className="home-about__education">
        <h5
          data-aos="fade-up"
          data-aos-anchor="#home-education"
          data-aos-anchor-placement="top-bottom"
        >
          Education
        </h5>
        <div
          data-aos="fade-up"
          data-aos-anchor="#home-education"
          data-aos-anchor-placement="top-bottom"
        >
          <p className="jb-typography__label--xsmall">2014-2018</p>
          <p className="jb-typography__label--small-bold">
            BSc Computer Science w/ Industrial Year
          </p>
          <p className="jb-typography__label--xsmall">1st Class Honours</p>
          <p className="jb-typography__label--xsmall">University of Reading</p>
        </div>
      </div>
    </section>
  );
};

HomeAbout.displayName = 'HomeAbout';
export default HomeAbout;
