import React from 'react'
import c from './Banner.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import { bannerData } from '../../utils';

const Banner = () => {
  return (
    <div className={c.banner_swiper}>
      <Swiper 
        className={c.my_swiper}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {
          bannerData.map(item => (
            <SwiperSlide key={item.id}>
              <div className={c.banner} style={{ 
                backgroundImage: `url("${item.url}")`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
              >
              </div>
            </SwiperSlide>
          ))
        }
      
     </Swiper> 
      
      <div className={c.container}>
        <div className={c.container_absolute}>
          <div className={c.banner_title}>
            <p>Мы заботимся о вашей здоровии</p>
            <h1>Впереди в медицинском совершенстве
            </h1>
            <button>
              <a href="#spec">Наши специалисты</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
