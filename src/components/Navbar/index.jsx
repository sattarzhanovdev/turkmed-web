import React from 'react'
import c from './Navbar.module.scss'
import logo from '../../images/Logo.svg'
import phone from '../../images/phone.svg'
import location from '../../images/location.svg'
import clock from '../../images/clock.svg'

const NavbarTop = () => {
  return (
    <div className={c.navbar}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={c.info}>

          <div>
            <img src={phone} alt="phone" />
            <div>
              <p>ТЕЛЕФОН</p>
              <a href="tel:996227164000">+996 (999) 164-000</a>
              <br />
              <a href="tel:996227164000">+996 (227) 164-000</a>
            </div>
          </div>
          {/*  */}
          <div>
            <img src={clock} alt="clock" />
            <div>
              <p>ГРАФИК РАБОТЫ</p>
              <span>07:00 - 17:00</span>
            </div>
          </div>
          {/*  */}
          <div>
            <img src={location} alt="location" />
            <div>
              <p>АДРЕС</p>
              <span> г.Ош, ул. Монуева, 65-2</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
