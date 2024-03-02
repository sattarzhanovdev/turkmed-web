import React from 'react'
import {GetLicenses, ScrollTop} from '../../helpers'
import c from './Licenses.module.scss'


const Licenses = () => {
  const {licenses} = GetLicenses()
  React.useEffect(() => {
    ScrollTop()
  }, [])
  return (
    <div className={c.licenses}>
      {
        licenses?.map(item => (
          <div>
            <img src={item.image} alt="licenses" loading='lazy'/>
          </div>
        ))
      }
    </div>
  )
}

export default Licenses
