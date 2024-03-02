import React from 'react'
import c from './Reviews.module.scss'
import Title from '../Title'
import ReviewsCard from './ReviewsCard'
import ReviewsModal from './ReviewsModal'
import { API } from '../../api'


const Reviews = () => {
  const [modalWindow, setModalWindow] = React.useState(false)
  const [reviews, setReviews] = React.useState(null)
  
  React.useEffect(() => {
    API.getReviews().then(res => setReviews(res.data))
  }, [modalWindow])

  if(!reviews) return <h2>wait...</h2>
  return (
    <div className={c.reviews}>
      <Title desc={'наши довольные пациенты'} title={'Отзывы'}/>
      {
        modalWindow && <ReviewsModal setModalState={setModalWindow}/>
      }
      <div className={c.add_btn}> 
        <button onClick={() => setModalWindow(true)}>
          Написать отзыв
        </button>
      </div>
      <div className={c.cards}>
        {
          reviews.length !== 0 ?
          reviews?.map(item => (
            <ReviewsCard key={item.id} desc={item.description} img={item.image} fullName={item.full_name}/>
          )) : <p style={{textAlign: 'center'}}>еще нет отзывов</p>
        }
      </div>
    </div>
  )
}

export default Reviews
