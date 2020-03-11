import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contact = () => {

  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if(contacts.length === 0)
  {
    return <p className="flow-text">No Contacts Listed</p>
  }


  return (

      <ul className="collection">

        { filtered ? filtered.map(contact => (
        <ContactItem contact={contact} key={contact.id}/>
      ))  : contacts.map(contact => <ContactItem contact={contact} key={contact.id}/>).sort().reverse()  }

      </ul>
  )
}

export default Contact
