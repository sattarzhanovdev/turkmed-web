import axios from "axios";

export const API = {
  getDoctors: () => axios.get('https://turkmedgem.pythonanywhere.com/doctors/'),
  postAppointment: (data) => axios.post('https://turkmedgem.pythonanywhere.com/appointment/', data),
  getNews: () => axios.get('https://turkmedgem.pythonanywhere.com/news/news/'),
  postReview: (data) => axios.post('https://turkmedgem.pythonanywhere.com/reviews/', data),
  getGallery: () => axios.get('https://turkmedgem.pythonanywhere.com/news/gallery/'),
  getLicenses: () => axios.get('https://turkmedgem.pythonanywhere.com/news/licenses/'),
  getReviews: () => axios.get('https://turkmedgem.pythonanywhere.com/reviews/'),
}