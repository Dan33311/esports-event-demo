import GameSFVCard from './GameSFVCard'
import GameKOFCard from './GameKOFCard'
import GameFifaCard from './GameFifaCard'

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

        <GameSFVCard />
        <div className="separator">
          <img src="/images/game-separator.png" alt="" />
        </div>
        <GameFifaCard />
        <div className="separator-left">
          <img src="/images/game-separator.png" alt="" />
        </div>
        <GameKOFCard />

      </div>
    </section>
  )
}

export default Games