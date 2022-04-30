const Home: React.FC = () => {
  return (
    <>
      <section className="home__section">
        <header className="home__header">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Jed Brennen
          </h1>
          <h6 data-aos="fade-left" data-aos-duration="1000">
            Full Stack Developer
          </h6>
        </header>
      </section>
      <section className="home__section"></section>
    </>
  );
};

Home.displayName = 'Home';
export default Home;
