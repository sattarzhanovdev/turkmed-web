import React from 'react'
import c from './ContactsCard.module.scss'

const ContactsCard = ({img, text, span1, span2}) => {
  return (
   <div className={c.contacts_card}>
     <div className={c.contacts_img}>
       {img}
     </div>
     <p>{text}</p>
     {
      text === 'эл. почта' ? <a href='mailto:turkmedct@mail.ru'>{span1}</a> : <span>{span1}</span>
     }
     <span>{span2}</span>
   </div>
  )
}

export default ContactsCard
