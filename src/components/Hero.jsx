import CountdownTimer from './CountdownTimer'

const Hero = () => {

  return (
    <section className="hero">
      <div className="hero-container">

        <div className="logos">
          <img className="logo-ccw" src="images/logo-citycircuit-white.png" alt="" />
          <img className="logo-j" src="images/logo-janus.png" alt="" />
        </div>
        <img className="count-light" src="images/ambient-light-countdown.png" alt="" />
        <CountdownTimer />

        <p className="date"><span>Mayo 13</span></p>
        <div className="logo-plazac">
          <img src="images/hero-logo-1.png" alt="" />
        </div>
        <p className="hero-footer">¡Inscríbete y participa en nuestros eventos y actividades totalmente gratis!</p>
      </div>
    </section>
  );
}

export default Hero;