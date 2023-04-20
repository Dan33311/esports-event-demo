import Title from './Title'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <Title title="contacto" />

        <div className="contact-info">
          <div className="email-container">
            <div className="email">
              <svg width="76" height="86" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.76091 22.0774L38 1.1547L74.2391 22.0774V63.9226L38 84.8453L1.76091 63.9226V22.0774Z" stroke="#7532A8" stroke-width="2"/>
              </svg>
              <img src="/images/icon-email.png" alt="" />
            </div>
            <p>info@citycircuit.gg</p>
          </div>
          
          <div className="social-media">
            <div className="facebook">
              <svg width="76" height="86" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.76091 22.0774L38 1.1547L74.2391 22.0774V63.9226L38 84.8453L1.76091 63.9226V22.0774Z" stroke="#7532A8" stroke-width="2"/>
              </svg>
              <img src="/images/icon-facebook.png" alt="" />
            </div>
            <div className="instagram">
              <svg width="76" height="86" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.76091 22.0774L38 1.1547L74.2391 22.0774V63.9226L38 84.8453L1.76091 63.9226V22.0774Z" stroke="#7532A8" stroke-width="2"/>
              </svg>
              <img src="/images/icon-instagram.png" alt="" />
            </div>
            <div className="twitter">
              <svg width="76" height="86" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.76091 22.0774L38 1.1547L74.2391 22.0774V63.9226L38 84.8453L1.76091 63.9226V22.0774Z" stroke="#7532A8" stroke-width="2"/>
              </svg>
              <img src="/images/icon-twitter.png" alt="" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Contact