import React from 'react'
import c from './Gallery.module.scss'
import { GetGallery, ScrollTop } from '../../helpers'
import image1 from '../../images/gallery/1.jpg'
import image2 from '../../images/gallery/2.jpg'
import image3 from '../../images/gallery/3.jpg'
import image4 from '../../images/gallery/4.jpg'
import image5 from '../../images/gallery/5.jpg'

const Gallery = () => {
  // const {gallery} = GetGallery()
  React.useEffect(() => {
    ScrollTop()
  }, [])
  const gallery = [
    {
      id: 1,
      image: image1
    },
    {
      id: 2,
      image: image2
    },
    {
      id: 3,
      image: image3
    },
    {
      id: 4,
      image: image4
    },
    {
      id: 5,
      image: image5
    },
  ]
  return (
    <div className={c.gallery}>
      <div className={c.title}>
        <h1>
          Галерея
        </h1>
      </div>
      <div className={c.photos}>
        {
          gallery?.map((item, id) => (
            <div key={id} >
              <img src={item.image} alt="img" loading='lazy'/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
