const Card = ({data, timeframe}) => {

  const type = data.title.toLowerCase().split(' ').join('-');
  const cardClass = `card card-${type}`;

  const curr = (data.timeframes[timeframe[0]].current).toString() + "hrs";
  const prev = (data.timeframes[timeframe[0]].previous).toString() + "hrs";
  
  const prevText = timeframe[1];

  return (
    <div className={cardClass}>
      <div className="card-top"></div>
      <div className="card-bottom">
        <div className="card-top-row">
          <h2 className="card-title">{data.title}</h2>
          <span className="card-dots">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" 
              fillRule="evenodd"/>
            </svg>
          </span>
        </div>
          <div className="card-time-wrap">
            <h1 className="card-time">{curr}</h1>
            <span className="card-sub">{prevText} - {prev}</span>
          </div>
      </div>
    </div>
  )
}

export default Card;