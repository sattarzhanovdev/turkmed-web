import React from 'react'
import c from './ReviewsCard.module.scss'


const ReviewsCard = ({desc, img, fullName}) => {
  return (
    <div className={c.card}>
      <div className={c.user_img}>
        <img src={img} alt="" loading='lazy'/>
      </div>
      <div className={c.card_inner}>
        <h3>
          {fullName}
        </h3>
        <p>
          {desc.length > 260 ? desc.split('').slice(0, 260).join('') + ' ...' : desc}
        </p>
      </div>
      <h1>
        “
      </h1>
    </div>
  )
}

export default ReviewsCard
