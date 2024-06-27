import React from 'react'
import c from './News.module.scss'
import NewsCard from './NewsCard'
import Title from '../Title'
import { GetNews } from '../../helpers'

const News = () => {
  // const {news} = GetNews()
  // console.log(news);

  const news = []

  return (
    <div className={c.news}>
      <Title desc={'мы всегда делимся своими новостями'} title={'Новости'}/>
      <div className={c.news_block}>
        <div className={c.news_card}>
          {
            news?.length !== 0 ?
            news?.map((item, i) => (
              <NewsCard 
                key={i}
                id={item.id}
                date={item.date} 
                description={item.description} 
                image={item.image}
                title={item.title}
              />
            )) :
            <h4>Нету новостей!</h4>
          }
        </div>
      </div>
    </div>
  )
}

export default News
