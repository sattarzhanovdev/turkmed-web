import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import c from './BannerSwiper.module.scss'
import "swiper/css";
import Banner from '../Banner';
import { bannerData } from '../../utils';

const BannerSwiper = () => {
  return (
    <div className={c.banner_swiper}>
     <Swiper>
      {
        bannerData.map(item => (
          <SwiperSlide key={item.id}>
            <Banner desc={item.desc} title={item.title} url={item.url}/>
          </SwiperSlide>
        ))
      }
      
     </Swiper> 
    </div>
  )
}

export default BannerSwiper
