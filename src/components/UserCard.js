import {useState} from 'react'

const UserCard = ({name, changeTime}) => {
  // State of currently highlighted button
  const [selected, setSelected] = useState('weekly');

  const altText = `Image of ${name}`

  // Highlight the clicked button and set the correlated times
  const handleClick = (time) => {
    setSelected(time[0]);
    changeTime(time);
  }

  return (
    <div className="user-card">
      <div className="user-top">
        <div className="img-wrapper">
          <img className="user-img" src="images/image-jeremy.png" alt={altText}></img>
        </div>
        <div className='info-wrapper'>
          <h2 className="user-heading-secondary">Report for</h2>
          <h1 className="user-heading-primary">{name}</h1>
        </div>
      </div>
      <div className="user-bottom">
        <div className="categories">
          <button 
            className={`category-btn ${selected==='daily' ? ' selected' : ''}`} 
            onClick={() => handleClick(['daily', 'Last Day'])}>
            Daily
          </button>
          <button 
            className={`category-btn ${selected==='weekly' ? ' selected' : ''}`} 
            onClick={() => handleClick(['weekly', 'Last Week'])}>
            Weekly
          </button>
          <button 
            className={`category-btn ${selected==='monthly' ? ' selected' : ''}`} 
            onClick={() => handleClick(['monthly', 'Last Month'])}>
            Monthly
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;