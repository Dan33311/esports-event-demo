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
    image: '/images/e-cos.png'
  },
  {
    hour: '15:00',
    activity: 'sorteo',
    title: 'accesorios Janus',
    image: '/images/e-gifts.png'
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
          <img src="/images/polygon-date-s.png" alt="" />
          <p>Mayo 13</p>
        </div>

        <div className="g-cards-container">
          <div className="hours-polygons">
            <img src="/images/line-polygons.png" alt="" />
          </div>
          <div className="g-cards">
            {gameCards.map(gameCard => 
              <div className="g-card">
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