import React from 'react'
import { footerLinksList } from '../../../utils'
import c from './FooterLinks.module.scss'

const FooterLinks = () => {
  return (
    <div className={c.footer_links}>
      <p>Важные ссылки</p>
      <ul>
        {
          footerLinksList.map(item => (
            <li key={item.id}>
              {item.text}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterLinks
