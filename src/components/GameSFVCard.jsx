const GameSFVCard = () => {
  return ( 
    <div className="card">

      <div className="card-img">
        <img src="" alt="" />
        <img className="game-img" src="/images/e-sf.png" alt="" />
      </div>

      <div className="card-description">
        <h3>street fighter v</h3>

        <div className="game-tags">
          <div className="tag-container">
            <img src="/images/polygon-tag.png" alt="" />
            <p>Fighting</p>
          </div>
          <div className="tag-container">
            <img src="/images/polygon-tag.png" alt="" />
            <p>1 vs 1</p>
          </div>
          <div className="tag-container">
            <img src="/images/polygon-tag.png" alt="" />
            <p>PC</p>
          </div>
        </div>

        <p className="game-desc">Podrán participar en la actividad las personas: (I) naturales mayores de dieciocho (18) años, (II) residentes en Bogotá y Cundinamarca, (III) que estén registrados en el enlace descrito en la mecánica.</p>

        <h4>Formato: </h4>
        <p>Eliminacion doble.</p>
        <h4>premiacion: </h4>
        <p>Se entregarán premios al primer, segundo, y tercer lugar del evento.</p>
      </div>

    </div>
  );
}

export default GameSFVCard;