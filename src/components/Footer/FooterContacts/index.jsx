import React from 'react'
import { footerContactList } from '../../../utils'
import c from './FooterContacts.module.scss'

const FooterContacts = () => {
  return (
    <div className={c.footer_contacts}>
      <p>Контакты</p>
      <ul>
        {
          footerContactList.map(item => (
            <li key={item.id}>
              {item.text}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterContacts
