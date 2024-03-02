import axios from "axios";

export const API = {
  getDoctors: () => axios.get('/api/doctors/'),
  postAppointment: (data) => axios.post('/api/appointment/', data),
  getNews: () => axios.get('/api/news/news/'),
  postReview: (data) => axios.post('/api/reviews/', data),
  getGallery: () => axios.get('/api/news/gallery/'),
  getLicenses: () => axios.get('/api/news/licenses'),
  getReviews: () => axios.get('/api/reviews/'),
}