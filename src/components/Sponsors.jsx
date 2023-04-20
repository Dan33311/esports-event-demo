import Title from './Title'

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="sponsors-container">
        <Title title="nuestros patrocinadores" />

        <div className="sponsors-info">
          <img className="sponsor-img" src="/images/sponsor-1.png" alt="" />
          <img className="sponsor-img" src="/images/sponsor-2.png" alt="" />
          <img className="sponsor-img" src="/images/sponsor-3.png" alt="" />
          <img className="sponsor-img" src="/images/sponsor-4.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Sponsors