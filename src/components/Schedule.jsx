import GameTimeCard from "./GameTimeCard"

const gameCards = [
  {
    hour: '12:00',
    activity: 'torneo',
    title: 'streetfighter v',
    image: '/images/e-sf.png'
  },
  {
    hour: '13:00',
    activity: 'torneo',
    title: 'the king of fighters xv',
    image: '/images/e-kof.png'
  },
  {
    hour: '13:00',
    activity: 'torneo',
    title: 'fifa 23',
    image: '/images/e-fifa.png'
  },
  {
    hour: '14:30',
    activity: 'concurso',
    title: 'cosplay',
    image: '/images/e-sf.png'
  },
  {
    hour: '15:00',
    activity: 'sorteo',
    title: 'productos Janus',
    image: '/images/e-sf.png'
  }
]

const Schedule = () => {
  return (  
    <section className="schedule">
      <div className="schedule-container">

        <div className="games-title">
          <h2>Programacion</h2>
          <div className="title-light">
            <img src="/images/line-title.png" alt="" />
            <img src="/images/light-line.png" alt="" />
          </div>
        </div>

        <div className="date-tag">
          <img src="/images/polygon-tag.png" alt="" />
          <p>Mayo 13</p>
        </div>

        <div>
          <div className="hours-map">
            <img src="/images/line-polygons.png" alt="" />
          </div>
          <div>
            {gameCards.map(gameCard => 
              <div>
                <GameTimeCard 
                  hour={gameCard.hour}
                  activity={gameCard.activity}
                  title={gameCard.title}
                  image={gameCard.image}
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Schedule;