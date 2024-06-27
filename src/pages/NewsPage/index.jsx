import React from 'react'
import { GetNews, ScrollTop } from '../../helpers'
import c from './News.module.scss'
import Title from '../../components/Title'
import { Components } from '../../components'

const NewsPage = () => {
  // const {news} = GetNews()
  React.useEffect(() => {
    ScrollTop()
  }, [])

  const news = []

  return (
    <div className={c.news}>
      <Title desc={'мы всегда делимся своими новостями'} title={'Новости'}/>
      <div className={c.news_block}>
        <div className={c.news_card}>
          {
            news?.length !== 0 ?
            news?.map((item, i) => (
              <Components.NewsCard 
                key={i}
                id={item.id}
                date={item.date} 
                description={item.description} 
                image={item.image}
                title={item.title}
              />
            )) :
            <h3>Нету новостей</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default NewsPage