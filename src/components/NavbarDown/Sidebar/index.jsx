import React from 'react'
import c from './Sidebar.module.scss'
import { navList } from '../../../utils'
import {NavLink } from 'react-router-dom'

const Sidebar = ({active, setActive}) => {
  return (
    <div className={active ? `${c.sidebar} ${c.sidebar_active}` : c.sidebar}>
      <div className={c.inner}>
        <ul>
          {
            navList.map(item => (
              <li key={item.id}>
                <NavLink 
                  to={item.route} 
                  className={({ isActive }) => (isActive ? c.active : 'inactive')}
                  onClick={() => setActive(!active)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
        {/* <button className={c.sidebar_btn}>Appointment</button> */}
      </div>
    </div>
  )
}

export default Sidebar
