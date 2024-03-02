import React from 'react'
import c from './Card.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const DoctorsCard = ({item}) => {
  const navigate = useNavigate()

  return (
    <div className={c.card}>
      <div className={c.image}>
        <img 
          src={item.image} 
          alt={item.full_name}
        />
      </div>
      <div className={c.info}>
        <p>{item.full_name}</p>
        <h2>{item.job}</h2>
      </div>
      <button onClick={() => navigate(`/doctor/${item.id}/`)}>
        Посмотреть
      </button>
    </div>
  )
}

export default DoctorsCard