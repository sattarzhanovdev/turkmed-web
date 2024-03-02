import React from 'react'
import c from './NewsCard.module.scss'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({id, date, description, image, title}) => {
  const Navigate = useNavigate()

  return (
    <div className={c.card}>
      <img src={image} alt="news" loading='lazy'/>
      <div className={c.card_inner}>
        <span className={c.date}>
          {date}
        </span>
        <h3>{title}</h3>
        <p>
          {description.length > 50 ? description.split('').slice(0, 50).join('') + '...' : description}
        </p>
        <button onClick={() => Navigate(`/news/${id}/`)}>Перейти</button>
      </div>
    </div>
  )
}

export default NewsCard
