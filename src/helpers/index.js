import React from "react"
import { API } from "../api"

export const GetDoctors = () => {
  const [ doctors, setDoctors ] = React.useState(null)
  
  React.useEffect(() => {
    API.getDoctors()
      .then(res => setDoctors(res.data))
  }, [])

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