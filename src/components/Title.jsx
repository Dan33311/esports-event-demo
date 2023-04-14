const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="title-light">
        <img src="/images/line-title.png" alt="" />
        <img src="/images/light-line.png" alt="" />
      </div>
    </div>
  )
}

export default Title