import React from 'react'
import c from './more.module.scss'
import { useParams } from 'react-router-dom'
import { GetNews } from '../../helpers'

const MoreNews = () => {
  const { id } = useParams()
  const { news } = GetNews()

  const newsResult = news?.find(item => item.id === Number(id))

  console.log(newsResult);

  return (
    <div className={c.container}>
      <div className={c.new}>
        <div className={c.left}>
          <img 
            src={newsResult?.image}
            alt="фотография" 
          />
        </div>
        <div className={c.right}>
          <h2>{newsResult?.title}</h2>
          <p>{newsResult?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MoreNews