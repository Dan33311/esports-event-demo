const Hero = () => {

  return (
    <section className="hero">
      <div className="hero-container">

        <div className="logo-pccc">
          <img src="images/hero-logo-1.png" alt="" />
        </div>

        <div className="logos">
          <img className="logo-ccw" src="images/logo-citycircuit-white.png" alt="" />
          <img className="logo-j" src="images/logo-janus.png" alt="" />
        </div>

        <div className="countdown"></div>

        <p className="date"><span>29 Abril</span></p>
      </div>
    </section>
  );
}

export default Hero;