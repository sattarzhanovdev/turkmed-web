import React from 'react'
import {GetLicenses, ScrollTop} from '../../helpers'
import c from './Licenses.module.scss'
import license from '../../images/ЛИЦЕНЗИЯ.png'


const Licenses = () => {
  // const {licenses} = GetLicenses()
  React.useEffect(() => {
    ScrollTop()
  }, [])
  const licenses = [
    {
      image: license
    }
  ]
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
