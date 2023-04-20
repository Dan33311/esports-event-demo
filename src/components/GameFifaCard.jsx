const GameFifaCard = () => {
  return ( 
    <div className="card">

      <div className="card-description">
        <h3>fifa 23</h3>

        <div className="game-tags">
          <div className="tag-container">
            <img src="/images/polygon-tag.png" alt="" />
            <p className="card-variant-color">Sports</p>
          </div>
          <div className="tag-container">
            <img src="/images/polygon-tag.png" alt="" />
            <p className="card-variant-color">1 vs 1</p>
          </div>
          <div className="tag-container">
            <img src="/images/polygon-tag.png" alt="" />
            <p className="card-variant-color">PC</p>
          </div>
        </div>

        <p className="game-desc">Podrán participar en la actividad las personas: (I) naturales mayores de dieciocho (18) años, (II) residentes en Bogotá y Cundinamarca, (III) que estén registrados en el enlace descrito en la mecánica.</p>

        <h4 className="card-variant-color">Formato: </h4>
        <p>Eliminacion sencilla.</p>
        <h4 className="card-variant-color">premiacion: </h4>
        <p>Se entregarán premios al primer, segundo, y tercer lugar del evento.</p>
      </div>

      <div className="card-img">
        <img src="" alt="" />
        <img className="game-img" src="/images/e-fifa.png" alt="" />
      </div>

    </div>
  )
}

export default GameFifaCard