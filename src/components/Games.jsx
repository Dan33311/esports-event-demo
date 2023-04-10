import GameCard from './GameCard'

const Games = () => {
  return ( 
    <section className="games">
      <div className="games-container">

        <div className="games-title">
          <h2>Eventos</h2>
          <div className="title-light">
            <img src="/images/line-title.png" alt="" />
            <img src="/images/light-line.png" alt="" />
          </div>
        </div>

        <GameCard />

        <div>
          <img src="" alt="" />
        </div>

      </div>
    </section>
  );
}

export default Games;