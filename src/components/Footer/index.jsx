import React from 'react'
import c from './Footer.module.scss'
import insta from '../../images/instagram.svg'
import whatsapp from '../../images/whatsapp.svg'
import devLogo from '../../images/DevDesign.svg'
import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return (
    <>
      <div className={c.footer}>
        <div className={c.container}>
          <div className={c.footer_bottom}>
            <div className={c.bottom_flex}>
              <p>© 2023 TURKMED - гемодиализ</p>
              <ul>
                <li>
                  <a href="https://www.instagram.com/turkmed_osh" target="_blank">
                    <img src={insta} alt="insta" />
                  </a>
                </li>
                <li>
                  <BsFacebook/>
                </li>
                <li>
                  <img src={whatsapp} alt="whatsapp" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={c.our_footer}>
        <p>Сайт разработан:</p>
        <a href="https://devdesign.site/" target="_blank">
          <img src={devLogo} alt="devDesign" />
        </a>
      </div>
    </>
  )
}

export default Footer
