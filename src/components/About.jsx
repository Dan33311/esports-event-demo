const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="games-title">
          <h2>Nosotros</h2>
          <div className="title-light">
            <img src="/images/line-title.png" alt="" />
            <img src="/images/light-line.png" alt="" />
          </div>
        </div>

        <div className="about-info">
          <p className="about-desc">City Circuit se centra en ofrecer una experiencia de juego emocionante y única para los jugadores asistentes a nuestro evento, para ayudar a promover y hacer crecer la experiencia gamer, ya que creemos que los juegos son una forma increíble de involucrarse en mundos de emocion y competitividad. Esperamos ofrecer una experiencia de juego emocionante y única a nuestros seguidores, y estamos comprometidos en mejorar continuamente la experiencia que brindamos a nuestros jugadores y asistentes.</p>
          <img className="about-img" src="/images/about.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;