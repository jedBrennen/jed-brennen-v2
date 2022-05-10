import HomeAbout from './HomeAbout/HomeAbout';
import HomeExperience from './HomeExperience/HomeExperience';
import HomeExpertise from './HomeExpertise/HomeExpertise';

const Home: React.FC = () => {
  return (
    <>
      <section id="home" className="home__section home__header-section">
        <header className="home__header">
          <h1 data-aos="fade-right">Jed Brennen</h1>
          <h6 data-aos="fade-left" className="jb-typography__h6--thin">
            Full Stack Developer
          </h6>
        </header>
      </section>
      <HomeAbout />
      <HomeExpertise />
      <HomeExperience />
    </>
  );
};

Home.displayName = 'Home';
export default Home;
