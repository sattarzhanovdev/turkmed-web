import { Pages } from "../pages"
import spec from '../images/spec.svg'
import banner from '../images/group-photo.jpg'
import banner2 from '../images/reception.jpg'
import { GiWorld} from 'react-icons/gi'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { AiOutlinePicture } from 'react-icons/ai'
import { FiSmartphone } from 'react-icons/fi'
import { GrDocumentVerified } from 'react-icons/gr'

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Main/>,
  },
  {
    id: 2,
    route: '/doctors/',
    page: <Pages.DoctorsPage />,
  },
  {
    id: 3,
    route: '/contacts/',
    page: <Pages.ContactsPage />,
  },
  {
    id: 4,
    route: '/doctor/:id/',
    page: <Pages.DoctorMore />,
  },
  {
    id: 5,
    route: '/news/',
    page: <Pages.NewsPage />,
  },
  {
    id: 5,
    route: '/gallery/',
    page: <Pages.Gallery />,
  },
  {
    id: 6,
    route: '/appointment/:id',
    page: <Pages.Appointment />,
  },
  {
    id: 7,
    route: '/licenses/',
    page: <Pages.Licenses />,
  },
  {
    id: 8,
    route: '/news/:id/',
    page: <Pages.MoreNews />
  }
]

export const bannerData = [
  {
    id:1,
    url: banner2,
    desc: 'Мы заботимся о вашей здоровии',
    title: 'Впереди в медицинском совершенстве'
  },
  {
    id: 2,
    url: banner,
    desc: 'Мы заботимся о вашей здоровии',
    title: 'Впереди в медицинском совершенстве'
  }
]

export const footerLinksList = [
  {
    id:1,
    text: 'Запись на прием',
    route: ''
  },
  {
    id: 2,
    text: 'Врачи',
    route: ''
  },
  {
    id: 3,
    text: 'Наши услуги',
    route: ''
  },
  {
    id: 4,
    text: 'О нас',
    route: ''
  },
]

export const footerContactList = [
  {
    id: 1,
    text: 'Телефон: +996 (999) 164-000',
    route: ''
  },
  {
    id: 2,
    text: 'Эл. почта: fildineesoe@gmail.com',
    route: ''
  },
  {
    id: 3,
    text: 'Адрес: г.Ош, ул. Монуева, 65-2',
    route: ''
  },
]

export const navList = [
  {
    id:1,
    title: 'Главная',
    icon: <GiWorld/>,
    route: '/',
  },
  {
    id: 2,
    title: 'Новости',
    route: '/news',
    icon: <HiOutlineNewspaper />
  },
  {
    id: 3,
    title: 'Галерея',
    route: '/gallery',
    icon: <AiOutlinePicture/>
  },
  {
    id: 4,
    title: 'Контакты',
    route: '/contacts',
    icon: <FiSmartphone/>
  },
  {
    id: 5,
    title: 'Лицензии',
    route: '/licenses',
    icon: <GrDocumentVerified />
  },
]

export const all_spec = [
  {
    id:1,
    img: spec,
    text: 'Неврология'
  },
  {
    id: 2,
    img: spec,
    text: 'Кости'
  },
  {
    id: 3,
    img: spec,
    text: 'Онкология'
  },
  {
    id: 4,
    img: spec,
    text: 'Оториноларингология'
  },
  {
    id: 5,
    img: spec,
    text: 'Офтальмология'
  },
  {
    id: 6,
    img: spec,
    text: 'Сердечно-сосудистые'
  },
  {
    id: 7,
    img: spec,
    text: 'пульмонология'
  },
  {
    id: 8,
    img: spec,
    text: 'Почечная медицина'
  },
  {
    id: 9,
    img: spec,
    text: 'Гастроэнтерология'
  },
  {
    id: 10,
    img: spec,
    text: 'Урология'
  },
  {
    id: 11,
    img: spec,
    text: 'Дерматология'
  },
  {
    id: 12,
    img: spec,
    text: 'Гинекология'
  },
]

export const contactsInfo = [
  {
    id:1,
    img: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="39" viewBox="0 0 32 39" fill="none">< path d="M1 15.4C1 29.8 16 37 16 37C16 37 31 29.8 31 15.4C31 7.45 24.2875 1 16 1C7.7125 1 1 7.45 1 15.4Z" stroke="#007E85" strokeWidth="2" /><path d="M16.0001 20.32C18.8499 20.32 21.1601 18.0098 21.1601 15.16C21.1601 12.3102 18.8499 10 16.0001 10C13.1503 10 10.8401 12.3102 10.8401 15.16C10.8401 18.0098 13.1503 20.32 16.0001 20.32Z" stroke="#007E85" strokeWidth="2" /></svg > ,
    text: 'адрес',
    span1: 'г.Ош, ул. Монуева, 65-2',
    span2: ''
  },
  {
    id:2,
    img: <svg xmlns="http://www.w3.org/2000/svg" width="39" height="32" viewBox="0 0 39 32" fill="none">
      <path d="M1.7998 1H37.1998V30.5H1.7998V1Z" stroke="#007E85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37.1998 6.8999L19.4998 18.6999L1.7998 6.8999" stroke="#007E85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    text: 'эл. почта',
    span1: 'turkmedct@mail.ru',
    span2: ''
  },
  {
    id: 3,
    img: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <path d="M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z" stroke="#007E85" stroke-width="2" stroke-linecap="round" />
      <path d="M21.6777 23.5L16.6777 16V6" stroke="#007E85" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    text: 'график работы',
    span1: 'Mon-Sat 09:00-20:00',
    span2: 'Sunday Emergency only'
  }
]

export const timeList = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]