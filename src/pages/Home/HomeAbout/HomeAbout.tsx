import { Education } from '@/types/common';

interface AboutProps {
  summary: string;
  education: Education;
}

const HomeAbout: React.FC<AboutProps> = ({ summary, education }) => {
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
          {summary}
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
          <p className="jb-typography__label--xsmall">
            {education.startDate.getFullYear()} -
            {education.endDate.getFullYear()}
          </p>
          <p className="jb-typography__label--small-bold">{education.course}</p>
          <p className="jb-typography__label--xsmall">{education.grade}</p>
          <p className="jb-typography__label--xsmall">
            {education.institution}
          </p>
        </div>
      </div>
    </section>
  );
};

HomeAbout.displayName = 'HomeAbout';
export default HomeAbout;
