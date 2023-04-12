const GameTimeCard = ({hour, activity, title, image}) => {
  return ( 
    <div className="card-schedule">

      <p>{hour}</p>
      <p>{activity}</p>
      <p>{title}</p>

      <div className="card-img">
        <img src={image} alt="" />
      </div>

    </div>
  );
}

export default GameTimeCard;