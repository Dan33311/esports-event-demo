import GameSFVCard from './GameSFVCard'
import GameKOFCard from './GameKOFCard'
import GameFifaCard from './GameFifaCard'
import Title from './Title'


const Games = () => {
  return ( 
    <section className="games">
      <div className="games-container">

        <Title title="Eventos" />

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