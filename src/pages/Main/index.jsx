import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'

const Main = () => {
  return (
    <div className={c.main}>
      <Components.Banner/>
      <Components.WelcomeText/>
      {/* <Components.Specialties/> */}
      <Components.Doctors/>
      <Components.News/>
      <Components.Reviews/>
      <Components.Contacts/>
    </div>
  )
}

export default Main
