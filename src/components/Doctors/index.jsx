import React from 'react'
import c from './Doctors.module.scss'
import { Components } from '..'
import { GetDoctors } from '../../helpers'

const Doctors = () => {
  const { doctors } = GetDoctors()

  return (
    <div className={c.doctors} id='spec'>
      <div className={c.container}>
        <div className={c.doctors} >
          <Components.Title title={'Наши врачи'} desc={'ВЫ ПОПАДЕТЕ В НАДЕЖНЫЕ РУКИ'} />

          <div className={c.cards}>
            {
            doctors?.map(item =>
              <Components.DoctorsCard item={item} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors