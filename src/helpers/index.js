import React from "react"
import { API } from "../api"
import image from '../images/doctors/image.jpg'

export const GetDoctors = () => {
  // const [ doctors, setDoctors ] = React.useState(null)
  
  React.useEffect(() => {
    // API.getDoctors()
    //   .then(res => setDoctors(res.data))

  }, [])
  const doctors = [
    {
      id: 1,
      full_name: 'Ибрагимов Нурдин Сиражидинович',
      job: 'Кардиолог',
      image: image,
      description: 'Ибрагимов Нурдин Сиражидинович родился 13-мая 1993 года в городе Ош, после окончания школы поступил в 2009 году в Ошский государственный университет, завершил обучение в 2015 году вмедицинском институте при ОшГУ, факультет медицинский, специальность -лечебное дело. Он начал свою карьеру в 2015 году вКГМА Ординатура Кардиохирургия как врач- ординатор. Сфевраля 2016 по июнь 2016 года Интернатура ОшГУ Кардиология как кардиолог В 2020 - 2021 ЮРФА как оператор МРТ и КТ В 2023 году как кардиолог в медицинской клинике ОсОО «Турк-Мед»',
      doctor_awards: [],
    },
    {
      id: 2,
      full_name: 'Эрботоев Эрмек Турсуналиевич',
      job: 'Хирург ',
      image: image,
      description: 'Эрботоев Эрмек Турсуналиевич родился в 14-ноября в 1992 году вЖалал-Абадской области, Аксыйского района, город Кербен после окончания школы поступил в 2010 году в Ошский государственный университет, завершил обучение в2016 году в медицинском институте при ОшГУ, факультет медицинский, специальность -лечебное дело. Он начал свою карьеру в медицинской клинике ЮРФА 2018-2021 как оператор MPT и КТ С 2021 года как хирург в медицинской клинике ОсОО «Турк-Мед»',
      doctor_awards: [],
    },
    {
      id: 3,
      full_name: 'Рахматуллаев Мойдинжон Сайибжанович',
      job: 'Заведующий отделения',
      image: image,
      description: '',
      doctor_awards: [],
    }
  ]

  return {
    doctors
  }
}

export const GetNews = () => {
  const [news, setNews] = React.useState(null)

  React.useEffect(() => {
    API.getNews()
      .then(res => setNews(res.data))
  }, [])

  return {
    news
  }
}

export const GetGallery = () => {
  const [gallery, setGallery] = React.useState(null)

  React.useEffect(() => {
    API.getGallery()
      .then(res => setGallery(res.data))
  }, [])

  return {
    gallery
  }
}

export const GetLicenses = () => {
  const [licenses, setLicenses] = React.useState(null)

  React.useEffect(() => {
    API.getLicenses()
      .then(res => setLicenses(res.data))
  }, [])

  return {
    licenses
  }
}

export const GetReviews = () => {
  const [reviews, setReviews] = React.useState(null)

  React.useEffect(() => {
    API.getReviews()
      .then(res => setReviews(res.data))
  }, [])

  return {
    reviews
  }
}



export const ScrollTop = () => {
  window.scrollTo({
    top: 0
  })
}