const GameTimeCard = ({hour, activity, title, image}) => {
  return ( 
    <div className="card-schedule">

      <div className="gcard-desc">
        <p>{hour}</p>
        <p>{activity}</p>
        <p>{title}</p>
      </div>

      <div className="gcard-img">
        <img src={image} alt="" />
      </div>

    </div>
  )
}

export default GameTimeCard