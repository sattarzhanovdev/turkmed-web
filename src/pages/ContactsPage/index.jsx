import React from 'react'
import c from './ContactsPage.module.scss'
import { Components } from '../../components'
import { ScrollTop } from '../../helpers'
const ContactsPage = () => {
  React.useEffect(() => {
    ScrollTop()
  }, [])
  return (
    <div>
      <Components.Contacts/>
    </div>
  )
}

export default ContactsPage
